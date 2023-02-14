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
			style={{ top: `${attributes.titleTopPosition + attributes.titlePadding}${attributes.titleMarginUnit}`, }}
			className={`position-relative slide-number-${attributes.numberOfImagesPerSlide}`}
			count={attributes.numberOfImagesPerSlide}
		>
			{attributes && attributes.showTitle ? (
				<RichText.Content
					tagName="h2"
					className="title"
					value={attributes.title}
					style={{
						background: attributes.sliderBackground,
						backdropFilter: attributes.blurTitlePlaceholder ? `blur(${attributes.blurTitleSize}rem)` : `none`,
						padding: attributes.titlePadding ? attributes.titlePadding + `rem` : undefined
					}}
				/>
			) : null}
			<Slider attributes={attributes} />
		</div>
	);
}
