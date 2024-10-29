import React from "react";

import styles from "@/components/hero/hero.module.css";
import { rubik } from "@/app/layout";

export default function Hero() {
	return (
		<article className={`${rubik.className} ${styles.hero}`}>
			<header>
				<nav className={`${styles.navigation}`}>
					<div>LOGO</div>
					<div>Navigate</div>
				</nav>

				<div>
					<h1>Stream the best series and movies!</h1>
					<p>
						More than 10,000 series and feature length movies from studios
						around the world. Find your next favorite show right now.
					</p>
					<button>Start streaming now!</button>
				</div>
			</header>
			<section>
				<h2>Get your subscription and enter into a new reality.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					obcaecati eius, neque dignissimos eum tempore sit autem quaerat ex
					placeat mollitia repudiandae, pariatur a, exercitationem vitae
					aspernatur. Impedit, optio quisquam. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Accusamus ipsum voluptatem qui non at
					doloribus! Esse accusantium tenetur illum sed veritatis atque aperiam
					neque dicta sequi nemo, perspiciatis quaerat sint.
				</p>
			</section>
		</article>
	);
}