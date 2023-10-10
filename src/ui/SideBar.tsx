import styled from 'styled-components';
import Logo from '../components/Logo';
import MainNav from './MainNav';

const Aside = styled.aside`
  background-color: ${(props) => props.theme.colors.gray[200]};
  padding: 3.2rem 2.4rem;
  border-right: 1px solid ${(props) => props.theme.colors.gray[800]};
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export default function SideBar() {
  return (
    <Aside>
      <Logo />
      <MainNav />
    </Aside>
  );
}
