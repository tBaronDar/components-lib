"use client";

import React from "react";

import styles from "@/components/table/table.module.css";

export default function Table({ data }) {
	const tableHead = Object.keys(data[0]);
	return (
		<table className={styles.main}>
			<thead>
				<tr>
					{tableHead.map((item) => (
						<th>{item}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr>
						<th>{item.name}</th>
						<td>{item.defence}</td>
						<td>{item.attack}</td>
						<td>{item.speed}</td>
						<td>{item.acceleration}</td>
						<td>{item.passing}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
