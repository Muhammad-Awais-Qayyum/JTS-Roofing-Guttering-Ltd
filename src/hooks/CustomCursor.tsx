
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, {
    damping: 25,
    stiffness: 150,
    mass: 0.3,
  });

  const cursorY = useSpring(0, {
    damping: 25,
    stiffness: 150,
    mass: 0.3,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX - 16, y: e.clientY - 16 });
    };

    const handleElementChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "input" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        !!target.closest("input") ||
        target.getAttribute("role") === "button";

      setIsPointer(Boolean(isClickable));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementChange);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className=" fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-full h-full bg-primary rounded-full"
          animate={{
            scale: isPointer ? 1 : 1,
            opacity: isPointer ? 0.5 : 0.3,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x + 14,
          y: mousePosition.y + 14,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 250,
          mass: 0.5,
        }}
      >
        <motion.div
          className="w-full h-full bg-primary rounded-full"
          animate={{
            scale: isPointer ? 0 : 1,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />
      </motion.div>
    </>
  );
}