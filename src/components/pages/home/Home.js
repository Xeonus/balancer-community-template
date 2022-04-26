import React from "react";
import Grid from '@mui/material/Grid';
import HomeExampleContent from "./HomeExampleContent";

export default function Boost(props) {
    return (
        <div key={"home"} >
            <Grid item xs={12}> 
                <HomeExampleContent/>
            </Grid>
        </div>
    );
}