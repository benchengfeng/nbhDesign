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
      "Enter an immersive interior design experience for clients seeking exceptional creativity. Our approach merges aesthetics and function, enriching experiences for you and your patrons. Embrace a design revolution powered by AI and VR, shaping purposeful spaces beyond traditional limits.",
  },
  {
    key: "2",
    title: "Work better together. Schedule meetings",
    content:
      "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  // {
  //   key: '3',
  //   title: 'The best app to increase your productivity',
  //   content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
  // },
];

function AppHero() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
