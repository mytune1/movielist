import React from 'react';
import './index.css'
import { Menu,Button } from 'antd';

class HeaderLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header-section">
            <div className="logo" >
            <h3>Demo Streaming</h3>
            </div>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Log In</Menu.Item>
              <Menu.Item key="2"><Button>Start Your Free Trial</Button></Menu.Item>
            </Menu>
            </div>
        )
    }
}

export default HeaderLayout;