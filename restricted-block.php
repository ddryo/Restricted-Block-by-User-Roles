<?php
/**
 * Plugin Name: Restricted Block by User Roles
 * Plugin URI: https://github.com/ddryo/Restricted-Block-by-User-Roles
 * Description: Enables blocks that can be shown / hidden for each user role.
 * Version: 1.2.0
 * Author: LOOS,Inc.
 * Author URI: https://loos-web-studio.com/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: loos-restricted-block
 */

if ( ! defined( 'ABSPATH' ) ) exit;


/**
 * プラグインディレクトリまでのパス
 */
define( 'LOOS_RB_PATH', plugin_dir_path( __FILE__ ) );
define( 'LOOS_RB_URL', plugins_url( '/', __FILE__ ) );


/**
 * plugins_loaded
 */
add_action( 'plugins_loaded', function() {

	// 翻訳ファイルの読み込み
	if ( 'ja' === determine_locale() ) {
		load_textdomain( 'loos-restricted-block', LOOS_RB_PATH . 'languages/loos-restricted-block-ja.mo' );
	} else {
		load_plugin_textdomain( 'loos-restricted-block' );
	}

	// ブロックカテゴリ追加
	global $wp_version;
	$hookname = ( version_compare( $wp_version, '5.8-beta' ) >= 0 ) ? 'block_categories_all' : 'block_categories';
	add_filter( $hookname, function( $categories, $post ) {
		$my_category = [
			[
				'slug'  => 'loos-rb-category',
				'title' => __( 'With restrictions', 'loos-restricted-block' ),
				'icon'  => null,
			]
		];

		// ウィジェットの前にカテゴリーを追加する
		foreach ( $categories as $index => $data ) {
			$slug = $data['slug'] ?? '';
			if ( 'embed' === $slug ) {
				array_splice( $categories, $index, 0, $my_category );
				break;
			}
		}
		return $categories;
	}, 10, 2 );
} );


/**
 * カスタムブロック用のスクリプトを追加
 */
add_action( 'init', function() {

	$asset_file = include( LOOS_RB_PATH . 'build/index.asset.php');
	
	// block用スタイルの登録
	wp_register_style( 'loos-rb-style', LOOS_RB_URL . 'build/index.css', [], $asset_file['version'] );

	// block用スクリプトの登録
	wp_register_script( 'loos-rb-script', LOOS_RB_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version'], true );

	// JS用翻訳ファイルの紐付け
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'loos-rb-script', 'loos-restricted-block', LOOS_RB_PATH . 'languages' );
	}

	// ダイナミックブロックとして登録
	if ( function_exists('register_block_type') ) {

		$metadata = json_decode( file_get_contents( LOOS_RB_PATH . 'src/block.json' ), true );

		register_block_type( 'loos-rb/restricted-block',
			array_merge(
				$metadata,
				[
					'editor_script'   => 'loos-rb-script',
					'editor_style'    => 'loos-rb-style',
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
} );
