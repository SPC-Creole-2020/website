import React, { useRef, useEffect } from "react";

export const useMouseUp = callback => {
  useEffect(() => {
    window.addEventListener("mouseup", callback);
    return () => window.removeEventListener("mouseup", callback);
  }, [callback]);
};

// From: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
export function ClickOutsideAlerter({ children, callback }) {
  function useClickOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        typeof callback === "function" && callback();
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }
  const wrapperRef = useRef(null);
  useClickOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{children}</div>;
}
