import React from 'react';

import { BackTop } from 'antd';
import { Image } from "rebass"
import LogoNbh from "../../assets/images/logonbh.png"
import useIsMobile from '../../hooks/useIsMobile';

function AppFooter() {
  const isMobile = useIsMobile();
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          {/* <i className="fas fa-bolt"></i> */}
          <Image src={LogoNbh} sx={{width: isMobile ? "30%" : "10%", margin:"1em", background:"white"}}></Image>
          <a href="http://google.com">Architecture et design d'intérieur</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https:///www.instagram.com/nbhdesign13620/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2023 CF</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;