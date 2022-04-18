import React from "react";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink } from "react-router-dom";
//MenuDrawer
export default function MenuDrawer(props) {

    return (
        <div>
            <Box
                sx={{ width: props.anchor === 'top' || props.anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={props.toggleDrawer}
                onKeyDown={props.toggleDrawer}
            >
                <List>
                    <ListItem button key={"Home"} component={NavLink} to={'/boost'}>
                        <ListItemIcon>
                            <RocketLaunchRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>

                    <ListItem button key={"balancerDAO"} component={NavLink} to={'/balancerDAO'}>
                        <ListItemIcon>
                            <CalculateRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Balancer DAO"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={"btools"} onClick={() => window.open('https://balancer.tools/')}>
                        <ListItemIcon>
                            <InsightsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Balancer Tools"} />
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}