"use client";

import React, { useState } from "react";
import styles from "@/components/accordion/accordion.module.css";

export default function Accordion({ index, question }) {
	const [showAnswer, setShowAnswer] = useState(false);

	const clickHandler = () => {
		setShowAnswer((prev) => !prev);
	};

	let hiddenClass: string;
	showAnswer ? (hiddenClass = "open") : (hiddenClass = undefined);
	return (
		<article className={styles.accordion}>
			<div className={`${styles.item} ${styles[`${hiddenClass}`]}`}>
				<p className={styles.index}>{index}</p>
				<p className={styles.question}>{question}</p>
				<button className={styles.btn} onClick={clickHandler}>
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

				{showAnswer && (
					<div className={styles["hidden-box"]}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis hic deserunt quod quis nesciunt veritatis cum illum
							beatae alias error officiis obcaecati sunt, asperiores vel ab?
							Sint incidunt quibusdam recusandae placeat. Perspiciatis tempore
							dolorem rem minus modi explicabo natus sed eius.
						</p>
						<ul>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>
								Perspiciatis tempore dolorem rem minus modi explicabo natus sed
								eius
							</li>
							<li>optio, consequatur neque quod, ducimus quisquam odit.</li>
							<li>Molestiae, doloremque pariatur. Quod!</li>
						</ul>
					</div>
				)}
			</div>
		</article>
	);
}
