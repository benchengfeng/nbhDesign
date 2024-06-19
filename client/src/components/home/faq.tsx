import React from 'react';
import { Collapse } from 'antd';
// import SendMailButton from '../../api/sendMail';

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Questions Fréquemment Posées</h2>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Qui sommes-nous ?" key="1">
            <p>Nous sommes une entreprise de design et d'architecture d'intérieur dédiée à créer des espaces uniques et inspirants. Notre mission est de transformer vos idées en réalité avec une touche artistique et un souci du détail exceptionnel.</p>
          </Panel>
          <Panel header="Quels services offrons-nous ?" key="2">
            <p>Nous offrons une gamme complète de services de design d'intérieur, de la consultation initiale à la mise en œuvre finale. Que ce soit pour des projets résidentiels ou commerciaux, nous avons l'expertise pour répondre à vos besoins spécifiques.</p>
          </Panel>
          <Panel header="Comment nous contacter ?" key="3">
            <p>Vous pouvez nous contacter facilement via notre formulaire de contact sur le site web ou nous envoyer un email directement. Nous sommes toujours disponibles pour discuter de vos projets et répondre à vos questions.</p>
          </Panel>
          <Panel header="Pourquoi choisir notre entreprise ?" key="4">
            <p>Avec des années d'expérience et une passion pour le design, nous offrons des solutions personnalisées et créatives pour chaque client. Notre approche collaborative garantit que vos besoins et vos goûts sont au cœur de chaque projet.</p>
          </Panel>
          <Panel header="Comment suivre nos projets ?" key="5">
            <p>Restez à jour avec nos derniers projets et réalisations en visitant notre portfolio en ligne. Nous mettons régulièrement à jour notre site avec de nouvelles idées et des projets achevés pour vous inspirer.</p>
          </Panel>
          <Panel header="Comment obtenir un devis ?" key="6">
            <p>Pour obtenir un devis personnalisé, contactez-nous via notre formulaire en ligne ou par email. Nous serons heureux de discuter de vos besoins et de vous fournir une estimation détaillée pour votre projet.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Besoin d'un support rapide ?</h3>
          <p>Notre équipe de service clientèle est disponible pour répondre à toutes vos questions et vous aider à chaque étape de votre projet. N'hésitez pas à nous contacter pour un support rapide et efficace.</p>
          {/* <Button type="primary" size="large"><i className="fas fa-envelope"></i> Envoyez votre question par email</Button> */}
          {/* <SendMailButton /> */}
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
