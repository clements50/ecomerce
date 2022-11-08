import { useState, useEffect } from "react";

const ScrollHook = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPositon = window.scrollY;
    currentScrollPositon > prevScroll ? setVisible(false) : setVisible(true);

    setPrevScroll(currentScrollPositon);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return [visible];
};

export default ScrollHook;
