import { data } from "../data/data"
import { Card } from "../components/Card"
import "../styles/card.css"

const Home = () => {
	console.log(data)
	return (
		<div>
			<h1>Home</h1>
			<div className="wrapperCard">
				<div className="gridCard">
					{data.map((item) => ((
						<Card title={item.title} cover={item.cover} key={item.id} />
					)))}
				</div>
			</div>
		</div>
	)
}
export default Home