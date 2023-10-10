import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineUsers,
} from 'react-icons/hi';
import { HiOutlineHomeModern, HiOutlineCog6Tooth } from 'react-icons/hi2';
import { SyledLink } from '../components/StyledLink';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <SyledLink to="/dashboard">
            <HiOutlineHome />
            Home
          </SyledLink>
        </li>
        <li>
          <SyledLink to="/bookings">
            <HiOutlineCalendar />
            Bookings
          </SyledLink>
        </li>
        <li>
          <SyledLink to="/cabins">
            <HiOutlineHomeModern />
            Cabins
          </SyledLink>
        </li>
        <li>
          <SyledLink to="/users">
            <HiOutlineUsers />
            Users
          </SyledLink>
        </li>
        <li>
          <SyledLink to="/settings">
            <HiOutlineCog6Tooth />
            Settings
          </SyledLink>
        </li>
      </NavList>
    </nav>
  );
}
