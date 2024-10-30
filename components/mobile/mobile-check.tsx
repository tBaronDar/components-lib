"use client";
import React from "react";

import styles from "./mobile-check.module.css";
import { redirect } from "next/navigation";

export default function MobileCheck({ showComponents }) {
	return (
		<main className={styles.main}>
			<section className={styles.container}>
				<h1>Important!</h1>
				<p>
					These web components are designed with wider(desktop) screens in mind.
					They may not appear correctly from this device. Do you want to
					continue?
				</p>
				<button onClick={showComponents}>Show them anyway</button>
			</section>
		</main>
	);
}
