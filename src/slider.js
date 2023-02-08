import { __ } from "@wordpress/i18n";

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
			className="carousel slide"
			data-ride="carousel"
			style={{ background: attributes.sliderBackground }}
		>
			<div className="carousel-inner">
				{attributes.logos ? (
					chunkArray(attributes.logos, attributes.numberOfImagesPerSlide).map(
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
										style={{
											maxWidth: `${attributes.widthOfImages}${attributes.typeOfProperties}`,
											maxHeight: `${attributes.heightOfImages}${attributes.typeOfProperties}`,
										}}
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
				data-target={`#logosControls-${attributes.sliderId}`}
				type="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">{__("Previous", "keitaro-logo-slider")}</span>
			</button>
			<button
				className="carousel-control-next"
				data-target={`#logosControls-${attributes.sliderId}`}
				type="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">{__("Next", "keitaro-logo-slider")}</span>
			</button>
		</div>
	);
}
