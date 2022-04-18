import React from "react";
import { Button} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
//Navigation bar
export default function NavBar(props) {

    //Obtain actively selcted route
    const location = useLocation();

    return (
        <div>
            <Button color="primary" className={location.pathname === '/home' ? props.classes.navButton : null} component={NavLink} to={'/home'}>Home</Button>
            <Button color="primary" className={location.pathname === '/balancerDAO' ? props.classes.navButton : null} component={NavLink} to={'/balancerDAO'}>Balancer DAO</Button>
            <Button color= "primary" onClick={() => window.open('https://balancer.tools/')}>balancer.tools</Button>
            
        </div>
    );
}