import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Patrick Hand', cursive;
        font-size: 1.2rem;
        background:linear-gradient(90deg, #da4453 0%,#89216b 100% );
    }
    html, body, #root{
        height: 100%;
        
    }
`;