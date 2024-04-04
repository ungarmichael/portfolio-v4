"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import { LangPopup } from "@um-p4/components/lang-popup";
import gsap from "gsap";

const routes = {
	"/": "Welcome",
	"/blog": "Blog",
	"/contact": "Contact",
	"/projects": "Projects",
	"/services": "Services",
	"/services/frontend-dev": "Frontend",
	"/services/backend-dev": "Backend",
	"/services/devops": "Devops",
	"/services/ui-ux-design": "UI/UX Design",
	"/services/branding": "Branding",
};

const anim = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

export default function Curve({ children }) {
	const router = useRouter();
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	const ref = useRef();

	const [langPopupShown, setLangPopupShown] = useState(false);

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		var langPref = localStorage.getItem("language-preference");
		console.log("langpref here:");
		if (langPref == null) {
			setTimeout(() => {
				setLangPopupShown(true);
			}, 2000);
		}
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	useEffect(() => {
		let ctxt = gsap.context(() => {
			if (langPopupShown) {
				gsap.to(ref.current, {
					opacity: 1,
					delay: 0.7,
					duration: 1,

					ease: "power1.out",
				});
				return;
			}
		});
		return ctxt.clear();
	}, [langPopupShown]);

	return (
		<div className=" curve z-40 relative ">
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="background"
			/>

			<motion.p
				className="fixed  route font-bold font-clash text-[2rem] sm:text-[4rem] uppercase text-[#C2CAD1] drop-shadow-[0_0_0.3rem_#ffffff70]"
				{...anim(text)}
			>
				{routes[router.route]}
			</motion.p>

			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
			{langPopupShown && (
				<div
					className="h-screen w-full fixed top-0 left-0 z-50 opacity-0 overflow-hidden"
					ref={ref}
				>
					<div className=" absolute right-0 bottom-0 z-50 mr-8">
						<LangPopup
							onTap={() => {
								gsap.to(ref.current, {
									opacity: 0,
									delay: 0.7,
									duration: 1,
									y:30,
									top: 0,
									ease: "power1.out",
								});
							}}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

const SVG = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg {...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
