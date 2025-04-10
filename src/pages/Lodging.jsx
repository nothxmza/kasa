import "../styles/Lodging.css";
import {data} from "../data/data";
import { useParams } from "react-router";
import { Carousel } from "../components/Carousel";
import { Rating } from "../components/Rating";
import { Tags } from "../components/tags";
import { DropDownList } from "../components/DropDownList";
import "../styles/lodging.css";

const Lodging = () => {
	const id = useParams().id;
	const lodging = data.filter((item) => item.id === id)[0];
console.log(lodging);
  return (
	<>
		{!lodging ? (
			<div>
				<h1>Loading...</h1>
			</div>
		) : (
			<div className="wrapperLodging">
				<div>
					<Carousel img={lodging.pictures}/>
				</div>
				<div className="wrapperContent">
					<div className="wrapperInfo">
						<div className="wrapperData">
							<div>
								<h1 >{lodging.title}</h1>
								<h3>{lodging.location}</h3>
							</div>
							<div>
								<Tags tags={lodging.tags} />
							</div>
						</div>
						<div className="wrapperData starsAndName">
							<div className="wrapperNameAndImg">
								<div>
									<h3 className="titleName">{lodging.host.name.split(" ")[0]}</h3>
									<h3 className="alignTextEnd titleName">{lodging.host.name.split(" ")[1]}</h3>
								</div>
								<img src={lodging.host.picture} alt="" />
							</div>
							<div>
								{<Rating rating={lodging.rating} />}
							</div>
						</div>
					</div>
					<div className="wrapperDropDown">
						<DropDownList title="Description" content={lodging.description} />
						<DropDownList title="Équipements" content={lodging.equipments} />
					</div>
				</div>
			</div>
			)
		}
	</>
  );
}
export default Lodging;