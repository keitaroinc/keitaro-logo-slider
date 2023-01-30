import { RichText } from '@wordpress/block-editor';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	// https://stackoverflow.com/a/46122602
	function chunkArray(arr, n) {
		var chunkLength = Math.max(arr.length / n, 1);
		var chunks = [];
		for (var i = 0; i < n; i++) {
			chunkLength * (i + 1) <= arr.length &&
				chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
		}
		return chunks;
	}

	return (
		<div
			className={`slide-number-${attributes.numberOfSlides}`}
			count={attributes.numberOfSlides}
		>
			<RichText.Content
				tagName="h2"
				className="title"
				value={attributes.title}
			/>
			<div
				id="logosControls"
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					{chunkArray(
						attributes.logos,
						attributes.numberOfSlides
					).map((val, key) => (
						<div
							key={key}
							className={`carousel-item ${
								key < 1 ? 'active' : ''
							}`}
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
					))}
				</div>
				<a
					className="carousel-control-prev"
					href="#logosControls"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">
						{__('Previous', 'keitaro-logo-slider')}
					</span>
				</a>
				<a
					className="carousel-control-next"
					href="#logosControls"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">
						{__('Next', 'keitaro-logo-slider')}
					</span>
				</a>
			</div>
		</div>
	);
}
