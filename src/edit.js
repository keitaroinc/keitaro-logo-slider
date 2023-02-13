import {
	PanelBody,
	RangeControl,
	RadioControl,
	ColorPicker,
	SelectControl,
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
	React.useEffect(() => {
		if (attributes.sliderId === null) {
			const randomNumber = (Math.random() + 1).toString(36).substring(7);
			setAttributes({ sliderId: randomNumber });
		}
	});
	const mediaPreview = <Slider attributes={attributes} />;
	return (
		<div className={className}>
			<InspectorControls>
				<PanelBody title={__("Slide options")}>
					<RadioControl
						label="Slider Title"
						selected={attributes.titleStatus}
						onChange={(value) => setAttributes({ titleStatus: value })}
						options={[
							{ label: "On", value: "on" },
							{ label: "Off", value: "off" },
						]}
					/>
					{attributes.titleStatus === "on" && (
						<>
							<RangeControl
								label="Top margin of slider title"
								value={parseInt(attributes.titleMarginTop)}
								onChange={(value) => setAttributes({ titleMarginTop: value })}
								min={-100.0}
								max={100.0}
								step={attributes.titleMarginUnit !== "px" ? 0.1 : 1}
							/>
							<RangeControl
								label="Bottom margin of slider title"
								value={parseInt(attributes.titleMarginBottom)}
								onChange={(value) =>
									setAttributes({ titleMarginBottom: value })
								}
								min={-100.0}
								max={100.0}
								step={attributes.titleMarginUnit !== "px" ? 0.1 : 1}
							/>
							<RadioControl
								label="Margin Title Unit"
								help="The unit that's going to be used while calculating the title margin"
								selected={attributes.titleMarginUnit}
								onChange={(value) => setAttributes({ titleMarginUnit: value })}
								options={[
									{ label: "Pixels (px)", value: "px" },
									{
										label: "Font size of the parent element (em)",
										value: "em",
									},
									{
										label: "Font size of the root element (rem)",
										value: "rem",
									},
								]}
							/>
						</>
					)}
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
						label="Maximum Logo Width"
						value={parseInt(attributes.widthOfImages)}
						onChange={(value) => setAttributes({ widthOfImages: value })}
						min={1}
						max={200}
					/>
					<RangeControl
						label="Maximum Logo Height"
						value={parseInt(attributes.heightOfImages)}
						onChange={(value) => setAttributes({ heightOfImages: value })}
						min={1}
						max={200}
					/>
					<RadioControl
						label="Image Size Unit"
						help="The unit that's going to be used while calculating the image size"
						selected={attributes.typeOfProperties}
						onChange={(value) => setAttributes({ typeOfProperties: value })}
						options={[
							{ label: "Pixels (px)", value: "px" },
							{ label: "Font size of the parent element (em)", value: "em" },
							{ label: "Font size of the root element (rem)", value: "rem" },
						]}
					/>
					<SelectControl
						label="Slider Effect"
						value={attributes.sliderEffect}
						options={[
							{ label: "Slide", value: "slide" },
							{ label: "Fade", value: "carousel-fade" },
						]}
						onChange={(value) => setAttributes({ sliderEffect: value })}
						__nextHasNoMarginBottom
					/>
					<label className="label-background">Slider Background</label>
					<ColorPicker
						color={attributes.sliderBackground}
						onChange={(value) => setAttributes({ sliderBackground: value })}
						enableAlpha
						defaultValue="#ffff"
					/>
					<label className="label-background">Arrow Color</label>
					<ColorPicker
						color={attributes.arrowColor}
						onChange={(value) => setAttributes({ arrowColor: value })}
						enableAlpha
						defaultValue="#ffff"
					/>
				</PanelBody>
			</InspectorControls>
			{attributes.logos && attributes.titleStatus === "on" && (
				<RichText
					tagName="h2"
					className="title"
					value={attributes.title}
					onChange={(content) => setAttributes({ title: content })}
					placeholder={__("Catchy title goes here...", "keitaro-logo-slider")}
					style={{
						marginTop: `${attributes.titleMarginTop}${attributes.titleMarginUnit}`,
						marginBottom: `${attributes.titleMarginBottom}${attributes.titleMarginUnit}`,
					}}
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
