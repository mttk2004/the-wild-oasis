/**
 *  Project: the-wild-oasis
 *  File: Header.jsx
 *  Created: 3:52 CH, 26/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import styled from 'styled-components';


const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
	return <StyledHeader>header</StyledHeader>;
}

export default Header;
