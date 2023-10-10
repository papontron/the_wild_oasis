import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import styled from 'styled-components';

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.gray[200]};
  padding: 4rem 4.8rem 6.4rem;
  overflow-x: auto;
`;
const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
export default function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}
