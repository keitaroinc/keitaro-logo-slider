import { Fragment } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';
import {
	InspectorControls,
	MediaUploadCheck,
	MediaPlaceholder,
	RichText,
} from '@wordpress/block-editor';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const ALLOWED_MEDIA_TYPES = ['image'];

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
	const mediaPreview =
		attributes.logos.length &&
		attributes.logos.map((item, key) => (
			<img key={key} src={item.url} className="logo" alt={item.alt}></img>
		));

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Slide options')}>
					<RangeControl
						label="Number of slides"
						value={parseInt(attributes.numberOfSlides)}
						onChange={(value) =>
							setAttributes({ numberOfSlides: value })
						}
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
						onChange={(content) =>
							setAttributes({ title: content })
						}
						placeholder={__(
							'Catchy title goes here...',
							'keitaro-logo-slider'
						)}
					/>
				</div>
			)}
			<div className="img-edit-before">
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
						mediaPreview={mediaPreview}
						labels={{ title: __('Logos', 'keitaro-logo-slider') }}
					></MediaPlaceholder>
				</MediaUploadCheck>
			</div>
		</Fragment>
	);
}
