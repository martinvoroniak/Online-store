import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
}));

const ProductBlock = ({
    id,
    name,
    imageUrl,
    price,
    types,
    sizes,
    onClickAddProduct,
    addedCount,
}) => {
    const availableTypes = ['в наявності', 'немає'];
    const availableSizes = [20, 30, 40];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    };

    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    const onAddProduct = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType],
        };
        onClickAddProduct(obj);
    };

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    <Grid xs={12} sm={6} md={4}>
                        <Card className={classes.cardGrid}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={imageUrl}
                                title='image title'
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant='h6' gutterBottom>
                                    {name}
                                </Typography>
                                <Typography>
                                    {availableTypes.map((type, index) => (
                                        <li
                                            key={type}
                                            onClick={() => onSelectType(index)}
                                        >
                                            {type}
                                        </li>
                                    ))}
                                </Typography>
                                <Typography>
                                    {availableSizes.map((size, index) => (
                                        <li
                                            key={size}
                                            onClick={() => onSelectSize(index)}
                                        >
                                            {size}
                                        </li>
                                    ))}
                                </Typography>
                                <Typography>{price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Добавити
                                </Button>
                                <Button size='small' color='primary'>
                                    Деталі
                                </Button>

                                <LayerIcon />
                                <PlayCircleFilledIcon />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

ProductBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

ProductBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default ProductBlock;
