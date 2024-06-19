import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import { Image } from 'rebass';
import LogoNbh from '../../assets/images/logonbh.png';
import useIsMobile from '../../hooks/useIsMobile';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

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
          <Image src={LogoNbh} sx={{ width: isMobile ? '30%' : '10%', mr: '1em' }}></Image>
          <a href="http://google.com">Architecture et design d'intérieur</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="/" title="Accueil" />
            <Link href="#about" title="À propos" />
            {/* <Link href="#feature" title="Caractéristiques" /> */}
            <Link href="#works" title="Fonctionnement" />
            <Link href="#faq" title="FAQ" />
            {/* <Link href="pricing" title="Tarifs" /> */}
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
              <Link href="/" title="Accueil" />
              <Link href="#about" title="À propos" />
              {/* <Link href="#feature" title="Caractéristiques" /> */}
              <Link href="#works" title="Fonctionnement" />
              <Link href="#faq" title="FAQ" />
              {/* <Link href="#pricing" title="Tarifs" /> */}
              {/* <Link href="#contact" title="Contact" /> */}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
