import React from "react";

import styles from "@/components/carousel/carousel.module.css";
import Image from "next/image";

export default function Carousel() {
	return (
		<article className={styles.carousel}>
			<div className={styles.image}>
				<Image
					src={
						"https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					fill
					alt="a woman"
				/>
			</div>
			<blockquote className="testimonial">
				<p className={styles["testimonial-text"]}>
					"Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem iure, nihil eaque reiciendis fugit nisi modi illo fuga
					et possimus in quas. Dolorem dolores iste."
				</p>
				<p className={styles["testimonial-author"]}>Chantal Amorie</p>
				<p className={styles["testimonial-job"]}>HR Manager at Commercial</p>
				<button className={`${styles.btn} ${styles["btn-left"]}`}>
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
				<button className={`${styles.btn} ${styles["btn-right"]}`}>
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
				<button className={styles.dot}>&nbsp;</button>
				<button className={styles.dot}>&nbsp;</button>
				<button className={styles.dot}>&nbsp;</button>
				<button className={styles.dot}>&nbsp;</button>
			</div>
		</article>
	);
}
