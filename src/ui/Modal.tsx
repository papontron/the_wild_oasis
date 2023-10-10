import {
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import useOutsideClick from '../hooks/useOutsideClick';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

interface ModalContextValue {
  openName: string;
  open: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
}
export const ModalContext = createContext<ModalContextValue>({
  openName: '',
  open: () => {},
  close: () => {},
});

//compound component pattern

export function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenModalButton({
  children,
  windowName: opensWindowName,
}: {
  children: ReactElement;
  windowName: string;
}) {
  const { open } = useContext(ModalContext);
  //eslint-disable-next-line
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;
  return createPortal(
    <>
      <Overlay onClick={() => close()}></Overlay>
      <StyledModal ref={ref}>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
        <Button onClick={close}>
          <HiXMark />
        </Button>
      </StyledModal>
    </>,
    document.getElementById('showportal')!
  );
}

Modal.Window = Window;
Modal.OpenModalButton = OpenModalButton;
export default Modal;
