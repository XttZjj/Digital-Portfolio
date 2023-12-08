// Import necessary components from antd
import { Layout, Menu, theme, Carousel, Avatar, Card  } from 'antd';
import React, { useState } from 'react';
import Ava from './OrbFull.png'
import cover from './cover.png'
import website from './website.png'

const { Header, Content, Footer } = Layout;

// Main component
const App = () => {

  const contentStyle = {
    margin: 0,
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };

  const { Meta } = Card;

  const { Item } = Menu;

  const links = [
    {
      label: 'Home',
      key: 'link1',
      url: window.location.href,
    },
    {
      label: 'Github',
      key: 'link2',
      url: 'https://github.com/XttZjj',
    },
    {
      label: 'Resume',
      key: 'link3',
      url: 'https://drive.google.com/file/d/16O18wz_iMqeRSoNZy__hPbLKI90Mxxvv/view?usp=sharing',
    },
  ];

  const [current, setCurrent] = useState('link1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          theme="dark"
        >
          {links.map((link) => (
            <Item key={link.key}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </Item>
          ))}
        </Menu>
      </Header>
      <div style={contentStyle}>
        <div class="container">
          <div class="left">
            <Avatar size={64} src={Ava} />
            <h1>Xuteng Luo</h1>
          </div>
          <div class="right">
            <p>
              Hi, I'm Xuteng, a senior Computer Science student at the University of Michigan. I love developing websites and games. Hope you enjoy my work 💕
            </p>
          </div>
        </div>
      </div>
      <Carousel afterChange={onChange} autoplay>
        <div>
        <a href={'https://shufengc.itch.io/chrono-portal-a-journey-home'}>
          <img src={cover} style={{ width: "100vw", height: "61vh" }}/>
        </a>
        </div>
        <div>
        <a href={'https://glkb.dcmb.med.umich.edu/'}>
          <img src={website} style={{ width: "100vw", height: "61vh" }}/>
        </a>
        </div>
      </Carousel>
    </Layout>
  );
};

export default App;
