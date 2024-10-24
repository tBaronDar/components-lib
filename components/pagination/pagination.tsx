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
		if (pages <= 5) {
			for (let i = 1; i <= 5; i++) {
				firstButtons.push(i);
				//all buttons unselected
				tempSelectedButtons.push(undefined);
			}
			//the current button selected
			tempSelectedButtons[selectedPage - 1] = "selected-button";
			setNumberButtons(firstButtons);
			setSelectedButtons(tempSelectedButtons);
			setShowFirstButton(false);
			setShowLastButton(false);
		} else {
			for (
				let i = Math.max(1, selectedPage - 2);
				i < Math.min(pages + 1, selectedPage + 2);
				i++
			) {
				if (i < pages - 2) {
					setShowLastButton(true);
				} else {
					setShowLastButton(false);
				}
				firstButtons.push(i);
				selectedButtons.push(undefined);
				tempSelectedButtons.push(undefined);
			}
			tempSelectedButtons[selectedPage - 1] = "selected-button";
			setNumberButtons(firstButtons);
			setSelectedButtons(tempSelectedButtons);
		}
	}, [selectedPage]);

	function numberButtonClickHandler(buttonIndex: number) {
		console.log(buttonIndex);
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
					onClick={numberButtonClickHandler.bind(null, item)}>
					{item}
				</button>
			))}
			{showLastButton && <p>...</p>}
			{showLastButton && (
				<button
					className={styles["number-button"]}
					onClick={numberButtonClickHandler.bind(null, pages)}>
					{pages}
				</button>
			)}
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
