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

import chunkArray from "./index";

export default function save({ attributes }) {
	// https://stackoverflow.com/a/46122602

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
			<div id="logosControls" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{chunkArray(attributes.logos, attributes.numberOfSlides).map(
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
		</div>
	);
}
