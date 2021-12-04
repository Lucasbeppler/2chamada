import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body { 
    font-family: Roboto, sans-serif;
    background: #f2eee3;
		color: #5065a7;
}

div#root {
    height: 100vh;
}

button {
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    svg {
        width:24px;
        height:24px;
    }
}
`;
