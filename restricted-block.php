<?php
/**
 * Plugin Name: Restricted Block by User Roles
 * Plugin URI: https://github.com/ddryo/Restricted-Block-by-User-Roles
 * Description: This plugin can use a custom block to display content only to logged-in users belonging to the specified permission group.
 * Version: 1.0.0
 * Author: LOOS WEB STUDIO
 * Author URI: https://loos-web-studio.com/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: loos-restricted-block
 */

if( !defined( 'ABSPATH' ) ) exit;

/**
 * 翻訳用のテキストドメインを定義
 */
define( 'LOOS_RB_DOMAIN', 'loos-restricted-block' );

/**
 * プラグインディレクトリまでのパスを定義（末尾の / を排除しておく）
 */
define( 'LOOS_RB_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * 翻訳ファイルを登録
 */
load_plugin_textdomain( LOOS_RB_DOMAIN, false, basename( LOOS_RB_PATH ) .'/languages' );


/**
 * 
 */
// add_action( 'enqueue_block_editor_assets', function() {} );


/**
 * ブロックカテゴリ追加
 */
add_filter( 'block_categories', function( $categories, $post ) {
    $my_category = [
        [
            'slug' => 'loos-rb-category',  //ブロックカテゴリーのスラッグ
            'title' => __('With restrictions', LOOS_RB_DOMAIN),   //ブロックカテゴリーの表示名
        ]
    ];
    
    return array_merge( $categories, $my_category );
}, 10, 2 );


/**
 * カスタムブロック用のスクリプトを追加
 */
add_action( 'init', function() {

    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
    
    // block用スクリプトの登録
    wp_register_script(
        'loos-rb-script',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // JS用翻訳ファイルの読み込み
    if ( function_exists( 'wp_set_script_translations' ) ) {
        wp_set_script_translations(
            'loos-rb-script',
            LOOS_RB_DOMAIN,
            LOOS_RB_PATH . '/languages'
        );
    }

    // ダイナミックブロックとして登録
    if ( function_exists('register_block_type') ) {
        register_block_type(
            'loos-rb/restricted-block',
            [
                'editor_script' => 'loos-rb-script',
                'attributes' => [
                    //JS側と合わせないと「ブロック読み込みエラー: 無効なパラメーター: attributes」が出たりする
                    'administrator' => [
                        'type'    => 'boolean',
                        'default' => true,
                    ],
                    'editor' => [
                        'type'    => 'boolean',
                        'default' => true,
                    ],
                    'author' => [
                        'type'    => 'boolean',
                        'default' => true,
                    ],
                    'contributor' => [
                        'type'    => 'boolean',
                        'default' => true,
                    ],
                    'subscriber' => [
                        'type'    => 'boolean',
                        'default' => true,
                    ],
                    'userID' => [
                        'type'    => 'number',
                        'default' => 0,
                    ],
                ],
                'render_callback' => function( $attributes, $content ) {

                    if ( ! is_user_logged_in() ) return '';

                    $isShow = false;

                    // $current_user = wp_get_current_user();
                    // $userID = $current_user->ID;

                    foreach ( [
                        'administrator',
                        'editor',
                        'author',
                        'contributor',
                        'subscriber'
                    ] as $role ) {
                        if ( $attributes[ $role ] && current_user_can( $role ) ) {
                            $isShow = true;
                        }
                    }

                    if ( ! $isShow ) return '';

                    return $content;

                },
            ]
        );
    }

} );

