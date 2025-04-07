


export const Card = ({title,cover}) => {
	return(
		<article  className="card" style={{overflow: 'hidden', width: '100%', height: '300px', position: 'relative'}}>
			<img src={cover} alt="" style={{objectFit:"cover", width: "100%", height: "100%"}}/>
			<div  style={{position: 'absolute', bottom: "10px", left: "10px"}}>
				<h2>
					{title}
				</h2>
			</div>
		</article>
	)
}