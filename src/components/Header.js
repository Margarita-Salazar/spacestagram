import React from "react";
import { PageHeader } from "antd";

export default function AppHeader() {
    return (
        <PageHeader
            className="App-Header"
            title="Spacestagram"
            subTitle="Brought to by NASA’S Astronomy Picture of the Day API"
        />
    );
}
