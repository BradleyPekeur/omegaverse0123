import React, { useState } from "react";
import EmailContactForm from "../components/EmailContactForm";

function emailform() {
	return (
		<div className="flex flex-col justify-center items-center py-16 bg-slate-800 w-full min-h-screen">
			<div className="max-w-[90vw] md:max-w-[80vw] py-16">
				<div className="cards_container ">
					<div className="pt-24 text-center flex justify-center flex-col items-center">
						<h1 className="sHeading text-[#FF6600] mb-6">
							We’d love to hear from you
						</h1>
					</div>

					<EmailContactForm />
				</div>
			</div>
		</div>
	);
}

export default emailform;
