import React, { useState } from "react";
import "../styles/dropDownList.css";
import chevronUp from "../assets/chevronUp.png";


export const DropDownList = ({title, content}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const toggleDropdown = () => {
		if(isOpen) {
			setIsOpen(false);
			setTimeout(() => {
				setShouldRender(false);
			}, 300);
		}else{
			setShouldRender(true);
			setIsOpen(true);
		}
	};

	return (
		<div className="dropDownList">
			<div className={`dropDownHeader ${isOpen ? 'open' : ''}`}>
				<h2>{title}</h2>
				<span className={isOpen ? 'rotateChevron' : 'rotateChevronBack'} onClick={toggleDropdown}><img src={ chevronUp} alt="icon chevron" /></span>
			</div>
			{shouldRender && (
			<div className={`dropDownContent ${isOpen ? 'open' : 'close'}`}>
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