import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SyledLink = styled(NavLink)`
  display: flex;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: ${(props) => props.theme.colors.gray[600]};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: ${(props) => props.theme.colors.gray[800]};
    background-color: ${(props) => props.theme.colors.gray[50]};
    border-radius: ${(props) => props.theme.borderRadius.sm};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${(props) => props.theme.colors.gray[400]};
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: ${(props) => props.theme.colors.indigo[600]};
  }
`;
