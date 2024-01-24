import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100vw;
		overflow-x: hidden;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	body {
		margin: 0;
		font-family: 'Manrope', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		font-size: 12px;
    line-height: 1.5;
		color: ${(p) => p.theme.colors.tagtext};
		background-color: ${(p) => p.theme.colors.white};
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		font-family: inherit;
		padding: 0;
		margin: 0;
    cursor: pointer;
	}
`;