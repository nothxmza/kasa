import React, { useState } from "react";
import "../styles/carousel.css";
import chevronLeft from "../assets/chevronLeft.png";
import chevronRight from "../assets/chevronRight.png";

export const Carousel = ({img}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		setCurrentIndex((i) => 
			i === img.length - 1 ? 0 : i + 1
		);
	};

	const prevImage = () => {
		setCurrentIndex((i) =>
			i === 0 ? img.length - 1 : i - 1
		);
	};

	console.log(img.length);
	return (
		<div className="carousel">
			<img src={img[currentIndex]} alt="Carousel" className="carouselImage" />
			{img.length > 1 && (
				<>
					<p className="count">{`${currentIndex + 1 } / ${img.length}`}</p>
					<button className="buttonLeft" onClick={prevImage}><img src={chevronLeft} alt="chevron left" /></button>
					<button className="buttonRight" onClick={nextImage}> <img src={chevronRight} alt="chevron right" /> </button>
				</>
			)}
		</div>
	);
}