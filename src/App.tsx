import React, { useEffect, useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MyModal } from './components/MyModal';
import axios from 'axios';

interface Info {
	id: string,
	description: string,
	cbo: string,
	salary: string,
	labor: string,
	occupation: string,
}

interface InfoSubmit {
	description: string,
	cbo: string,
	salary: string,
	labor: string,
	occupation: string,
}

function App() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [informations, setInformations] = useState<Info[]>([]);


	function handleSubmit(info: InfoSubmit, callbackFn: () => void) {
		axios({
			method: 'post',
			url: 'http://localhost:3333/position',
			data: info
		})
			.then(response => {
				setInformations([...informations, response.data]);
				callbackFn();
			})
			.catch(error => {
				console.log(error);
			})
	}

	function getAllInformations() {
		axios({
			method: 'get',
			url: 'http://localhost:3333/position',
		})
			.then(response => {
				setInformations(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}

	useEffect(() => {
		getAllInformations();
	}, []);

	function handleDelete(id: string) {
		axios({
			method: 'delete',
			url: 'http://localhost:3333/position/' + id
		})
			.then(response => {
				const newInfos = informations.filter(e => e.id !== id);

				setInformations(newInfos);
			})
			.catch(error => {
				console.log(error);
			});
	}

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}


	return (
		<div className="App">
			<MyModal
				modalIsOpen={modalIsOpen}
				handleSubmit={handleSubmit}
				closeModal={closeModal}
			/>

			<Header
				openModal={openModal}
			/>

			<Dashboard
				informations={informations}
				handleDelete={handleDelete}
			/>

			<GlobalStyle />
		</div>
	);
}

export default App;
