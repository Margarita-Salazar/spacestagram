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
            title={data.title}
        >

            <HeartFilled
                className="card-svg"
                style={{
                    color: like ? "#ff5555" : "#cccccc",
                    marginLeft: "10px",
                }}
                onClick={() => click()}
            />
            <LinkOutlined className="card-svg" />
            <Meta
                title={data.date}
                description={data.explanation}
            >
            </Meta>
        </Card>
    );
}
