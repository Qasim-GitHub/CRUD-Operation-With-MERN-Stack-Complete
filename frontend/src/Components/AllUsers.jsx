import styled from "@emotion/styled";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, deluser } from "../Services/api";

const StyledTable = styled(Table)`
width:90%;
margin : 50px auto 0 auto;
`
const Thead = styled(TableRow)`
background-color: black;
& > th{
color:white;
font-size:20px;
text-align:center;
}
`

const Tbody = styled(TableRow)`

& > td{
font-size:20px;
text-align:center;

}
`



function AllUser() {

    const [userdata, setUserdata] = useState([]);


    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        let response = await getUser();
        setUserdata(response.data)
    }

    const deleteUserdetails = async (_id) => {
        await deluser(_id);
        getAllUser()
    }

    return (
        <div>
            <StyledTable>
                <TableHead>
                    <Thead>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell></TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        userdata.map(userdata => (
                            <Tbody key={userdata._id}>
                                <TableCell>{userdata.name}</TableCell>
                                <TableCell>{userdata.email}</TableCell>
                                <TableCell>{userdata.password}</TableCell>
                                <TableCell>{userdata.gender}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/update/${userdata._id}`}>Update</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserdetails(userdata._id)}>Delete</Button>
                                </TableCell>
                            </Tbody>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </div>
    );
}

export default AllUser;