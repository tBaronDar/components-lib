import React from "react";

import styles from "./page.module.css";

export default function EmailAppLayout() {
	return (
		<div className={styles.container}>
			<nav className={`${styles.navigation} ${styles.padding}`}>Nav</nav>
			<menu className={styles.menu}>
				<button>New</button>
				<button>Reply</button>
				<button>Forward</button>
				<button>Mark Unread</button>
				<button>Trash</button>
			</menu>
			<section className={styles.inbox}>
				<div>Email 1</div>
				<div>Email 2</div>
				<div>Email 3</div>
				<div>Email 4</div>
				<div>Email 5</div>
				<div>Email 6</div>
				<div>Email 7</div>
				<div>Email 8</div>
				<div>Email 9</div>
				<div>Email 10</div>
			</section>
			<main className={`${styles.main} ${styles.padding}`}>Email Content</main>
			<aside className={`${styles["side-menu"]} ${styles.padding}`}>
				Side menu
			</aside>
		</div>
	);
}
