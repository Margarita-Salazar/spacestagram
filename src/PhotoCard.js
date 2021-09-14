import React from "react";
import { Card } from "antd";
import { HeartFilled, LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function PhotoCard(props) {
    const { data, like, click } = props;

    return (
        <Card
            cover={<img src={data.url} alt="NASA's " />}
            title={data.title}
            extra={data.copyright}
        >
            <HeartFilled
                style={{ color: like ? "#ff5555" : "#cccccc" }}
                onClick={() => click()}
            />
            <LinkOutlined />
            <Meta
                title={data.date}
                description={data.explanation}
            />
        </Card>
    );
}
