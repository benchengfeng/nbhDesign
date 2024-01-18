import React from "react";

import { Row, Col } from "antd";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const items = [
  {
    key: "1",
    title: "High Performance",
    content:
      "Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.",
  },
  // {
  //   key: '2',
  //   icon: <i className="fas fa-desktop"></i>,
  //   title: 'Flat Design',
  //   content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
  // },
  // {
  //   key: '3',
  //   icon: <i className="fas fa-database"></i>,
  //   title: 'Simplified Workflow',
  //   content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  // },
];

function AppFeature() {
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
    <div id="feature" className="block aboutBlock">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          animate={control}
          className="container-fluid"
          variants={boxVariant}
          initial="hidden"
        >
          <div className="titleHolder">
            <h2>section 2 on dit quelques chose </h2>
          </div>
          <div className="contentHolder">
            <p>Technology has revolutionized the way we live and work</p>
          </div>
          <div className="aboutusBlock">
            <Row gutter={[16, 16]}>
              {items.map((item) => {
                return (
                  <Col md={{ span: 8 }} key={item.key}>
                    <div className="content">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppFeature;
