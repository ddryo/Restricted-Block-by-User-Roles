<?php
/**
 * Plugin Name: Restricted Block by User Roles
 * Plugin URI: https://github.com/ddryo/Restricted-Block-by-User-Roles
 * Description: This plugin can use a custom block to display content only to logged-in users belonging to the specified permission group.
 * Version: 1.0.7
 * Author: LOOS,Inc.
 * Author URI: https://loos-web-studio.com/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: loos-restricted-block
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * 翻訳用のテキストドメインを定義
 */
define( 'LOOS_RB_DOMAIN', 'loos-restricted-block' );


/**
 * プラグインディレクトリまでのパス
 */
define( 'LOOS_RB_PATH', plugin_dir_path( __FILE__ ) );


/**
 * 翻訳ファイルを登録
 */

add_action( 'plugins_loaded', function() {

	/**
	 * 翻訳ファイルの読み込み
	 */
	$locale = apply_filters( 'plugin_locale', determine_locale(), LOOS_RB_DOMAIN );
	load_textdomain( LOOS_RB_DOMAIN, LOOS_RB_PATH . 'languages/loos-restricted-block-' . $locale . '.mo' );

	/**
	 * ブロックカテゴリ追加
	 */
	add_filter( 'block_categories', function( $categories, $post ) {
		$my_category = [
			[
				'slug' => 'loos-rb-category',  //ブロックカテゴリーのスラッグ
				'title' => __( 'With restrictions', LOOS_RB_DOMAIN ),   //ブロックカテゴリーの表示名
			]
		];
		return array_merge( $categories, $my_category );
	}, 10, 2 );
} );


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
		$asset_file['version'],
		true
	);

	// ダイナミックブロックとして登録
	if ( function_exists('register_block_type') ) {

		// $metadata     = json_decode( file_get_contents( __DIR__ . '/src/user-profile/block.json' ), true );
		$metadata = json_decode( file_get_contents( LOOS_RB_PATH . 'src/restricted-block/block.json' ), true );

		register_block_type(
			'loos-rb/restricted-block',
			array_merge(
				$metadata,
				[
					'editor_script'   => 'loos-rb-script',
					'render_callback' => function( $attributes, $content ) {

						if ( $attributes[ 'nonLoggedin' ] ) {

							if ( is_user_logged_in() ) return '';
							return $content;

						} else {

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
						}

					},
				]
			)
		);
	}

	// JS用翻訳ファイルの読み込み
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations(
			'loos-rb-script',
			LOOS_RB_DOMAIN,
			LOOS_RB_PATH . 'languages'
		);
	}

} );

// add_action( 'enqueue_block_editor_assets', function() {} );
