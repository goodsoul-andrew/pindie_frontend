"use client";
import { Preloader } from "./Preloader";



export const SmartPreloader = ({ children }, props) => {
	let data = props.data;
	if (data) {
		return <div>{children}</div>;
	} else {
		return <Preloader />;
	}
};
