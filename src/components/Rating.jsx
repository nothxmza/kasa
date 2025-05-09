import { Star } from "./Star";

export const Rating = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<span key={i}> <Star  color="#FF6060" /></span>);
		} else {
			stars.push(<span key={i}> <Star  /></span>);
		}
	}
	return (
		<div className="rating">
			{stars}
		</div>
	);
}