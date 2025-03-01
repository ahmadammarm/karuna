import React from "react";
import "@/styles/loading.css";

const Loading = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-black">
			<div className="flex flex-col items-center justify-center">
				<div className="loader"></div>
			</div>
		</div>
	);
};

export default Loading;