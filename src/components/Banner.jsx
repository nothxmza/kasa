import "../styles/banner.css";

export const Banner = ({ image, title }) => {
	return (
		<div className="banner">
			<div className="overlay"></div>
			{title ? <h1>{title}</h1> : ""}
			<img className="imgBanner" src={image} alt="banner" />
		</div>
	);
}