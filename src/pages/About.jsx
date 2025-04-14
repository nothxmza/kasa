import { Banner } from "../components/Banner"
import img from "../assets/montagne.png"
import {data} from "../data/about.js"
import { DropDownList } from "../components/DropDownList"
import "../styles/about.css"

const About = () => {
	console.log(data.fiabilite)
	return(
		<div className="wrapperAbout">
			<Banner image={img} title="" />
			<div className="containerAbout">
				<DropDownList title="Fiabilité" content={data.fiabilite} />
				<DropDownList title="Respect" content={data.respect} />
				<DropDownList title="Service" content={data.service} />
				<DropDownList title="Sécurité" content={data.securite} />
			</div>
		</div>
	)
}

export default About