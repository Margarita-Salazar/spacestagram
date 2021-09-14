import React, { useState } from "react";
import { Card } from "antd";
import { HeartFilled, LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function PhotoCard(props) {
    const { data } = props;
    const [like, setLike] = useState(false);

    const click = () => {
        setLike(!like);
    };

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
        >

            <HeartFilled
                style={{
                    color: like ? "#ff5555" : "#cccccc",
                    marginLeft: "10px",
                    fontSize: "30px"
                }}
                onClick={() => click()}
            />
            <LinkOutlined style={{ fontSize: "30px" }} />
            <Meta
                style={{
                    padding: "20px",
                    fontSize: "14px",
                    lineHeight: 1.8
                }}
                title={data.date}
                description={data.explanation}
            >
            </Meta>
        </Card>
    );
}
