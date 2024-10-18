"use client";

import React, { useEffect, useState } from "react";

import styles from "@/components/carousel/carousel.module.css";
import Image from "next/image";

export default function Carousel({ data }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [dots, setDots] = useState([]);

	useEffect(() => {
		const dotsArray = [];
		data.map((item) => {
			let dotSelector: string | undefined;
			if (data.indexOf(item) === currentIndex) {
				dotSelector = "selected-dot";
			} else {
				dotSelector = undefined;
			}
			dotsArray.push({ id: data.indexOf(item), selector: dotSelector });
			setDots(dotsArray);
		});
	}, [data, currentIndex]);

	function previousClickHandler() {
		let newIndex = currentIndex - 1;
		if (newIndex < 1) {
			newIndex = data.length - 1;
		}
		setCurrentIndex(newIndex);
	}

	function nextClickHandler() {
		let newIndex = currentIndex + 1;
		if (newIndex > data.length - 1) {
			newIndex = 0;
		}
		setCurrentIndex(newIndex);
	}

	function dotClickHandler(id: number) {
		setCurrentIndex(id);
	}

	return (
		<article className={styles.carousel}>
			<div className={styles.image}>
				<Image
					src={data[currentIndex].imageUrl}
					alt={data[currentIndex].authorName}
					fill
					style={{ objectFit: "cover" }}
					priority
				/>
			</div>
			<blockquote className="testimonial">
				<p className={styles["testimonial-text"]}>
					{data[currentIndex].testimonial}
				</p>
				<p className={styles["testimonial-author"]}>
					{data[currentIndex].authorName}
				</p>
				<p className={styles["testimonial-job"]}>
					{data[currentIndex].authorJob}
				</p>
				<button
					className={`${styles.btn} ${styles["btn-left"]}`}
					onClick={previousClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className={styles.icon}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<button
					className={`${styles.btn} ${styles["btn-right"]}`}
					onClick={nextClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className={styles.icon}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</blockquote>
			<div className={styles.dots}>
				{dots.map((item) => (
					<button
						key={item.id}
						className={`${styles.dot} ${styles[`${item.selector}`]}`}
						onClick={dotClickHandler.bind(null, item.id)}>
						&nbsp;
					</button>
				))}
			</div>
		</article>
	);
}
