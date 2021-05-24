import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBotton: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
}))


const Main = () => {

    const classes = useStyles();

    return (
        <>
            <div>
                <main>
                    <Paper className={classes.mainFeaturesPost}
                           style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                        <Container fixed>

                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturesPostContent}>
                                        <Typography
                                            component='h1'
                                            variant='h3'
                                            color='inherit'
                                            gutterButton
                                        >
                                            Online store
                                        </Typography>
                                        <Typography
                                            component='h5'
                                            color='inherit'
                                            paragraph
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Accusamus atque consequatur culpa delectus eius fugit molestiae nisi non
                                            numquam perspiciatis quisquam, reprehenderit, soluta voluptatem?
                                            Eum exercitationem quia similique. Ducimus, odio?
                                        </Typography>
                                        <Button variant='contained' color='secondary'>
                                            Learn more
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                </main>
            </div>
        </>
    );
};

export default Main;