"use client";

import React, { useEffect, useState } from "react";

import styles from "@/components/pagination/pagination.module.css";

export default function Pagination({ pages, initialPage }) {
	const [selectedButtons, setSelectedButtons] = useState([]);
	const [numberButtons, setNumberButtons] = useState([]);
	const [selectedPage, setSelectedPage] = useState(initialPage);
	const [showLastButton, setShowLastButton] = useState(false);
	const [showFirstButton, setShowFirstButton] = useState(false);

	useEffect(() => {
		const firstButtons = [];
		const tempSelectedButtons = [];

		//last button is separate
		firstButtons.push(1);
		//display buttons===pages, exclude first and last
		for (let i = 1; i < pages - 1; i++) {
			firstButtons.push(i + 1);
		}
		//last button is separate
		if (pages > 2) {
			firstButtons.push(pages);
		}
		firstButtons.forEach((item) => {
			if (selectedPage === item) {
				tempSelectedButtons.push("selected-button");
			} else {
				tempSelectedButtons.push(undefined);
			}
		});

		setNumberButtons(firstButtons);
		setSelectedButtons(tempSelectedButtons);
	}, [selectedPage]);

	console.log("buttons array: ", numberButtons);
	console.log("selected: ", selectedButtons);

	function numberButtonClickHandler(buttonIndex: number) {
		setSelectedPage(buttonIndex);
	}

	function nextButtonHandler() {
		if (selectedPage < pages) {
			setSelectedPage((prev: number) => prev + 1);
		} else {
			setSelectedPage(pages);
		}
	}

	function previousButtonHandler() {
		if (selectedPage > 1) {
			setSelectedPage((prev: number) => prev - 1);
		} else {
			setSelectedPage(1);
		}
	}

	return (
		<div className={styles.pagination}>
			<button
				className={styles["arrow-button"]}
				onClick={previousButtonHandler}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={styles["arrow-icon"]}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			{numberButtons.map((item) => (
				<button
					key={item}
					className={`${styles["number-button"]} ${
						styles[`${selectedButtons[numberButtons.indexOf(item)]}`]
					}`}
					onClick={numberButtonClickHandler.bind(
						null,
						numberButtons.indexOf(item - 1)
					)}>
					{item}
				</button>
			))}
			{showLastButton && <p>...</p>}

			<button className={styles["arrow-button"]} onClick={nextButtonHandler}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={styles["arrow-icon"]}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
}
