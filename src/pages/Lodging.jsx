import "../styles/Lodging.css";
import {data} from "../data/data";
import { useParams } from "react-router";
import { Carousel } from "../components/Carousel";
import { Rating } from "../components/Rating";
import { Tags } from "../components/tags";
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
				<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<div>
							<h1 style={{fontSize: "36px", fontWeight: "500", color: "#FF6060"}} >{lodging.title}</h1>
							<h3 style={{fontSize: "18px", fontWeight: "500"}}>{lodging.location}</h3>
						</div>
						<div style={{display: "flex", alignItems: "center", gap: "10px"}}>
							<div>
								<h3 style={{fontSize: "18px", fontWeight: "500",color:"#FF6060"}}>{lodging.host.name.split(" ")[0]}</h3>
								<h3 style={{fontSize: "18px", fontWeight: "500",color:"#FF6060", textAlign:"end" }}>{lodging.host.name.split(" ")[1]}</h3>
							</div>
							<img style={{width: "64px", height: "64px", objectFit: "cover", borderRadius: "50%"}} src={lodging.host.picture} alt="" />
						</div>
					</div>
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<div>
							<Tags tags={lodging.tags} />
						</div>
						<div>
							{<Rating rating={lodging.rating} />}
						</div>
					</div>
				</div>
			</div>
			)
		}
	</>
  );
}
export default Lodging;