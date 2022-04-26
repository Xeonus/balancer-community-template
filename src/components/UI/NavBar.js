import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, Link, useLocation} from "react-router-dom";
//Navigation bar
export default function NavBar(props) {


    //Obtain actively selcted route
    let location = useLocation();

    const [value, setValue] = React.useState("/home");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log("location", location.pathname.substring(1));
    if (location && location.pathname.substring(1) !== value) {
        setValue(location.pathname.substring(1));
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab color="primary" component={NavLink} to={'/home'} value={"home"} label="home" />
                <Tab component={Link} to={'/notionIntegration'} value={"notionIntegration"} label="Notion" />
                <Tab onClick={() => window.open('https://balancer.tools/')} value={"balancerTools"} label="balancer.tools" />
            </Tabs>
        </div>
    );
}