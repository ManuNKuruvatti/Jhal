import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import './userGrid.css';


const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch data from the REST API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to set the selected user when clicking on a row
  const handleRowClick = (params) => {
    const selectedUserData = params.row;
    setSelectedUser(selectedUserData);

    // Fetch user details from the API when a user is selected
    axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUserData.id}`)
      .then((response) => {
        setUserDetails(response.data);
        setOpenDialog(true);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  // Function to close the user details dialog
  const handleCloseDialog = () => {
    setSelectedUser(null);
    setUserDetails(null);
    setOpenDialog(false);
  };

  const columns = [
    {
      field: 'tenant',
      headerName: 'Tenant',
      flex: 1,
      sortable: true,
      valueGetter: () => "GE",
    },
    {
      field: 'name',
      headerName: 'Names',
      flex: 1,
      sortable: true,
      valueGetter: (params) => ` ${params.value}`,
    },
    { field: 'roles', headerName: 'Roles', flex: 1, sortable: true },
    { field: 'id', headerName: 'User ID', flex: 1, sortable: true },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      sortable: true,
      valueGetter: () => "Active",
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      flex: 1,
      sortable: true,
      valueGetter: () => "72d15h",
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      sortable: true,
    },
  ];

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          onRowClick={handleRowClick} // Call handleRowClick when a row is clicked
        />
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedUser ? `${selectedUser.name}'s Details` : ''}</DialogTitle>
        <DialogContent className='userdetails'>
          {userDetails && (
            <div>
              <p>Email: {userDetails.email}</p>
              <p>Name: {userDetails.name}</p>
              <p>Username: {userDetails.username}</p>
              <p>Phone: {userDetails.phone}</p>
            </div>
          )}
          <Button variant="contained" onClick={handleCloseDialog}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserGrid;
