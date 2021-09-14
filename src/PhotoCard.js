import React from "react";
import { Card } from "antd";
import { HeartFilled, LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function PhotoCard(props) {
    const { data, like, click } = props;

    return (
        <Card
            cover={<img src={data.url} alt="NASA's " width="800px" />}
            style={{
                margin: "5% auto",
                border: "1px solid lightgray",
                borderRadius: "5px",
                width: "100 %"
            }}
            title={data.title}
            extra={data.copyright}
        >

            <HeartFilled
                style={{
                    color: like ? "#ff5555" : "#cccccc",
                    marginLeft: "10px",
                }}
                onClick={() => click()}
            />
            <LinkOutlined />
            <Meta
                style={{ padding: "20px" }}
                title={data.date}
                description={data.explanation}
            />
        </Card>
    );
}
