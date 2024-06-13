import { useEffect, useRef, useState, useCallback } from "react";

export default function useActive() {
  const nodeRef = useRef([]);
  const [active, setActive] = useState(null);

  const handleMouseOver = useCallback((index) => {
    setActive(index);
  }, []);

  const handleMouseOut = useCallback(() => {
    setActive(null);
  }, []);

  useEffect(() => {
    nodeRef.current.forEach((dom, index) => {
      if (dom) {
        dom.addEventListener("mouseover", () => handleMouseOver(index));
        dom.addEventListener("mouseout", handleMouseOut);
      }
    });

    return () => {
      nodeRef.current.forEach((dom, index) => {
        if (dom) {
          dom.removeEventListener("mouseover", () => handleMouseOver(index));
          dom.removeEventListener("mouseout", handleMouseOut);
        }
      });
    };
  }, [handleMouseOver, handleMouseOut]);

  return {
    active,
    nodeRef,
  };
}
