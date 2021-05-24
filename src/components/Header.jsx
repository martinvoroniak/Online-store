import React from 'react';
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    menuTitle: {
        marginRight: theme.spacing(1),
    },
    openMenu: {
        marginLeft: theme.spacing(2),
    },
    menuButton: {
        marginLeft: theme.spacing(12),
    },
}));

const Header = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${selectedIndex}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <AppBar position='fixed'>
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-laabel='menu'
                            className={classes.menuTitle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            Online store
                        </Typography>

                        <Grid container direction='column' alignItems='center'>
                            <Grid item xs={12}>
                                <ButtonGroup
                                    variant='contained'
                                    color='primary'
                                    ref={anchorRef}
                                    aria-label='split button'
                                >
                                    <Button onClick={handleClick}></Button>
                                    <Button
                                        color='primary'
                                        size='small'
                                        aria-controls={
                                            open
                                                ? 'split-button-menu'
                                                : undefined
                                        }
                                        aria-expanded={
                                            open ? 'true' : undefined
                                        }
                                        aria-label='select merge strategy'
                                        aria-haspopup='menu'
                                        onClick={handleToggle}
                                    >
                                        <ArrowDropDownIcon />
                                    </Button>
                                </ButtonGroup>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom'
                                                        ? 'center top'
                                                        : 'center bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener
                                                    onClickAway={handleClose}
                                                >
                                                    <MenuList id='split-button-menu'></MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Grid>
                        </Grid>
                        <Button
                            className={classes.menuButton}
                            color='default'
                            variant='contained'
                        >
                            Корзина
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
