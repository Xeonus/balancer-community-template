import React from "react";
import Grid from '@mui/material/Grid';
import ControlledAccordions from "./ControlledAccordions";
import ExampleTable from "./ExampleTable";
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Header from "../../UI/Header";


export default function MUIExamples(props) {
    return (
        <div key={"home"} >
            <Box mb={2}>
            <Grid item xs={12}> 
            <Paper elevation={3}>
            <Header>This is a table</Header>
            <Box p={1}>
                <ExampleTable/>
                </Box>
                </Paper>
            </Grid>
            </Box>
            <Grid item xs={12}> 
            <Paper elevation={3}>
            <Header>This is an Accordion</Header>
                <ControlledAccordions/>
                </Paper>
            </Grid>
        </div>
    );
}