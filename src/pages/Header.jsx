import { AppBar, Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/AuthenticationAction";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("isAuthenticated");
        window.location.href = "/dashboard";
    };

    const isAuthenticated = useSelector(
        (state) => state.authenticationReducer.isAuthenticated
    );

    const userName = localStorage.getItem("username"); // Get username from local storage

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">My App</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {isAuthenticated && (
                        <>
                            <Typography>{userName}</Typography>
                            <Divider orientation="vertical" sx={{ mx: 1 }} />
                            <Button
                                color="inherit"
                                onClick={handleLogout}
                                startIcon={<LogoutIcon />}
                                title="Logout"
                            >
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    username: state.authenticationReducer.user,
});

export default connect(mapStateToProps)(Header);
