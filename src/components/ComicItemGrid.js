import React from "react";
import { Box, Grid } from "@material-ui/core";
import {Link} from "react-router-dom";


const ComicItemGrid = ({comic}) => {
    return (
        <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box textAlign="center">
                <Link to={{pathname: "/details",
                           state: {
                                api_detail_url: comic.api_detail_url
                           }
                           }}>
                    <img className="photo" src={comic.image.original_url} alt="flag" />
                </Link>
                <h5>{comic.name}#{comic.issue_number}</h5>
                <p>{new Intl.DateTimeFormat('en-US',{
                    month: "long",
                    day: "2-digit",
                    year: "numeric"
                    }).format(new Date(comic.date_added))}
                </p>
            </Box>
        </Grid>
    )
}

export default ComicItemGrid;