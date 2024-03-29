import {
	PanelBody,
	RangeControl,
	RadioControl,
	ColorPicker,
	CheckboxControl,
	SelectControl,
} from '@wordpress/components';
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

import Slider from './slider';
import { titleWithUnit } from './helpers';

export default function Edit({ className, attributes, setAttributes }) {
	React.useEffect(() => {
		if (attributes.sliderId === null) {
			const randomNumber = (Math.random() + 1).toString(36).substring(7);
			setAttributes({ sliderId: randomNumber });
		}
	});

	const mediaPreview = <Slider attributes={attributes} />;

	return (
		<div
			className={`position-relative ${className}`}
			style={{
				marginTop: `${attributes.titleTopPosition}${attributes.sliderUnit}`,
			}}
		>
			<InspectorControls>
				<PanelBody title={__('Slider Options')}>
					<RadioControl
						label="Unit"
						help="The unit used while calculating the size of the elements within the slider"
						selected={attributes.sliderUnit}
						onChange={(value) => setAttributes({ sliderUnit: value })}
						options={[
							{ label: 'Pixels (px)', value: 'px' },
							{
								label: 'Font size of the parent element (em)',
								value: 'em',
							},
							{
								label: 'Font size of the root element (rem)',
								value: 'rem',
							},
						]}
					/>
					<SelectControl
						label="Transition"
						value={attributes.sliderTransition}
						options={[
							{ label: 'Slide', value: 'slide' },
							{ label: 'Fade', value: 'carousel-fade' },
							{
								label: 'Slide + Fade',
								value: 'slide carousel-fade',
							},
						]}
						onChange={(value) => setAttributes({ sliderTransition: value })}
					/>
					<RangeControl
						label={`Transition Interval (milliseconds)`}
						value={parseInt(attributes.transitionInterval)}
						onChange={(value) => setAttributes({ transitionInterval: value })}
						min={100}
						max={10000}
						step={100}
					/>
					<CheckboxControl
						label={`Show Title`}
						help={`Toggles the visibility of the slider title and enables additional title options`}
						checked={attributes.showTitle}
						onChange={() => setAttributes({ showTitle: !attributes.showTitle })}
					/>
				</PanelBody>
				<PanelBody opened={attributes.showTitle} title={__('Title Options')}>
					<React.Fragment>
						<RangeControl
							label={titleWithUnit('Padding', attributes.sliderUnit)}
							value={parseInt(attributes.titlePadding)}
							onChange={(value) => setAttributes({ titlePadding: value })}
							min={0}
							max={10}
							step={1}
						/>
						<RangeControl
							label={titleWithUnit('Top Position', attributes.sliderUnit)}
							value={parseInt(attributes.titleTopPosition)}
							onChange={(value) => setAttributes({ titleTopPosition: value })}
							min={-100.0}
							max={100.0}
							step={attributes.sliderUnit !== 'px' ? 0.1 : 1}
						/>
						<CheckboxControl
							label={`Blur Background`}
							help={`Blurs the background of the slider title when background color is translucent`}
							checked={attributes.blurTitlePlaceholder}
							onChange={() =>
								setAttributes({
									blurTitlePlaceholder: !attributes.blurTitlePlaceholder,
								})
							}
						/>
						{attributes.blurTitlePlaceholder && (
							<RangeControl
								label={titleWithUnit('Blur Size', attributes.sliderUnit)}
								value={parseInt(attributes.blurTitleSize)}
								onChange={(value) => setAttributes({ blurTitleSize: value })}
								min={0}
								max={20}
								step={1}
							/>
						)}
					</React.Fragment>
				</PanelBody>
				<PanelBody title={__('Logo Options')}>
					<RangeControl
						label="Logos per Slide"
						value={parseInt(attributes.numberOfImagesPerSlide)}
						onChange={(value) =>
							setAttributes({ numberOfImagesPerSlide: value })
						}
						min={1}
						max={attributes.logos ? attributes.logos.length : 10}
					/>
					<RangeControl
						label={titleWithUnit('Maximum Logo Width', attributes.sliderUnit)}
						value={parseInt(attributes.widthOfImages)}
						onChange={(value) => setAttributes({ widthOfImages: value })}
						min={1}
						max={200}
					/>
					<RangeControl
						label={titleWithUnit('Maximum Logo Height', attributes.sliderUnit)}
						value={parseInt(attributes.heightOfImages)}
						onChange={(value) => setAttributes({ heightOfImages: value })}
						min={1}
						max={200}
					/>
				</PanelBody>
				<PanelBody title={__('Color Options')}>
					<label className="label-background">Slider Background</label>
					<ColorPicker
						color={attributes.sliderBackground}
						onChange={(value) => setAttributes({ sliderBackground: value })}
						enableAlpha
					/>
					<label className="label-background">Arrow Color</label>
					<ColorPicker
						color={attributes.arrowColor}
						onChange={(value) => setAttributes({ arrowColor: value })}
						enableAlpha
					/>
				</PanelBody>
			</InspectorControls>
			{attributes.logos && attributes.showTitle && (
				<RichText
					tagName="h2"
					className="title"
					value={attributes.title}
					onChange={(content) => setAttributes({ title: content })}
					placeholder={__('Catchy title goes here...', 'keitaro-logo-slider')}
					style={{
						background: attributes.sliderBackground,
						backdropFilter: attributes.blurTitlePlaceholder
							? `blur(${attributes.blurTitleSize}${attributes.sliderUnit})`
							: `none`,
						padding: attributes.titlePadding
							? attributes.titlePadding + attributes.sliderUnit
							: undefined,
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
					labels={{ title: __('Logos', 'keitaro-logo-slider') }}
					mediaPreview={mediaPreview}
				></MediaPlaceholder>
			</MediaUploadCheck>
		</div>
	);
}
