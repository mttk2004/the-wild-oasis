/**
 *  Project: the-wild-oasis
 *  File: Sidebar.jsx
 *  Created: 3:58 CH, 26/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import styled from "styled-components";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2.4rem 0.8rem;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
