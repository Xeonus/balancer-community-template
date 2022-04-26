import React from "react";
import Header from "../../UI/Header";
import Grid from '@mui/material/Grid';
import NotionIntegration from "./NotionIntegration";

export default function Notion(props) {
    return (
        <div key={"home"} >
            <Header>Notion Integration Example</Header>
            <Grid item xs={12}> 
                <NotionIntegration/>
            </Grid>
        </div>
    );
}