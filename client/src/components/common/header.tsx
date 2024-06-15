import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';
import FetcherHook from '../../api/fetcher';
import { Image } from "rebass"
import LogoNbh from "../../assets/images/logonbh.png"

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          {/* <i className="fas fa-bolt"></i> */}
          {/* <img src='assets/images/logonbh.jpg' /> */}
          <Image src={LogoNbh} sx={{width:"10%", margin:"1em"}}></Image>
          <a href="http://google.com">Architecture et design d'intérieur</a>
          <FetcherHook/>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="/" title="Home" />
            <Link href="#about" title="About" />
            {/* <Link href="#feature" title="Features" /> */}
            <Link href="#works" title="How it works" />
            {/* <Link href="#faq" title="FAQ" /> */}
            {/* <Link href="pricing" title="Pricing" /> */}
            {/* <Link href="#contact" title="Contact" /> */}
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={65}>
              <Link href="/" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              {/* <Link href="#works" title="How it works" /> */}
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              {/* <Link href="#contact" title="Contact" /> */}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;