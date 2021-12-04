import { FormEventHandler, useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface Info {
	description: string,
	cbo: string,
	salary: string,
	labor: string,
	occupation: string,
}

interface Props {
	modalIsOpen: boolean,
	closeModal: () => void,
	handleSubmit: (info: Info, callbackFn: () => void) => void,
}


export function MyModal({ modalIsOpen, closeModal, handleSubmit}: Props) {
	const [description, setDescription] = useState("");
	const [cbo, setCbo] = useState("");
	const [salary, setSalary] = useState("");
	const [labor, setLabor] = useState("D");
	const [occupation, setOccupation] = useState("S");

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};
	Modal.setAppElement('#root');

	function modalHandleSubmit(e: React.FormEvent<HTMLFormElement>) { 
		e.preventDefault();
		handleSubmit(
			{ description, cbo, salary, labor, occupation },
			() => {
				setDescription("");
				setCbo("");
				setSalary("");
				setLabor("D");
				setOccupation("S");
			}
		);
		closeModal();
	}


	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Examplo"
			style={customStyles}
		>
			<Container>
				<button onClick={closeModal} className="close-btn" >
					<svg viewBox="0 0 24 24">
						<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
					</svg>
				</button>

				<form onSubmit={modalHandleSubmit} >
					<h2>Cadastre suas informações</h2>

					<input placeholder="description" value={description} onChange={(event) => { setDescription(event.target.value) }} />
					<input placeholder="cbo" value={cbo} onChange={(event) => { setCbo(event.target.value) }} />
					<input placeholder="salary" value={salary} onChange={(event) => { setSalary(event.target.value) }} />
					<select value={labor} onChange={(event) => { setLabor(event.target.value) }} >
						<option value="D" >D-Direta</option>
						<option value="I" >I-Indireta</option>
					</select>
					<select value={occupation} onChange={(event) => { setOccupation(event.target.value) }} >
						<option value="S" >S-Sim</option>
						<option value="N" >N-Nao</option>
					</select>

					<button type="submit" > Finalizar </button>
				</form>
			</Container>
		</Modal>
	);
}