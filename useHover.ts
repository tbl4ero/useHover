import { useState, MouseEvent } from "react";

const useHover = (trackCursor = false) => {
  const [isHovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return {
    isHovered,
    hoverOptions: {
      onMouseMove: (evt: MouseEvent) => {
        setHovered(true);
        if (trackCursor) {
          const { left, top } = evt.currentTarget.getBoundingClientRect();
          setCursorPos({
            x: evt.clientX - left,
            y: evt.clientY - top,
          });
        }
      },
      onTouchStart: () => {
        setHovered(true);
        if (trackCursor) {
          setCursorPos({
            x: 0,
            y: 0,
          });
        }
      },
      ontouchend: () => setHovered(false),
      onMouseLeave: () => setHovered(false),
    },
    cursorPos,
  };
};

export default useHover;