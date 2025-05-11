import { data } from "../data/data"
import { Card } from "../components/Card"
import { Link } from "react-router"
import "../styles/home.css"
import banner from "../assets/banner.png"
import { Banner } from "../components/Banner"

const Home = () => {
	return (
		<div className="wrapperHome">
			<Banner image={banner} title="Chez vous, partout et ailleurs" />
			<div className="wrapperCard">
				<div className="gridCard">
					{data.map((item) => ((
						<Link to={`/lodging/${item.id}`} key={item.id}>
							<Card title={item.title} cover={item.cover} />
						</Link>
					)))}
				</div>
			</div>
		</div>
	)
}
export default Home