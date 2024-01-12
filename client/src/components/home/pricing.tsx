import React from 'react';

import { List, Card, Button } from 'antd';

const data: any = [
  {
    title: 'Basic',
    content: [
      {
        price: '$59.99',
        user: '3 Designs',
        support: '24/7 support',
        backup: 'Safe, reliable',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    title: 'Premium',
    content: [
      {
        price: '$99.99',
        user: '6 Designs',
        support: '24/7 support',
        backup: 'Safe, reliable',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    title: 'Enterprise',
    content: [
      {
        price: '$199.99',
        user: '10 Designs',
        support: '24/7 support',
        backup: 'Safe, reliable',
        access: 'Access from anywhere'
      }
    ]
  }
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i> Get Started</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;