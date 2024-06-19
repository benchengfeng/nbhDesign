import React, { useEffect } from "react";
import { Carousel } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  {
    key: "1",
    title: "Architecture Design",
    content: "Notre approche fusionne esthétique et fonctionnalité",
  },
  {
    key: "2",
    title: "Collaboration Optimale",
    content: "Travaillons ensemble pour créer un avenir plus radieux.",
  },
  // {
  //   key: '3',
  //   title: 'Solutions Innovantes',
  //   content: 'Découvrez nos solutions innovantes pour améliorer votre espace de vie et de travail.',
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
        <Carousel autoplay={true} autoplaySpeed={5000} style={{ paddingTop: "10em" }}>
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
