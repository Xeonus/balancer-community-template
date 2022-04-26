import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, Link } from "react-router-dom";
//Navigation bar
export default function NavBar(props) {

    const [value, setValue] = React.useState("home");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab color="primary" component={NavLink} to={'/home'} value={"home"} label="home" />
                <Tab component={Link} to={'/notionIntegration'} value={"notion"} label="Notion" />
                <Tab onClick={() => window.open('https://balancer.tools/')} value={"balancerTools"} label="balancer.tools" />
            </Tabs>
        </div>
    );
}