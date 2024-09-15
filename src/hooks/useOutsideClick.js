import { useEffect } from "react";

export function useOutsideClick(ref, callback, listenCapturing = true) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside, listenCapturing);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
        listenCapturing
      );
  }, [ref, callback, listenCapturing]);
}
