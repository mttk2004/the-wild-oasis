/**
 *  Project: the-wild-oasis
 *  File: Row.jsx
 *  Created: 3:09 CH, 26/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import styled, { css } from 'styled-components';


const Row = styled.div`
    display: flex;
    width: 100%;

    ${props => props.type === 'horizontal' && css`
        justify-content: space-between;
        align-items: center;
    `}

    ${props => props.type === 'vertical' && css`
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
    `}
`;

Row.defaultProps ={
    type: 'vertical'
}

export default Row;
