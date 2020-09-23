import React, { useState, useEffect, useRef } from "react";
import { getDetailsComic } from "../API/comics";
import { Box, Grid } from "@material-ui/core";
import {useLocation} from "react-router-dom";


const ComicDetails = () =>{
    let { api_detail_url } = useLocation().state
    const [image, setImage ] = useState("");
    const [character, setCharacter] = useState([]);
    const [team, setTeam] = useState([]);
    const [location, setLocation] = useState([]);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        getDetailsComic(api_detail_url)
          .then(response => {
            if (componentIsMounted.current) {
              console.log(response.data.results);
              setImage(response.data.results.image);
              setCharacter(response.data.results.character_credits);
              setTeam(response.data.results.team_credits);
              setLocation(response.data.results.location_credits);
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
        <div>
            <Grid container>
                <Grid item sm={12}>
                    <Box display="flex" flexDirection="row-reverse">
                        <Box textAlign="left" width="40%">
                            <img className ="photoDetail" src={image.original_url} alt="flag"/>
                        </Box>
                        
                        <Box width="60%">
                            <h3>Characters</h3>
                            <Grid item xs={6}>
                                {
                                character
                                    .map(det => {
                                        return <h4>{det.name}</h4>
                                    })
                                }
                            </Grid>
                            <h3>Teams</h3>
                            <Grid item xs={6}>
                                {
                                team
                                    .map(det => {
                                        return <h4>{det.name}</h4>
                                    })
                                }
                            </Grid>
                            <h3>Locations</h3>
                            <Grid item xs={6}>
                                {
                                location
                                    .map(det => {
                                        return <h4>{det.name}</h4>
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>

    )
}
//<img src={detail.image.original_url} alt="flag"/>

export default ComicDetails;