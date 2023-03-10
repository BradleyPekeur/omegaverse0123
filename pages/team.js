import React from "react";
import TeamId from "../components/TeamId";
import Head from "next/head";

function team(props) {
	return (
		<>
			<Head>
				<title>Team</title>
				<meta property="og:title" content="Meet the Team"></meta>
			</Head>
			<div className="pt-24 relative overflow-hidden min-h-[100vh] intro-hero">
				<div className="bg-[rgba(1,1,1,0.5)] absolute top-0 left-0 w-screen h-full z-[-10]"></div>
				<video
					className="intro-video absolute top-0 left-0 w-full h-full object-cover z-[-11]"
					src="/video/earth-teams.mp4"
					autoPlay
					muted
					loop
				/>
				<div className="z-20 flex w-full h-full justify-center pt-20">
					<h1 className="text-[#FF6600] text-[36px] mb-10">Our Team</h1>
				</div>
				<div className="teamsContainer flex flex-col justify-center items-center relative min-h-[600px]  pl-4">
					<div className="md:absolute top-[0px] left-[15%] lg:left-[45%] mb-8">
						<TeamId
							profile="ClintonJohns.png"
							position="Consultant"
							name="Clinton Johns"
						/>
					</div>

					{/* <div className="md:absolute top-[150px] right-[15%] lg:right-[30%] mb-8">
					<TeamId profile="ChadS.png" position="HOM" name="Chad Swart" />
				</div> */}

					<div className="md:absolute top-[250px] right-[25%]  mb-8">
						<TeamId
							profile="DevondF.png"
							position="CAD Programmer"
							name="Devon de Freitas"
						/>
					</div>

					<div className="md:absolute top-[280px] left-[30%] mb-8">
						<TeamId
							profile="KevinR.png"
							position="CNC Operator"
							name="Kevin Ruzvidzo"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default team;
