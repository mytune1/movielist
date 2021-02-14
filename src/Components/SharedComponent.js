import React from "react";
import { Input, Menu, Row, Col, Button, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;
const style = { padding: '20px' };


class CommanHeader extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <>
            <Row style={style}>                
                <Col xs={24} xl={8} md={10} sm={3}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        size="large"
                        onChange={(value) => this.onSearch(value)}
                    />
                </Col>
                <Col xs={24} xl={16} md={14} sm={3} style={{ textAlign: 'right' }}>
                    <Dropdown overlay={<Menu onClick={this.handleMenuClick}>
                        <Menu.Item key="asc" icon={<UserOutlined />}>
                            Accending Order
                    </Menu.Item>
                        <Menu.Item key="desc" icon={<UserOutlined />}>
                            Descending Order
                    </Menu.Item>
                    </Menu>}>
                        <Button>
                            Sort By Name<DownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        </>
        )
    }
}
export default CommanHeader;