import { __ } from '@wordpress/i18n';

export default function Slider({ attributes }) {
	function chunkArray(arr, n) {
		let chunkLength = Math.max(arr.length / n);
		let chunks = [];
		if (arr.length <= n) {
			chunks.push(arr);
			return chunks;
		} else {
			const arrayForModify = [];
			arrayForModify.push(...arr);
			for (let i = 0; i < chunkLength; i++) {
				chunks.push(arrayForModify.splice(0, n));
			}
			return chunks;
		}
	}

	return (
		<div
			id={`logosControls-${attributes.sliderId}`}
			className={`carousel ${attributes.sliderTransition}`}
			style={{ background: attributes.sliderBackground }}
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				{attributes.logos &&
					chunkArray(attributes.logos, attributes.numberOfImagesPerSlide).map(
						(val, key) => (
							<div
								key={key}
								className={`carousel-item ${key < 1 ? 'active' : ''}`}
								data-bs-interval={attributes.transitionInterval}
							>
								{val.map((item, index) => (
									<img
										key={index}
										decoding='async'
										className="logo"
										id={item.id}
										src={item.url}
										alt={item.alt}
										style={{
											maxWidth: `${attributes.widthOfImages}${attributes.sliderUnit}`,
											maxHeight: `${attributes.heightOfImages}${attributes.sliderUnit}`,
										}}
									></img>
								))}
							</div>
						)
					)}
			</div>
			<button
				className="carousel-control-prev"
				data-bs-target={`#logosControls-${attributes.sliderId}`}
				data-bs-slide="prev"
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					width={30}
					height={30}
					fill={attributes ? attributes.arrowColor : '#ffff'}
				>
					<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
				</svg>
				<span className="visually-hidden">
					{__('Previous', 'keitaro-logo-slider')}
				</span>
			</button>
			<button
				className="carousel-control-next"
				data-bs-target={`#logosControls-${attributes.sliderId}`}
				data-bs-slide="next"
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill={attributes ? attributes.arrowColor : '#ffff'}
					width={30}
					height={30}
				>
					<path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
				</svg>
				<span className="visually-hidden">
					{__('Next', 'keitaro-logo-slider')}
				</span>
			</button>
		</div>
	);
}
