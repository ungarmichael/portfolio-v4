"use client";
import UmFooter from "@um-p4/components/UmFooter";
import { GoBack } from "./services";
import Curve from "@um-p4/components/Curve";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { easeOut } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import React from "react";
import Marquee from "react-fast-marquee";
import Head from "next/head";

const Projects = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: any) => {
		setPosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		const deltaX = position.x - textPosition.x;
		const deltaY = position.y - textPosition.y;
		const newX = deltaX * 0.1;
		const newY = deltaY * 0.1;
		setTextPosition({ x: newX, y: newY });
	}, [position]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar - Projects" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ungar Michael - Projects" />
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta name="twitter:title" content="Ungar Michael - Projects" />
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<section
					className="flex flex-col min-h-screen bg-[#333] text-white"
					onMouseMove={handleMouseMove}
				>
					<style jsx>{`
						@media (max-width: 375px) {
							section {
								width: 375px;
							}
						}
					`}</style>
					<GoBack />
					<Heading />
					<div className="font-clash flex-1 ">
						<TableHead />
						<hr />
						<TableItem
							projectname={"Frame"}
							categories={"frontend, ui/ux, creative-dev"}
							initiator={"Client"}
							year={"2023"}
						>
							<LargeText>
								A project for a local video editor including a rough portfolio
								and a contact section. The focus here was mostly on using
								alternative and modern ways of displaying content so the website
								would elevate over any competitors and leave a lasting
								impression.
							</LargeText>
							<SpareMeta
								categories={"frontend, ui/ux, creative-dev"}
								initiator={"Client"}
							/>
							<Spacer />
							<LinkItem link="framestudio.at" />
							<ContentBar
								videoItems={[
									"/frame-vids/vid3.mov",
									"/frame-vids/vid4.mov",
									"/frame-vids/vid2.mov",
									"/frame-vids/vid1.mov",
								]}
							/>
							<TagWrapper
								tags={["react", "nextjs", "lenis-scroll", "creative-dev"]}
							/>
						</TableItem>
						<TableItem
							projectname={"Deets"}
							categories={"frontend, ui/ux"}
							initiator={"HTLGKR"}
							year={"2021 - 2023"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								This project was implemented as a diploma thesis at HTL
								Grieskirchen and included the implementation of an admnistration
								panel for servicing product terminals. In addition to that a
								statically served landing page was implemented for bringing the
								product to potential customers.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								For more information, please visit our website{" "}
								<a href="https://deets.waterbyte.club">
									<span className="underline font-semibold">
										deets.waterbyte.club
									</span>
								</a>
							</p>

							<div className="flex flex-nowrap gap-5 mr-5 overflow-x-scroll ">
								<img
									src="/projects/deets/image2.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px] shrink-0"
								/>
								<img
									src="/project-imgs/deets-project-3266x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px] w-[auto] shrink-0"
								/>
								<img
									src="/projects/deets/image3.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px] shrink-0"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#react</p>
								<p>#nextjs</p>
								<p>#grapesjs</p>
								<p>#typescript</p>
								<p>#SSR</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Waterbyte Web"}
							categories={"frontend, ui/ux, branding, backend"}
							initiator={"Waterbyte"}
							year={"2021"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								This project was for the coding club I am participating in so it
								was practically without a budget and I used various tools for
								the first time. It was the first project where I was embracing
								nextjs. Instead of creating an dedicated backend I harnessed
								supabase to host changing data.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								You can check out the website on{" "}
								<a href="https://waterbyte.club">
									<span className="underline font-semibold">
										waterbyte.club
									</span>
								</a>
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/wbyt_web-project-1866x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/wbyt-project-screenshot-1.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/wbyt-project-screenshot-2.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#react</p>
								<p>#nextjs</p>
								<p>#grapesjs</p>
								<p>#typescript</p>
								<p>#SSR</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Charge"}
							categories={"frontend, backend, ui/ux"}
							initiator={"School Project"}
							year={"2022 - 2023"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								This school project was basically all about bringing a simple
								tool to the web. <br /> It should help landlords increasing
								their prices adequatly to the VPI-index.
							</p>
							<div className="h-[40px]"></div>
							<p className="mb-4">
								Learn more about the project on{" "}
								<a href="https://waterbyte.club/projects/charge">
									<span className="underline font-semibold">
										waterbyte.club/projects/charge
									</span>
								</a>
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/charge-project-3266x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#typescript</p>
								<p>#vuejs</p>
								<p>#figma</p>
							</div>
						</TableItem>

						<TableItem
							projectname={"Filli Studio"}
							categories={"frontend, ui/ux"}
							initiator={"Contest"}
							year={"2022"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[800px]">
								Filli Studio emerged from a hackathon challenge where our
								mission was to devise an innovative interface for ordering toys.
								Our creative approach led us to develop an iOS app that allowed
								users to order individual toy parts. What set this project apart
								was the incorporation of a 3D animation showcasing the assembly
								process, providing customers with a unique and engaging
								experience. To add a touch of fun, we included a mini-game for
								users to enjoy while awaiting their orders. The project's
								exceptional nature was further heightened by the diverse skill
								set within our team, with my partner and I spearheading the
								software development aspect. The collaborative effort across
								various disciplines made this endeavor not only exceptionally
								awesome but also a testament to the power of cross-functional
								teamwork in hackathon settings.
							</p>
							<div className="h-[100px]"></div>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/filliStudio-project-3266x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#flutter</p>
								<p>#dart</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Divex Survey Application"}
							categories={"frontend, ui/ux"}
							initiator={"Client"}
							year={"2020"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								In 2020, I undertook a freelancing project for an investment
								advisor based in Switzerland, secured through Fiverr. The task
								involved digitalizing a survey to enable the agency to
								categorize their clients and formulate optimal investment plans.
								The experience proved to be a valuable learning opportunity,
								allowing me to delve into the intricacies of financial advisory
								processes and enhance my skills in digitalization within the
								context of investment planning.
							</p>
							<div className="h-[100px]"></div>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/divex-project-1866x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#figma</p>
								<p>#adobe-photoshop</p>
								<p>#react</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Ballkarten.at"}
							categories={"ui/ux, branding"}
							initiator={"Wanted"}
							year={"2021"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								In 2021, a group of young entrepreneurs approached me with an
								opportunity to contribute to their business idea. They were
								developing a ticket-selling system targeted at schools
								organizing events. My role involved implementing UI/UX design
								and creating branding elements to help them promote their
								product. Although the project is no longer active, the
								experience was valuable, providing insights into branding and
								modern UI design. It's a testament to the dynamic nature of the
								field and the continuous learning curve inherent in such
								projects.
							</p>
							<div className="h-[100px]"></div>

							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/ballkarten-project-1866x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#figma</p>
								<p>#inkscape</p>
								<p>#adobe-photoshop</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Octagon"}
							categories={"frontend, ui/ux, branding"}
							initiator={"VortexData"}
							year={"2022 - 2023"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								This project involved crafting a static website for a fictional
								company based in Vienna, using ReactJS. While not the most
								economically pragmatic choice, the primary aim was to apply and
								improve my React skills. Looking back, I see the potential
								efficiency of using tools like Framer to bring the design to
								life quickly. This experience has given me valuable insights,
								influencing how I approach future projects for a more
								straightforward development process. Notably, this project
								served as a successful submission for a software agency, where I
								later secured a position.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								You can check out the project here:{" "}
								<a href="https://octagon.netlify.app">
									<span className="hover:underline italic font-semibold">
										octagon.netlify.app
									</span>
								</a>
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/octagon-project-1866x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#reactjs</p>
								<p>#react-spring</p>
								<p>#sass-scss</p>
								<p>#typescript</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Synposis"}
							categories={"frontend, ui/ux"}
							initiator={"School Project"}
							year={"2022 - 2023"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								Synposis was a school project where we aimed to create a
								practical dashboard for managing school affairs. The main idea
								was to build a straightforward platform that could easily
								accommodate plugins. I played a part in conceptualizing the
								project, handling UI/UX design, and working on the frontend
								development. The result ought to be a functional and
								user-friendly tool that streamlined administrative tasks and
								allowed for future modifications.
							</p>
							<div className="h-[100px]"></div>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/synopsis-project-2100x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#angularjs</p>
								<p>#typescript</p>
								<p>#tailwindcss</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Heed"}
							categories={"frontend, ui/ux, branding"}
							initiator={"Hackathon Contest"}
							year={"2022"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								Heed, a captivating project born out of a hackathon, revolved
								around the revitalization of motorcycle parts through innovative
								sensor data utilization. The essence of the hackathon lay in
								unleashing creativity with sensor data, prompting us to craft a
								sophisticated panel. This panel intuitively displayed the
								gathered data, empowering users to foresee potential breakdowns
								in specific elements. The ultimate goal was to streamline the
								scheduling of new part installations or repairs with utmost
								efficiency. In this collaborative endeavor, I took charge of the
								branding, UI/UX design, and frontend development, shaping the
								project into a harmonious fusion of functionality and
								aesthetics.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								You can check out the project here on{" "}
								<a href="https://waterbyte.club/projects/heed">
									<span className=" font-semibold italic hover:underline">
										waterbyte.club/projects/heed
									</span>
								</a>
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/heed-project-3266x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#reactjs</p>
								<p>#nextjs</p>
								<p>#typescript</p>
								<p>#figma</p>
							</div>
						</TableItem>
						{/* <TableItem
						projectname={"Krampus-Börse.at"}
						category={"frontend, ui/ux"}
						initiator={"Client"}
						year={"2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem> */}
						<TableItem
							projectname={"Bargun"}
							categories={"frontend, ui/ux, branding, backend"}
							initiator={"Client"}
							year={"2020-2021"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								My first venture on the Fiverr Freelancing platform took an
								unexpected turn as it delved into a highly controversial topic –
								'selling arms.' Initially hesitant, I cautiously embraced the
								collaboration after understanding the client's commitment to
								non-violent intentions. The client, an engineer specializing in
								gun craftsmanship, envisioned a platform where users could
								engage in the buying and selling of arms, complete with a
								thorough verification process. Regrettably, the project remained
								incomplete due to legal complexities. Despite this, the
								experience was a pivotal lesson in software development,
								shedding light on intricate challenges and ethical
								considerations that can arise in the industry.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								I'm unable to share the source code or any published content
								related to this project. However, its significance and the
								lessons learned make it a noteworthy addition to my experience
								board.
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/projects/bargun/bargun.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/bargun/bargun-categories.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/bargun/bargun-screen1.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/bargun/bargun-inserat.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#flutter</p>
								<p>#dart</p>
								<p>#golang</p>
							</div>
						</TableItem>
						<TableItem
							projectname={"Neighboroo"}
							categories={"frontend, ui/ux"}
							initiator={"Own Project"}
							year={"2020"}
						>
							<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
								Amidst the challenges posed by the Covid-19 pandemic, I
								recognized the significant difficulty many people faced in
								leaving their homes. Motivated by a desire to contribute
								positively, I delved into experimenting with the Flutter
								framework and embarked on creating an app with a meaningful
								purpose. The goal is to foster stronger connections within
								communities, particularly in similar districts, ensuring that
								residents can communicate and interact more easily. By
								facilitating a sense of unity, the app aims to enhance the
								quality of life for everyone involved, ultimately creating a
								more supportive and connected community.
							</p>
							<div className="h-[100px]"></div>
							<p className="mb-4">
								The app was never released but you can check out the code for
								the frontend project here:{" "}
								<a
									href="https://github.com/ungarmichael/neighboroo"
									className="font-bold italic hover:underline"
								>
									github.com/ungarmichael/neighboroo
								</a>
							</p>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/projects/neighboroo-overview.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
							<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
								<p>#flutter</p>
								<p>#dart</p>
							</div>
						</TableItem>
					</div>
					<UmFooter />
				</section>
			</Curve>
		</>
	);
};

const TableItem = ({
	children,
	projectname,
	categories,
	initiator,
	year,
}: {
	children: JSX.Element | JSX.Element[];
	projectname: string;
	categories: string;
	initiator: string;
	year: string;
}) => {
	const [expanded, setExpanded] = useState(true);
	const ref = useRef(null);
	useEffect(() => {
		let ctxt = gsap.context(() => {
			if (expanded == true) {
				gsap.to(ref.current, {
					duration: 1.2,
					height: "0px",
					ease: easeIn,
				});
			}
			if (expanded == false) {
				gsap.to(ref.current, {
					duration: 1.4,
					height: "auto",
					ease: easeOut,
				});
			}
		});

		return ctxt.clear();
	}, [expanded]);

	return (
		<>
			<div
				className="flex w-full px-4 cursor-pointer group hover:bg-white"
				onClick={() => {
					setExpanded(!expanded);
				}}
			>
				<p className="font-clash flex-1 pl-2  py-4 font-bold group-hover:text-[#333] inline text-left">
					{projectname}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-semibold group-hover:text-[#333] uppercase hidden sm:block">
					{categories}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333] hidden sm:block">
					{initiator}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333] inline text-right">
					{year}
				</p>
			</div>

			<div
				ref={ref}
				className="w-full overflow-hidden px-6 box-border"
				style={{ height: "0px" }}
			>
				{children}
			</div>

			<hr />
		</>
	);
};

const TableHead = () => {
	return (
		<div className="flex w-full px-4 uppercase group ">
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold">projectname</p>
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold hidden sm:block text-white">
				category
			</p>
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold hidden sm:block text-white">
				initiator
			</p>
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold text-right text-white">
				year
			</p>
		</div>
	);
};
const Heading = () => {
	return (
		<>
			<p className="font-druk uppercase text-[1.2em] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] mt-2 sm:mt-4 md:mt-6 lg:mt-8 font-bold ml-4">
				featured
			</p>
			<div className="relative text-white">
				<h1 className="font-druk uppercase font-outline-2 text-transparent text-[2.3rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold leading-[0.8em]  ml-4 z-50 mb-6">
					projects
				</h1>
			</div>
		</>
	);
};

const LargeText = ({ children }: { children: string }) => {
	return (
		<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
			{children}
		</p>
	);
};

const Spacer = () => {
	return <div className="h-[100px]"></div>;
};

const LinkItem = ({ link }: { link: string }) => {
	return (
		<p className="mb-4">
			You can check out the work on{" "}
			<a href={`https://${link}`}>
				<span className="underline font-semibold">{link}</span>
			</a>
		</p>
	);
};

const TagWrapper = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex flex-row flex-wrap gap-4 font-semibold text-[1.3rem] mb-8 mt-5">
			{tags.map((tag) => {
				return (
					<p key={tag} className="text-nowrap">
						#{tag}
					</p>
				);
			})}
		</div>
	);
};

const ContentBar = ({ videoItems }: { videoItems: string[] }) => {
	const frameScrollItem = useRef<any>();

	const handleScroll = (scrollAmount: any) => {
		const fsi = frameScrollItem.current;

		if (frameScrollItem) {
			const currentScroll = fsi.scrollLeft;
			const targetScroll = currentScroll + scrollAmount;

			const startTime = performance.now();
			const duration = 500; // Adjust the duration as needed

			const animateScroll = (currentTime: any) => {
				const elapsedTime = currentTime - startTime;

				fsi.scrollLeft = easeInOut(
					elapsedTime,
					currentScroll,
					scrollAmount,
					duration
				);

				if (elapsedTime < duration) {
					requestAnimationFrame(animateScroll);
				}
			};

			requestAnimationFrame(animateScroll);
		}
	};

	const easeInOut = (t: any, b: any, c: any, d: any) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};
	return (
		<>
			<div
				id="frame-vids-items"
				className="flex flex-nowrap gap-5 mr-5 overflow-x-scroll hide-scrollbar"
				ref={frameScrollItem}
			>
				{videoItems.map((link) => {
					return (
						<video key={link} autoPlay muted loop style={{ height: "300px" }}>
							<source src={link} />
						</video>
					);
				})}
			</div>

			<div className="flex justify-between mt-4 select-none">
				<div
					className="cursor-pointer select-none text-[2rem] font-bold"
					onClick={() => {
						handleScroll(-400);
					}}
				>
					&lt;-
				</div>
				<div
					className="cursor-pointer select-none text-[2rem] font-bold"
					onClick={() => {
						handleScroll(400);
					}}
				>
					-&gt;
				</div>
			</div>
		</>
	);
};

const SpareMeta = ({
	categories,
	initiator,
}: {
	categories: string;
	initiator: string;
}) => {
	return (
		<div className="flex flex-col sm:hidden">
			<div className="w-full text-left font-bold text-[1.2rem] uppercase mt-6">
				Categories:
			</div>
			<div className="w-full text-left font-medium italic uppercase text-[1.2rem]">
				{categories}
			</div>
			<div className="w-full text-left font-bold uppercase text-[1.2rem] mt-6">
				initiator:
			</div>
			<div className="w-full text-left font-medium italic uppercase text-[1.2rem]">
				{initiator}
			</div>
		</div>
	);
};

export default Projects;
