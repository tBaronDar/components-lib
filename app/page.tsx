"use client";

import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";
import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";
import Navbar from "@/components/navigation/navbar-top";

import styles from "@/app/page.module.css";

//dummy data
import { FAQ, carouselData, playersData } from "@/data/dummy_data";
import { useEffect, useState } from "react";
import MobileCheck from "@/components/mobile/mobile-check";

export default function ComponentsLib() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [proccedByUser, setProccedByUser] = useState(false);

	useEffect(() => {
		console.log(window.innerWidth);
		setIsSmallScreen(window.innerWidth / window.devicePixelRatio < 768);
	}, [proccedByUser]);

	return (
		<>
			<header>{(!isSmallScreen || proccedByUser) && <Navbar />}</header>
			{(!isSmallScreen || proccedByUser) && (
				<main className={styles["main-page"]}>
					<Pagination pages={6} initialPage={1} />
					<Table data={playersData} />
					<Accordion data={FAQ} />
					<Carousel data={carouselData} />
				</main>
			)}
			{isSmallScreen && !proccedByUser && (
				<MobileCheck
					showComponents={() => {
						setProccedByUser(true);
					}}
				/>
			)}
		</>
	);
}
