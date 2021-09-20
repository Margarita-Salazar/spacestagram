import React, { useState } from "react";
import { Card } from "antd";
import { HeartFilled } from "@ant-design/icons";

const { Meta } = Card;

export default function PhotoCard(props) {
    const { data } = props;
    const [like, setLike] = useState(false);

    const click = () => {
        setLike(!like);
    };

    return (
        <Card
            cover={
                data.media_type === "video" ?
                    <iframe
                        width="800"
                        height="480"
                        src={`${data.url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        sameSite="None"
                    /> :
                    <img
                        src={data.url}
                        alt="NASA's astronomy pic of the day"
                        width="800px"
                    />}
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
            <Meta
                title={data.date}
                description={data.explanation}
            >
            </Meta>
        </Card>
    );
}
