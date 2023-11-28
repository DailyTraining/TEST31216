import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import userDetails from "../.././API/sampleData";
import { loadUsers, addUser, updateUser, deleteUser } from "../../API/thunks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UseDataTable = ({
  username,
  startLoadingUserDetails,
  users,
  isLoading,
  addUserClicked,
  updateUserClicked,
  deleteClicked
}) => {
  useEffect(() => {
    startLoadingUserDetails();
  }, []);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false); // State to control the popup
  const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user data
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedAge, setEditedAge] = useState("");

  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditClick = (user ) => {
    setSelectedUser(user);
    setEditedName(user.username);
    setEditedEmail(user.email);
    setEditedAge(user.age);
    setOpen(true);
  };

  const handleDeleteClick = (user ) => {
    deleteClicked(user);
  };

  const handlePopupClose = () => {
    setOpen(false);
  };

  const createUserDetailsList = {
    username: editedName,
    email: editedEmail,
    firstName: "string4",
    lastName: "string4",
    age: editedAge,
  };

  const UdpatedUserDetailsList = {
    id: selectedUser !== null ? selectedUser.id : 0,
    username: editedName,
    email: editedEmail,
    firstName: "string4",
    lastName: "string4",
    age: editedAge,    
    createdAt: selectedUser !== null ? selectedUser.createdAt : new Date()
  };

  const handleSaveClick = (e) => {
    if (selectedUser) updateUserClicked(UdpatedUserDetailsList);
    else addUserClicked(createUserDetailsList);
    setOpen(false);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const paginatedData = users.slice(startIndex, endIndex);

  const loadingMessage = "Loading...";
  return (
    <div>
      {isLoading ? <h1>{loadingMessage}</h1> : null}
      <h1>User details</h1>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>
      <Table style={{ borderCollapse: "collapse" }}>
        <TableHead style={{ backgroundColor: "#2196f3" }}>
          <TableRow>
            <TableCell style={{ border: "1px solid white", color: "white" }}>
              Name
            </TableCell>
            <TableCell style={{ border: "1px solid white", color: "white" }}>
              Email
            </TableCell>
            <TableCell style={{ border: "1px solid white", color: "white" }}>
              Age
            </TableCell>
            <TableCell style={{ border: "1px solid white", color: "white" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((details) => (
            <TableRow key={details.id}>
              <TableCell style={{ border: "1px solid black" }}>
                {details.username}
              </TableCell>
              <TableCell style={{ border: "1px solid black" }}>
                {details.email}
              </TableCell>
              <TableCell style={{ border: "1px solid black" }}>
                {details.age}
              </TableCell>
              <TableCell style={{ border: "1px solid black" }}>
                <IconButton onClick={() => handleEditClick(details)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteClick(details)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(users.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />

      {/* Popup for editing user data */}
      <Dialog open={open} onClose={handlePopupClose}>
        <DialogTitle>Edit User Data</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px", marginTop: "10px" }} // Add margin bottom
          />
          <TextField
            label="Email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }} // Add margin bottom
          />
          <TextField
            label="Age"
            value={editedAge}
            onChange={(e) => setEditedAge(e.target.value)}
            fullWidth
            style={{ marginBottom: "10px" }} // Add margin bottom
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose}>Cancel</Button>
          <Button color="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  isLoading: state.userReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingUserDetails: () => dispatch(loadUsers()),
  addUserClicked: (user) => dispatch(addUser(user)),
  updateUserClicked: (user) => dispatch(updateUser(user)),
  deleteClicked: (user) => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UseDataTable);
