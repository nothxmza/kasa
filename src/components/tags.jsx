export const Tags = ({ tags }) => {
	
	return (
		<div className="tags" style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
			{tags.map((tag, index) => (
				<span style={{backgroundColor: "#FF6060", padding: "5px 20px", borderRadius: "10px", color: "white"}} key={index} className="tag">{tag}</span>
			))}
		</div>
	);
}