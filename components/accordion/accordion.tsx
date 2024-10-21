"use client";

import React, { useEffect, useState } from "react";
import styles from "@/components/accordion/accordion.module.css";

export default function Accordion({ data }) {
	const [answerVisibility, setAnswerVisibility] = useState<
		undefined | string[]
	>(undefined);

	useEffect(() => {
		const initialState = [];
		//for each question create a "closed/undef" array element
		data.forEach((element) => {
			initialState.push(undefined);
		});
		setAnswerVisibility(initialState);
	}, []);

	const clickArrowHandler = (index: number) => {
		// create a copy of the state
		const updatedAnswerVisibility = [...answerVisibility];
		if (updatedAnswerVisibility[index] === undefined) {
			updatedAnswerVisibility[index] = "open";
		} else {
			updatedAnswerVisibility[index] = undefined;
		}
		setAnswerVisibility(updatedAnswerVisibility);
	};

	return (
		<article className={styles.accordion}>
			{answerVisibility &&
				data.map((item) => (
					<div
						key={item.question}
						//the second class is unique to the item
						className={`${styles.item}	${
							styles[answerVisibility[data.indexOf(item)]]
						}`}>
						<p className={styles.index}>{data.indexOf(item) + 1}</p>
						<p className={styles.question}>{item.question}</p>
						<button
							className={styles.btn}
							// get me index of button clicked
							onClick={clickArrowHandler.bind(null, data.indexOf(item))}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className={`${styles.icon}`}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>

						{answerVisibility[data.indexOf(item)] && (
							<div className={styles["hidden-box"]}>
								<p>{item.answer}</p>
								<ul>
									{item.bulletPoints.map((point: string) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
		</article>
	);
}
