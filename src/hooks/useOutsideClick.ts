import { useEffect, RefObject, useCallback, useState } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  insideRef: RefObject<T>
) {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (insideRef.current && insideRef.current.contains(e.target as Node)) {
        return;
      }

      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback, insideRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback, handleClick, insideRef]);
}

export default useOutsideClick;
