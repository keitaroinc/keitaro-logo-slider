<?php
/**
 * Plugin Name:     Logo Slider by Keitaro
 * Description:     Easy to use logo slider for your WordPress website.
 * Plugin URI:      https://github.com/keitaroinc/keitaro-logo-slider
 * Version:         0.2.6
 * Author:          Goce Mitevski, Hristijan Petkovski
 * License:         Apache-2.0
 * License URI:     https://www.apache.org/licenses/LICENSE-2.0
 * Text Domain:     keitaro-logo-slider
 *
 * @package         keitaro-logo-slider
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function keitaro_logo_slider_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "keitaro/logo-slider" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$view_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'keitaro-logo-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_register_script(
		'keitaro-logo-slider-block-view',
		plugins_url( $view_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'keitaro-logo-slider-block-editor', 'keitaro-logo-slider' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'keitaro-logo-slider-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'keitaro-logo-slider-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'keitaro/logo-slider', array(
		'editor_script' => 'keitaro-logo-slider-block-editor',
		'editor_style'  => 'keitaro-logo-slider-block-editor',
		'style'         => 'keitaro-logo-slider-block',
		'view_script' => 'keitaro-logo-slider-block-view',
	) );
}
add_action( 'init', 'keitaro_logo_slider_block_init' );
