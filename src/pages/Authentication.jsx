import React, { useState } from "react";
import LoginForm from "../components/Authentication/LoginForm";
import RegistrationForm from "../components/Authentication/RegistrationForm";
import { Box, Button, Grid, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Authentication = (props) => {
  const [authenticationPageType, setAuthenticationPageType] = useState(1);
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      {authenticationPageType === 1 ? (
        <LoginForm descriptionText="Login" />
      ) : (
        <RegistrationForm descriptionText="Registration" />
      )}
    </ThemeProvider>
  );
};

export default Authentication;
