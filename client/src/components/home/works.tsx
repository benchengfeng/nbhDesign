import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AppWorks = () => {
  const [visible, setVisible] = useState(false);
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

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          animate={control}
          className="container-fluid"
          variants={boxVariant}
          initial="hidden"
        >
          <div className="titleHolder">
            <h2>Demonstration</h2>
            <p>Découvrez notre dernière démo pour savoir comment cela fonctionne</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="Mon Portfolio"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe
              title="Mon Portfolio"
              width="100%"
              height="350"
              src="https://www.youtube.com/"
            ></iframe>
          </Modal>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWorks;
