import { useEffect, RefObject, useCallback } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback, handleClick]);
}

export default useOutsideClick;
