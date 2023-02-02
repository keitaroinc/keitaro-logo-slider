import { Fragment } from "@wordpress/element";
import { PanelBody, RangeControl } from "@wordpress/components";
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
export default function Edit({ className, attributes, setAttributes }) {
	function chunkArray(arr, n) {
		let chunkLength = Math.max(arr.length / n);
		console.log(arr);
		let chunks = [];
		const arrayForModify = [];
		arrayForModify.push(...arr);
		for (let i = 0; i < chunkLength; i++) {
			chunks.push(arrayForModify.splice(0, n));
		}
		return chunks;
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Slide options")}>
					<RangeControl
						label="Number of logos per slide"
						value={parseInt(attributes.numberOfSlides)}
						onChange={(value) => setAttributes({ numberOfSlides: value })}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
			{attributes.logos && (
				<div className={className}>
					<RichText
						tagName="h2"
						className="title"
						value={attributes.title}
						onChange={(content) => setAttributes({ title: content })}
						placeholder={__("Catchy title goes here...", "keitaro-logo-slider")}
					/>
				</div>
			)}
			<div className="img-edit-before">
				<div id="logosControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						{attributes.logos ? (
							chunkArray(attributes.logos, attributes.numberOfSlides).map(
								(val, key) => (
									<div
										key={key}
										className={`carousel-item ${key < 1 ? "active" : ""}`}
									>
										{val.map((item, index) => (
											<img
												key={index}
												className="logo"
												id={item.id}
												src={item.url}
												alt={item.alt}
											></img>
										))}
									</div>
								)
							)
						) : (
							<p>Upload images</p>
						)}
					</div>
					<button
						className="carousel-control-prev"
						data-target="#logosControls"
						type="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">
							{__("Previous", "keitaro-logo-slider")}
						</span>
					</button>
					<button
						className="carousel-control-next"
						data-target="#logosControls"
						type="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">{__("Next", "keitaro-logo-slider")}</span>
					</button>
				</div>

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
					></MediaPlaceholder>
				</MediaUploadCheck>
			</div>
		</Fragment>
	);
}
