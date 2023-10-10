import { useEffect, useRef } from 'react'; //RefObject

export default function useOutsideClick<T extends HTMLElement>(
  handler: () => void
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (ref.current && !ref.current.contains(target as HTMLElement)) {
        console.log('clicked outside');
        handler();
      }
    }

    document.addEventListener('click', handleClick, true); // listenCapturing = true
    return () => document.removeEventListener('click', handleClick, true);
  }, [handler, ref]);
  return { ref };
}
