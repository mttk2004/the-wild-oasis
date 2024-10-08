/**
 *  Project: the-wild-oasis
 *  File: AppLayout.jsx
 *  Created: 3:43 CH, 26/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Outlet } from 'react-router-dom';
import Header     from './Header.jsx';
import Sidebar    from './Sidebar.jsx';
import styled     from 'styled-components';


const StyledAppLayout = styled.div`
		height: 100vh;
    display: grid;
    grid-template-columns: 22rem 1fr;
    grid-template-rows: 6rem 1fr;
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 1rem 2rem;
		overflow-x: scroll;
`;

const Container = styled.div`
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
`

function AppLayout() {
	return <StyledAppLayout>
		<Header />
		<Sidebar />
		<Main>
			<Container>
			
			<Outlet />
			</Container>
		</Main>
	</StyledAppLayout>;
}

export default AppLayout;
