import { Variants, motion } from "framer-motion";
import NavDesktop from "../navigation/desktop/NavDesktop";
import "./header.css";
import { useEffect, useState } from "react";
import NavMobile from "../navigation/mobile/NavMobile";

const parent: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};
const text: Variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.4,
    },
  },
};

const line: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "50%",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.2,
      staggerChildren: 0.4,
    },
  },
};

type Props = {
  title: string;
  content: string;
};

const Header = ({ title, content }: Props) => {
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth((e.target as Window).innerWidth);
    });
  });
  return (
    <div className="custom__header">
      <div className="custom__header_container">
        {width <= 750 ? <NavMobile /> : <NavDesktop />}
        <motion.div
          className="custom__header__content"
          variants={parent}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={text}>{title}</motion.h2>
          <motion.div className="line" variants={line}></motion.div>
          <motion.p variants={text}>{content}</motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
