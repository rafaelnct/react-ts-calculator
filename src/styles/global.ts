import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --bg-Whit01: #F3F3F6;
        --bg-Whit02: #FBFBFC;

        --bg-Dark01: #21232F;
        --bg-Dark02: #111320;

        --bg-Shadw: rgba(0, 0, 0, 0.1);

        --font-Color01: #88898F;
        --font-Color02: #4096E5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16 * 0,9375 = 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%;  // 16 * 0,8750 = 14px
        }
    }

    body {
        background-image: linear-gradient(-45deg, var(--bg-Whit01), var(--bg-Whit02));
        -webkit-font-smoothing: antialiased;
        width: 100vw;
        height: 100vh;
        color: var(--font-Color01);
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
