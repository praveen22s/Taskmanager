import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
    editable: true,
  },
  {
    field: "hierarchy",
    headerName: "Designation",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Password",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "E-mail",
    type: "number",
    width: 210,
    editable: true,
  },
  {
    field: "number",
    headerName: "Mobile Number",
    type: "number",
    width: 210,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    department: "Civil",
    hierarchy: "HOD",
    Name: "Bob",
    age: 19,
    email: "email1@gmail.com",
    number: "123702160797",
  },
  {
    id: 2,
    department: "ECE",
    hierarchy: "Dean",
    Name: "Grace",
    age: 29,
    email: "email2@gmail.com",
    number: "123152043932",
  },
  {
    id: 3,
    department: "CSE(Cyb.sec)",
    hierarchy: "HOD",
    Name: "Charlie",
    age: 33,
    email: "email3@gmail.com",
    number: "123921111188",
  },
  {
    id: 4,
    department: "CSE",
    hierarchy: "Dean",
    Name: "Frank",
    age: 32,
    email: "email4@gmail.com",
    number: "123998003963",
  },
  {
    id: 5,
    department: "CSE",
    hierarchy: "HOD",
    Name: "Alice",
    age: 33,
    email: "email5@gmail.com",
    number: "123143428219",
  },
  {
    id: 6,
    department: "CSE(IOT)",
    hierarchy: "Dean",
    Name: "Emily",
    age: 22,
    email: "email6@gmail.com",
    number: "123343650262",
  },
  {
    id: 7,
    department: "AI&DS",
    hierarchy: "HOD",
    Name: "Bob",
    age: 26,
    email: "email7@gmail.com",
    number: "123603007743",
  },
  {
    id: 8,
    department: "Mech",
    hierarchy: "Principal",
    Name: "David",
    age: 20,
    email: "email8@gmail.com",
    number: "123541795059",
  },
  {
    id: 9,
    department: "CSE(IOT)",
    hierarchy: "Faculty",
    Name: "Alice",
    age: 32,
    email: "email9@gmail.com",
    number: "123001858576",
  },
  {
    id: 10,
    department: "CSE(AI&ML)",
    hierarchy: "HOD",
    Name: "Charlie",
    age: 31,
    email: "email10@gmail.com",
    number: "123141802467",
  },
  {
    id: 11,
    department: "CSE",
    hierarchy: "HOD",
    Name: "Bob",
    age: 32,
    email: "email11@gmail.com",
    number: "123654765788",
  },
  {
    id: 12,
    department: "ECE",
    hierarchy: "HOD",
    Name: "David",
    age: 29,
    email: "email12@gmail.com",
    number: "123980854693",
  },
  {
    id: 13,
    department: "EEE",
    hierarchy: "Dean",
    Name: "Grace",
    age: 23,
    email: "email13@gmail.com",
    number: "123309055397",
  },
  {
    id: 14,
    department: "CSE(AI&ML)",
    hierarchy: "Faculty",
    Name: "Isabel",
    age: 34,
    email: "email14@gmail.com",
    number: "123847329493",
  },
  {
    id: 15,
    department: "ECE",
    hierarchy: "Principal",
    Name: "Frank",
    age: 22,
    email: "email15@gmail.com",
    number: "123478435194",
  },
  {
    id: 16,
    department: "IT",
    hierarchy: "Faculty",
    Name: "David",
    age: 31,
    email: "email16@gmail.com",
    number: "123928862271",
  },
  {
    id: 17,
    department: "CSE(AI&ML)",
    hierarchy: "Principal",
    Name: "Bob",
    age: 23,
    email: "email17@gmail.com",
    number: "123353051875",
  },
  {
    id: 18,
    department: "CSE",
    hierarchy: "Principal",
    Name: "Grace",
    age: 23,
    email: "email18@gmail.com",
    number: "123833335616",
  },
  {
    id: 19,
    department: "CSE(AI&ML)",
    hierarchy: "HOD",
    Name: "Jack",
    age: 29,
    email: "email19@gmail.com",
    number: "123891554011",
  },
  {
    id: 20,
    department: "CSE(IOT)",
    hierarchy: "Faculty",
    Name: "Frank",
    age: 21,
    email: "email20@gmail.com",
    number: "123145196232",
  },
];

 function User() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
export default User;
