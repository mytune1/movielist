
import './Cards.css';
import { Card,Col } from 'antd';
const { Meta } = Card;
const style = { padding: '15px 20px 30px' };

export const Cards = (props) => {
    return (
        <Col  xs={12} xl={4} md={6} sm={3} style={style}>
            <Card
                hoverable
                cover={<img alt="example" src={props.imageUrl} alt="" title="" />}
            >
                <Meta title={props.title} />
            </Card>
        </Col>
    )
}