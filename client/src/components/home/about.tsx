import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-palette"></i>,
    title: 'Design Artistique',
    content: 'Transformez vos espaces avec un design artistique et innovant. Profitez d\'une esthétique unique qui reflète votre style personnel.',
  },
  // {
  //   key: '2',
  //   icon: <i className="fas fa-home"></i>,
  //   title: 'Aménagement Intérieur',
  //   content: 'Optimisez votre espace avec un aménagement intérieur fonctionnel et élégant. Des solutions sur mesure pour chaque pièce de votre maison.',
  // },
  // {
  //   key: '3',
  //   icon: <i className="fas fa-lightbulb"></i>,
  //   title: 'Innovation et Créativité',
  //   content: 'Alliez innovation et créativité pour des espaces uniques. Notre approche avant-gardiste donne vie à des intérieurs exceptionnels.',
  // },
];

function AppAbout() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          animate={control}
          className="container-fluid"
          variants={boxVariant}
          initial="hidden"
        >
          <div className="titleHolder">
            <h2>À Propos de Nous</h2>
          </div>
          <div className="contentHolder">
            <p>Nous créons des espaces uniques et inspirants grâce à notre expertise en design et architecture d'intérieur. Notre mission est de transformer vos idées en réalité avec une touche artistique et un souci du détail exceptionnel.</p>
          </div>
          <div className="aboutusBlock">
            <Row gutter={[16, 16]} style={{ justifyContent: 'center' }}>
              {items.map(item => (
                <Col md={{ span: 8 }} key={item.key}>
                  <div className="content">
                    <div className="icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppAbout;
