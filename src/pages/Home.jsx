import { data } from "../data/data"
import { Card } from "../components/Card"
import { Link } from "react-router"
import "../styles/home.css"
import banner from "../assets/banner.png"

const Home = () => {
	console.log(data)
	return (
		<div className="wrapperHome">
			<div className="bannerIntro">
				<div className="overlay"></div>
				<h1>Chez vous, partout et ailleurs</h1>
				<img className="imgBanner" src={banner} alt="banner" />
			</div>
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