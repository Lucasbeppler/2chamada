import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

		max-width: 80%;
		margin: 0 auto;


		table {
			width: 100%;
			margin-top: 1rem;

				tr td, 
				tr th {
					text-align: center;

					border: 1px solid #5065a7;
					padding: 1rem 0;
				}

				.delete {
					color: red;
				}
		}
`;