import React from 'react';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Design Architecture',
    content: 'Enter an immersive interior design experience for clients seeking exceptional creativity. Our approach merges aesthetics and function, enriching experiences for you and your patrons. Embrace a design revolution powered by AI and VR, shaping purposeful spaces beyond traditional limits.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  // {
  //   key: '3',
  //   title: 'The best app to increase your productivity',
  //   content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
  // },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay={true} autoplaySpeed={5000}>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 style={{ color: 'white', fontWeight: "bold"}}>{item.title}</h3>
                <p style={{ color: 'white', fontStyle:"italic", fontWeight: "bold"}}>{item.content}</p> 
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;