/**
 *  Project: the-wild-oasis
 *  File: Heading.jsx
 *  Created: 2:58 CH, 26/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import styled, { css } from 'styled-components';


const H1 = styled.h1`
    ${props => props.as === 'h1' && css`
        font-size: 3.2rem;
        font-weight: 700;
        //letter-spacing: .8rem;
    `}

    ${props => props.as === 'h2' && css`
        font-size: 2.4rem;
        font-weight: 600;
        //letter-spacing: .4rem;
    `}

    ${props => props.as === 'h3' && css`
        font-size: 2rem;
        font-weight: 600;
        //letter-spacing: .2rem;
    `}

    //text-transform: uppercase;
`;

export default H1;
