import '../styles/card.css'

export const Card = ({title,cover}) => {
	return(
		<article  className="card" >
			<img src={cover} alt={title} />
			<div className="overlay"></div>
			<div className="contentCard">
				<h2>
					{title}
				</h2>
			</div>
		</article>
	)
}