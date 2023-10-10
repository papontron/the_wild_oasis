import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import useOutsideClick from '../hooks/useOutsideClick';

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.div`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transform: translateX(0.8rem);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const StyledList = styled.ul<{ $position: { x: number; y: number } }>`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid black;
  right: ${({ $position }) => $position.x}px;
  top: ${({ $position }) => $position.y}px;
`;

const StyledItem = styled.div`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    transition: all 0.3s;
  }
`;

interface MenusContextProps {
  openId: number | null | string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<number | null | string>>;
  position: { x: number; y: number };
  setPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

const MenusContext = createContext<MenusContextProps>({
  openId: null,
  close: () => {},
  open: () => {},
  position: { x: 0, y: 0 },
  setPosition: () => {},
});

export default function Menus({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<number | null | string>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const close = () => setOpenId(null);
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, setPosition, position }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }: { id: number }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  const ref = useRef<HTMLDivElement | null>(null);
  function handleClick() {
    const rect = ref.current?.closest('div')?.getBoundingClientRect();

    setPosition({
      x: window.innerWidth - (rect?.width as number) - (rect?.right as number),
      y: (rect?.y as number) + (rect?.height as number) + 8,
    });
    if (openId === null || openId !== id) {
      open(id);
    } else {
      close();
    }
  }
  return (
    <StyledToggle onClick={handleClick} ref={ref}>
      <HiEllipsisVertical></HiEllipsisVertical>
    </StyledToggle>
  );
}
function List({ id, children }: { id: number; children: ReactNode }) {
  const { openId, position, close } = useContext(MenusContext);

  const { ref } = useOutsideClick<HTMLUListElement>(close);
  useEffect(() => {
    function handleScroll() {
      if (!openId) return;
      close();
    }
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [close, openId]);
  if (openId !== id) return null;
  return createPortal(
    <StyledList $position={{ x: position.x, y: position.y }} ref={ref}>
      {children}
    </StyledList>,
    document.getElementById('showportal')!
  );
}
function Item({ children }: { children: ReactNode }) {
  return (
    <li>
      <StyledItem>{children}</StyledItem>
    </li>
  );
}
Menus.Menu = Menu;
Menus.List = List;
Menus.Toggle = Toggle;
Menus.Item = Item;
