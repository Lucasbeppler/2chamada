import styled from "styled-components";

export const Container = styled.div`
	button {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		font-weight: 700;
		background-color: #ccc;
		border-radius: 50%;
	}

	form {
			width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

		h2 {
			margin-top: 1rem;
		}

		input,
		select{
			width: 100%;
			color: black;
			padding: 0.5rem;
			margin-top: 0.5rem;
		}

		button {
			margin-top: 1rem;
			width: 50%;
			border-radius: 8px;
		}

		input[type="submit"] {
			cursor: pointer;
		}
	}
`;