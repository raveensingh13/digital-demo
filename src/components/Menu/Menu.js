import { Menu, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Menu.css';

const { Header } = Layout;

const CustomMenu = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(['1']);

  useEffect(() => {
    if (props.location.pathname !== props.match.path && props.location.pathname ==='/messages' ) {
      handleClick({ key: '2' })
    }
    if (props.location.pathname !== props.match.path && props.location.pathname === '/') {
      handleClick({ key: '1' })
    }
  }, [props.location.pathname])

  const handleClick = (value) => {
    setSelectedMenu([...value.key]);
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo-container"><span className="logo">SHOP4GOOD</span></div>
        <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selectedMenu} onClick={handleClick} >
          <Menu.Item key="1"><Link to="/">Products</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/messages">Messages</Link></Menu.Item>
          <Menu.Item key="3"><Link to="settings">Settings</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default withRouter(CustomMenu);