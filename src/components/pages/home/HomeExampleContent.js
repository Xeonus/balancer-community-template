import React from "react";
import Header from "../../UI/Header";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import BalancerDAOLogo from './../../../resources/balancerDAOGif.gif'
import Typography from "@mui/material/Typography";

export default function HomeExampleContent(props) {
    return (
        <div key="homeExampleContent" >
            <Grid item xs={12}>
                <Header>Balancer DAO</Header>
                <Box >
                    <img src={BalancerDAOLogo} alt="veBAL Logo" width="120" />
                </Box>
                <Paper elevation={3}>
                    <Box p={1}>
                        <Box mb={1}>
                            <Typography variant="h5">What is the Balancer DAO? </Typography>
                        </Box>
                        <Typography component={'div'}>
                            BalancerDAO is the community surrounding the development of the Balancer Protocol. We believe there is value in having the community co-decide the vision and future of Balancer protocol.
                            You can think of the Balancer Community in the concept of circles.
                        </Typography>
                    </Box>
                    <Box p={1} alignItems="left">
                        <Box mb={1}>
                            <Typography variant="h5">What is the Balancer DAO? </Typography>
                        </Box>
                        <Typography component={'div'} align='left'>
                            <ul>
                                <li>BalancerDAO is a group of enthusiastic global contributors. The community is made up of individuals who are interested in, interact with, and care about the future and success of the Protocol.</li>
                                <li> Balancer Governance is the heart and brain of Balancer Protocol. Anyone who holds a BAL token becomes part of the Balancer Governance.</li>
                                <li>Everyone contributes to building the community and we are all responsible for creating a safe, energized and inclusive environment. We are driven by our passion for DeFi and Balancer Protocol. With respect to privacy, all members have the freedom to participate in the form they prefer, allowing for the opportunity to maintain their anonymity.</li>
                                <li>Ballers are the mentors of the community, they are responsible for supporting new members in any way they can.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Box p={1} alignItems="left">
                        <Box mb={1}>
                            <Typography variant="h5">How does the DAO work? </Typography>
                        </Box>
                        <Typography component={'div'}>
                        Community memebers activity manage the following responsibilities:
                        </Typography>
                        <Typography component={'div'} align='left'>
                            <ul>
                                <li>Community engagement, collaboration, communication</li>
                                <li>Evaluating and allocating Balancer Grants</li>
                                <li>Treasury management </li>
                                <li>Coordinating funds and resources, including creating/eliminating working groups as needed by the community</li>
                                <li>Initiating and supporting partnerships with other DAOs/Platforms</li>
                                <li>Mentoring and supporting new community contributors</li>
                            </ul>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </div>
    );
}