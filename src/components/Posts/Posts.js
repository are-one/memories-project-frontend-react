import React from "react";
import { useSelector } from "react-redux";
import { useTheme, ThemeProvider, Grid, CircularProgress } from "@mui/material";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
    const theme = useTheme();
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        <ThemeProvider theme={theme}>
            {!posts.length ? (
                <CircularProgress />
            ) : (
                <Grid
                    container
                    className={classes.mainContainer}
                    alignItems="stretch"
                    spacing={3}
                >
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </ThemeProvider>
    );
};

export default Posts;
