import React, { useState, useEffect, useRef } from "react";
import ComicItemList from "./ComicItemList"
import ComicItemGrid from "./ComicItemGrid"
import { getAllComics } from "../API/comics";
import {Reorder, Apps } from '@material-ui/icons';
import { Button, Box, Grid } from "@material-ui/core";


const ComicContainer = () => {
    const [comic, setComic ] = useState([]);
    const [ mode, setMode ] = useState(true);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        getAllComics()
          .then(response => {
            if (componentIsMounted.current) {
              console.log(response)
              setComic(response.data.results);
            }
          })
          .catch(err => {
            console.log(err);
          });
        return () => {
          componentIsMounted.current = false;
        };
      }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <div style={{ width: '100%' }}>
                    <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                            <p>Latest Issues</p>
                        </Box>
                        <Box p={1}>
                            <Button onClick={() => setMode(true)}>
                                Grid
                                <Apps />
                            </Button>
                            <Button onClick={() => setMode(false)}>
                                List
                                <Reorder />
                            </Button>
                        </Box> 
                    </Box>
                </div>
            </Grid>

            {comic.map((comic,id) => {
                if(mode){
                   return <ComicItemGrid key={id} comic={comic} /> 
                } else{
                    return <ComicItemList key={id} comic={comic} />
                }
                          
             })}
        </Grid>
    )
}
// <IconButton onClick={() =>setMode("")}>
//<Apps /> List
//</IconButton>
/*
<Grid item xs={6} md={4} lg={3} xl={2}>
                            <Box >
                                <ComicItemList key={id} comic={comic} />
                            </Box>
                        </Grid>
                        */

export default ComicContainer;