import { RichText } from "@wordpress/block-editor";

import "./editor.scss";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

import Slider from "./slider";

export default function save({ attributes }) {
	return (
		<div
			className={`slide-number-${attributes.numberOfImagesPerSlide}`}
			count={attributes.numberOfImagesPerSlide}
		>
			<RichText.Content
				tagName="h2"
				className="title"
				value={attributes.title}
			/>
			<Slider attributes={attributes} />
		</div>
	);
}
