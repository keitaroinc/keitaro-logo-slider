import {
	PanelBody,
	RangeControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";
import {
	InspectorControls,
	MediaUploadCheck,
	MediaPlaceholder,
	RichText,
} from "@wordpress/block-editor";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

import Slider from "./slider";

export default function Edit({ className, attributes, setAttributes }) {
	const mediaPreview = <Slider attributes={attributes} />;
	return (
		<div className={className}>
			<InspectorControls>
				<PanelBody title={__("Slide options")}>
					<RangeControl
						label="Number of logos per slide"
						value={parseInt(attributes.numberOfImagesPerSlide)}
						onChange={(value) =>
							setAttributes({ numberOfImagesPerSlide: value })
						}
						min={1}
						max={attributes.logos ? attributes.logos.length : 10}
					/>
					<RangeControl
						label="Width of your Image"
						value={parseInt(attributes.widthOfImages)}
						onChange={(value) => setAttributes({ widthOfImages: value })}
						min={1}
						max={200}
					/>
					<RangeControl
						label="Heigth of your Image"
						value={parseInt(attributes.heightOfImages)}
						onChange={(value) => setAttributes({ heightOfImages: value })}
						min={1}
						max={200}
					/>
					<RadioGroup
						label="Width"
						defaultChecked="px"
						onChange={(value) => setAttributes({ typeOfProperties: value })}
						checked={attributes.typeOfProperties}
					>
						<Radio value="px">PX</Radio>
						<Radio value="rem">REM</Radio>
						<Radio value="em">EM</Radio>
					</RadioGroup>
				</PanelBody>
			</InspectorControls>
			{attributes.logos && (
				<RichText
					tagName="h2"
					className="title"
					value={attributes.title}
					onChange={(content) => setAttributes({ title: content })}
					placeholder={__("Catchy title goes here...", "keitaro-logo-slider")}
				/>
			)}
			<MediaUploadCheck>
				<MediaPlaceholder
					onSelect={(el) => {
						setAttributes({
							logos: el.map((item) => ({
								url: item.url,
								id: item.id,
								alt: item.alt,
							})),
						});
					}}
					isAppender={true}
					className={className}
					icon={`format-gallery`}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					multiple={true}
					value={attributes.logos}
					labels={{ title: __("Logos", "keitaro-logo-slider") }}
					mediaPreview={mediaPreview}
				></MediaPlaceholder>
			</MediaUploadCheck>
		</div>
	);
}
