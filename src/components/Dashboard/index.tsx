import { Container } from "./styles";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Info {
	id: string,
	description: string,
	cbo: string,
	salary: string,
	labor: string,
	occupation: string,
}

interface Props {
	informations: Info[],
	handleDelete: (id: string) => void,
}

export function Dashboard({ informations, handleDelete }: Props) {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>description</th>
						<th>cbo</th>
						<th>salary</th>
						<th>labor</th>
						<th>occupation</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{informations.map(d => (
						<tr key={d.id} >
							<td> {d.description} </td>
							<td> {d.cbo} </td>
							<td> {d.salary} </td>
							<td> {d.labor} </td>
							<td> {d.occupation} </td>
							<td>
								<button onClick={() => { handleDelete(d.id) }} className="delete">
									<svg viewBox="0 0 24 24"  >
										<path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
									</svg>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
