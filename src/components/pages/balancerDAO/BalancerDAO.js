import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import { NotionRenderer } from 'react-notion'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";


export default function HerokuStatus(props) {

    const [loading, setLoading] = useState(false);
    const [jsonData, setJsonData] = useState("");

    //Fetch Balancer Front-End Json containing incentives data:
    useEffect(() => {
        const url = "https://notion-api.splitbee.io/v1/page/Balancer-DAO-Super-Hub-7428019d324241669194060e57875815";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setJsonData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [setLoading]);

    
    if (loading) return (
        <div>
            <Grid>
                <Box>
                    <CircularProgress></CircularProgress>
                    <Typography noWrap={false} variant="subtitle1" color="textSecondary" component="span">Loading {props.network.name} Notion page...</Typography>
                </Box>
            </Grid>
        </div>);
    if (jsonData) {
        return (
            <NotionRenderer blockMap={jsonData} ></NotionRenderer>
        );
    } else {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Could not read Notion data
            </Alert>
        );

    }
}