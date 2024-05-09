import React from "react";

import { Carousel } from "antd";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const items = [
  {
    key: "1",
    title: "Design Architecture",
    content:
      "Our approach merges aesthetics and function",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "Let's work together and create a brighter future for us all.",
  },
  // {
  //   key: '3',
  //   title: 'The apps to increase your productivity',
  //   content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
  // },
];

function AppHero() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="hero" className="heroBlock">
      <motion.div
        ref={ref}
        animate={control}
        className="container-fluid"
        variants={boxVariant}
        initial="hidden"
      >
        <Carousel autoplay={true} autoplaySpeed={5000} style={{paddingTop:"10em"}}>
          {items.map((item) => {
            return (
              <div key={item.key} className="container-fluid">
                <div className="content">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "white",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </motion.div>
    </div>
  );
}

export default AppHero;
