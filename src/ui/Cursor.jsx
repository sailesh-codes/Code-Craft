import { useState, useEffect, useCallback, useRef } from "react";
import CSt from "./styles/Cursor.module.css";

function Cursor() {
  const cursorRef = useRef(null);

  const [cursor, setCursor] = useState(() => {
    const pref = localStorage.getItem("cursor");
    return pref ? JSON.parse(pref) : true;
  });

  const [hideButton, setHideButton] = useState(false);

  /* useEffect(() => {
    document.body.style.cursor = cursor ? "none" : "auto";
  }, [cursor]); */

  const CursorToggle = () => {
    const toggle = !cursor;
    setCursor(toggle);
    localStorage.setItem("cursor", JSON.stringify(toggle));
  };

  const mouseMoveHandler = useCallback((e) => {
    const cursor = cursorRef.current;
    const x = e.clientX - cursor.offsetWidth / 2;
    const y = e.clientY - cursor.offsetHeight / 2;

    cursor.animate(
      { transform: `translate(${x}px, ${y}px)` },
      { duration: 800, fill: "forwards" }
    );
  }, []);

  useEffect(() => {
    if (!cursor) return;

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, [cursor, mouseMoveHandler]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        className={`${CSt.cursorToggle} ${hideButton ? CSt.disappeared : ""}`}
        onClick={CursorToggle}
      >
        Toggle cursor
      </button>

      <div
        ref={cursorRef}
        className={`${CSt.cursor} ${cursor ? CSt.on : CSt.off}`}
      ></div>
    </>
  );
}

export default Cursor;
