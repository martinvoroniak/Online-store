import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        flexGrow: 1
    },
    mainButtons: {
        flexGrow: 1
    }
}));

const ProductCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContent}>
            <Container maxWidth='sm'>
                <Typography variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom
                >
                    Online store
                </Typography>
                <Typography variant='h5'
                            align='center'
                            color='textSecondary'
                            paragraph
                >
                    Тут має бути опис продукту
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container spacing={5} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>Дабавити в корзину?</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='primary'>Повернутись назад</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default ProductCard;