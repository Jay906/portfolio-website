import React, { useState, useEffect } from "react";

function TypeWriter({ words }) {
  const [typing, setTyping] = useState(false);
  const [blinking, setBlinking] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    if (words !== text) {
      setTimeout(() => {
        setTyping(true);
        const toBeTyped = words.substring(0, text.length + 1);
        setText(toBeTyped);
      }, 150);
    } else {
      setTyping(false);
    }
  }, [text, typing, words]);

  useEffect(() => {
    if (typing) {
      setTimeout(() => setBlinking(!blinking), 150);
    } else {
      setBlinking(false);
    }
  }, [blinking, typing]);

  return (
    <div>
      <h1>
        {text}
        <span className={blinking ? "show" : "hide"}>|</span>
      </h1>
    </div>
  );
}

export default TypeWriter;
