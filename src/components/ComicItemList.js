import React from "react";
import "./ComicItem.css";
import { Box, Grid, } from "@material-ui/core";
import {Link} from "react-router-dom";

const ComicItemList = ({comic}) => {
    return (
            <Grid  item sm={12}>
                <Box display="flex" className="box" borderColor="grey.500" ml={10} mr={3} pb={1} pt={1}>
                    <Box>
                        <Link to="/details">
                            <img className="photo" src={comic.image.original_url} alt=" flag" />
                        </Link>
                    </Box>
                    <Box textAlign="center" width="75%">
                    <h4>{comic.name}#{comic.issue_number}</h4>
                        <p>{new Intl.DateTimeFormat('en-US',{
                            month: "long",
                            day: "2-digit",
                            year: "numeric"
                            }).format(new Date(comic.date_added))}
                        </p>
                    </Box>
                </Box>               
            </Grid>
    )
}

export default ComicItemList;

/*
<Grid item xs={6} md={4} lg={3} xl={2}>
                            <Box >
                                <ComicItemList key={id} comic={comic} />
                            </Box>
                        </Grid>

            <Box xs={8}>
                <h4>{comic.name}#{comic.issue_number}</h4>
                <p>{new Intl.DateTimeFormat('en-US',{
                    month: "long",
                    day: "2-digit",
                    year: "numeric"
                    }).format(new Date(comic.date_added))}</p>
            </Box>          
                        */