import React from "react";
import { connect } from "react-redux";
import UseDataTable from "../components/UserDetails/UseDataTable";
import { Box } from "@mui/material";

const DashBoard = (props) => {
  return (
    <Box sx={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
      <UseDataTable />
    </Box>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
