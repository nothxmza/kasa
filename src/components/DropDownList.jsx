import React, { useState } from "react";
import chevronDown from "../assets/chevronDown.png";
import chevronUp from "../assets/chevronUp.png";
import "../styles/dropDownList.css";


export const DropDownList = ({title, content}) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		console.log("ffe");
	};

	return (
		<div className="dropDownList">
			<div className="dropDownTitle">
				<h2>{title}</h2>
				<span onClick={toggleDropdown}><img src={ isOpen ?  chevronDown : chevronUp} alt="icon chevron" /></span>
			</div>
			{isOpen && (
			<div className="dropDownContent">
				{Array.isArray(content) ? (
					content.map((item, index) => (
						<p key={index}>{item}</p>
					))
				) : (
					<p>{content}</p>
				)}
			</div>
			)}
		</div>
	)
}