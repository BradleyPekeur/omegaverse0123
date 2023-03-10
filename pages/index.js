import Head from "next/head";
import Image from "next/image";
// import HorizontalScroller from "../components/HorizontalScroller";
import MainHero from "../components/MainHero";
import Navbar from "../components/Navbar";
import SideSocialBar from "../components/SideSocialBar";
import styles from "../styles/Home.module.css";

import { ImAirplane } from "react-icons/im";
import { GiSubmarine, GiMeepleArmy, GiElectric } from "react-icons/gi";
import { FaCar, FaHandHoldingMedical } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

export default function Home() {
	let tl = gsap.timeline();
	useEffect(() => {
		tl.fromTo(
			".heading",
			{
				x: -500,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 0.75,
			}
		);
		tl.fromTo(
			".subHeadingText",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.75,
			}
		);
		// tl.from(".card01", {
		// 	xPercent: "-100",
		// 	opacity: 0,
		// 	scrollTrigger: ".card01",
		// });
		// tl.from(".card02", {
		// 	xPercent: "-100",
		// 	opacity: 0,
		// 	scrollTrigger: ".card01",
		// });
		// tl.from(".card03", {
		// 	xPercent: "-100",
		// 	opacity: 0,
		// 	scrollTrigger: ".card01",
		// });
	});

	return (
		<>
			<Head>
				<title>Omegaverse</title>
				<meta
					name="description"
					content="Large Scale 3D milling and 3D services in Cape Town, South Africa"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-[#010101]">
				{/* <SideSocialBar /> */}
				<section className="heroSection w-screen h-[94vh] bg-hero-background bg-cover bg-no-repeat flex items-center  text-white pt-[100px]">
					<div className="md:w-[40%]">
						<h1 className="leading-[100%] mb-[50px] heading">
							High Precision Engineering
						</h1>
						<p className="pText mb-[50px] font-light subHeadingText">
							Africa???s larges milling and 3D Printing machine
						</p>
						<button className="text-[16px] w-[200px] h-[60px] bg-[#FA7921] rounded-full flex justify-center items-center">
							Get in touch
						</button>
					</div>
				</section>
				<section className="text-white flex justify-evenly md:flex-row flex-col section2">
					<div className="w-full max-h-[635px] px-[20px] md:px-[45px] lg:px-[90px] pt-[100px] pb-[150px] relative">
						<h4 className="text-[36px] leading-[100%] h-[100px] mb-1">
							Accelerated Product Development
						</h4>
						<p className="leading-[150%] pText font-light">
							Our company specializes in the production of precise tools,
							models, prototypes, and patterns for a wide range of sectors as a
							leading provider of large-scale CNC and 3D printing services. We
							endeavor to satisfy the individual needs of each client and offer
							remarkable outcomes by utilizing cutting-edge technologies and
							innovative composite materials.
						</p>
						<img
							src="/img/home/apd_white.png"
							alt=""
							className="w-[100px] md:w-[120px] absolute right-[50px] bottom-3  "
						/>
					</div>
					<div className="bg-[#1C1C1C] w-full max-h-[635px] px-[20px] md:px-[45px] lg:px-[90px] pt-[100px] pb-[150px] relative">
						<h4 className="text-[36px] leading-[100%]  h-[100px]">Tooling</h4>
						<p className="leading-[150%] pText font-light">
							By combining 3D printed tooling with traditional manufacturing
							techniques, we can achieve faster product development, more
							efficient iteration, and lower manufacturing costs.
						</p>
						<img
							src="/img/home/tooling_white.png"
							alt=""
							className="w-[100px] md:w-[120px] absolute right-[50px] bottom-3 "
						/>
					</div>
					<div className="bg-[#5D5D5D] w-full max-h-[635px] px-[20px] md:px-[45px] lg:px-[90px] pt-[100px] pb-[150px] relative">
						<h4 className="text-[36px] leading-[100%] h-[100px] ">
							Models and props
						</h4>
						<p className="leading-[150%] pText  font-light">
							Our advanced capabilities in the field of 3D printing and
							manufacturing technologies allow us to create highly detailed and
							precise models with exceptional surface finishes, catering to a
							broad spectrum of industries and specific use cases.
						</p>
						<img
							src="/img/home/props_white.png"
							alt=""
							className="w-[100px] md:w-[120px] absolute right-[50px] bottom-3 "
						/>
					</div>
				</section>
				<section className="bg-[#EDEDED] text-[#333333] flex gap-4  px-[20px] md:px-[90px] py-[90px] w-screen md:flex-row flex-col aboutSection1">
					<div className="basis-1/2 flex flex-col ">
						<div className="mb-16">
							<h4 className="text-[36px] leading-[100%] mb-[50px]">About</h4>
							<p className="leading-[150%] pText font-light">
								We are a large scale CNC & 3D printing, composites start up. We
								manufacture tooling, models, prototypes and patterns for
								numerous sectors. We support local initiatives that drive
								awareness and create innovation through re-purposing waste. We
								are passionate about sustainability, our economy and
								competitiveness as a country
							</p>
						</div>
						<div>
							<h4 className="text-[36px] leading-[100%] mb-[50px]">
								Industries we serve
							</h4>
							<div className="flex w-[70%] justify-between">
								<div className="mr-[10px]">
									<div className="flex items-center mb-4">
										<span className="mr-[20px] md:mr-0">
											<GiSubmarine size={20} />
										</span>
										<span className="pText">Marine</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<BsCameraReelsFill />
										</span>
										<span className="pText">Film</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<FaCar />
										</span>
										<span className="pText">Automotive</span>
									</div>
								</div>
								<div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<ImAirplane />
										</span>
										<span className="pText">Aerospace</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<GiMeepleArmy />
										</span>
										<span className="pText">Military</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<RiBuilding2Fill />
										</span>
										<span className="pText">Architectural</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<img
							src="/img/home/sculpture_boat.png"
							alt=""
							className="md:w-[70%] w-[100%] "
						/>
					</div>
				</section>
				<section className="bg-mid-background bg-cover text-[#333333] py-[90px]  px-[20px] md:px-[90px] flex flex-col md:flex-row items-center">
					<div className="basis-1/2 ">
						<h4 className="text-[36px] leading-[100%] mb-[50px]">
							The 5-Axis Machine
						</h4>
						<p className="leading-[150%] text-[20px] font-light">
							The 5-Axis Machine is a sophisticated instrument for shaping,
							sculpting, and milling. This machine can handle even the most
							demanding tasks with to its vast working area of 20m in length, 5m
							in width, and 2.5m in height. <br></br>
							<br></br>The machine&apos;s two independent bridges provide for
							maximum flexibility and precision, and the changeable heads allow
							for diverse and efficient milling. The 5-Axis Machine has the
							power and precision to complete any project, whether it&apos;s a
							massive sculpture, a complex architectural model, or anything
							else.
							<br></br>
							<br></br> The 5-Axis Machine, with its sophisticated capabilities,
							is the ideal solution for any project or service that requires
							high precision and flexibility.
						</p>
					</div>
					<div className="basis-1/2">
						<img src="/img/home/Machine.png" alt="" />
					</div>
				</section>
				<section className="bg-[#FA7921] flex justify-center items-center flex-col md:flex-row p-[20px] py-[90px]">
					<div>
						<img src="/img/home/printmycity.png" alt="" />
					</div>
					<div>
						<h4 className="text-[36px] leading-[100%] mb-[50px] text-white">
							Omega 3D Printing
						</h4>
						<div>
							<div className="flex items-center mb-4">
								<img
									src="/img/home/iconDown.png"
									alt=""
									className="w-[35px] h-[35px] mr-4"
								/>
								<h5 className="text-[30px] md:text-[35px]">
									Reduce labour & lead time
								</h5>
							</div>
							<div className="flex items-center mb-4">
								<img
									src="/img/home/iconDown.png"
									alt=""
									className="w-[35px] h-[35px] mr-4"
								/>
								<h5 className="text-[30px] md:text-[35px]">Reduce waste</h5>
							</div>
							<div className="flex items-center mb-4">
								<img
									src="/img/home/iconDown.png"
									alt=""
									className="w-[35px] h-[35px] mr-4"
								/>
								<h5 className="text-[30px] md:text-[35px]">
									Improve efficiency
								</h5>
							</div>
							<div className="flex items-center mb-4">
								<img
									src="/img/home/iconDown.png"
									alt=""
									className="w-[35px] h-[35px] mr-4"
								/>
								<h5 className="text-[30px] md:text-[35px]">
									Create products from waste
								</h5>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
