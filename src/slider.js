import { __ } from "@wordpress/i18n";

import "./editor.scss";

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
		<div id="logosControls" className="carousel slide" data-ride="carousel">
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
				data-target="#logosControls"
				type="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">{__("Previous", "keitaro-logo-slider")}</span>
			</button>
			<button
				className="carousel-control-next"
				data-target="#logosControls"
				type="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">{__("Next", "keitaro-logo-slider")}</span>
			</button>
		</div>
	);
}
