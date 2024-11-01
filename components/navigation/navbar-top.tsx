import React from "react";
import { Rubik } from "next/font/google";

import styles from "./navbar-top.module.css";
import Link from "next/link";

const rubik = Rubik({ weight: "variable", subsets: ["latin"] });

export default function Navbar() {
	return (
		<nav className={`${styles.navbar} ${rubik.className}`}>
			<div>LOGO</div>
			<details className={styles["section-components"]}>
				<summary>Section Components</summary>
				<ul>
					<li>
						<Link href="/hero" target="_blank" className={styles.link}>
							Hero Component
						</Link>
					</li>
					<li>
						<Link
							href="/email-app-layout"
							target="_blank"
							className={styles.link}>
							Email App Layout
						</Link>
					</li>
				</ul>
			</details>
		</nav>
	);
}
