import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../../API/api";
import { connect } from "react-redux";
import { loginSuccess } from "../../Redux/Actions/AuthenticationAction";

const LoginForm = ({ onSubmitePressed }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formDataBuilder = {
    username,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataBuilder);
    const result = loginUser(formDataBuilder);
    if (result.success) {
      localStorage.setItem("username", username); // Store username in local storage
      localStorage.setItem("isAuthenticated", true); // Store username in local storage
      onSubmitePressed(username);
      window.location.href = "/dashboard";
    } else {
      alert(result.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form name="loginFormContainer" onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
        <Typography>Login Form</Typography> {/* Add forum heading */}
          <Grid item xs={12}>
            <TextField
              required
              label="User name"
              value={username}
              onChange={handleUsernameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitePressed: (loginUser) => dispatch(loginSuccess(loginUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
