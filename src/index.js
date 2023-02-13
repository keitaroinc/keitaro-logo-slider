/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * External dependencies
 */
import "bootstrap/js/dist/carousel";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("keitaro/logo-slider", {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Logo Slider by Keitaro", "keitaro-logo-slider"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		"Easy to use logo slider for your WordPress website.",
		"keitaro-logo-slider"
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: "media",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "image-flip-horizontal",

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		align: true,
	},

	attributes: {
		title: {
			type: "string",
			source: "html",
			selector: ".title",
			default: __("Trusted by", "keitaro-logo-slider"),
		},
		titleStatus: {
			type: "string",
			default: "on",
		},
		titleMarginTop: {
			type: "number",
			default: "-4",
		},
		titleMarginBottom: {
			type: "number",
			default: 2.5,
		},
		numberOfImagesPerSlide: {
			type: "number",
			default: 3,
			minimum: 1,
		},
		widthOfImages: {
			type: "number",
			default: 50,
			minimum: 1,
		},
		heightOfImages: {
			type: "number",
			default: 50,
			minimum: 1,
		},
		typeOfProperties: {
			type: "string",
			default: "px",
		},
		sliderId: {
			type: "string",
			default: null,
		},
		sliderBackground: {
			type: "string",
			default: "#ffff",
		},
		arrowColor: {
			type: "string",
			default: "#ffff",
		},
		sliderEffect: {
			type: "string",
			default: "slide",
		},
		logos: {
			type: "array",
			source: "query",
			selector: "img",
			query: {
				id: {
					type: "string",
					source: "attribute",
					attribute: "id",
				},
				url: {
					type: "string",
					source: "attribute",
					attribute: "src",
				},
				alt: {
					type: "string",
					source: "attribute",
					attribute: "alt",
				},
			},
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
