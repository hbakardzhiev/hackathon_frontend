import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Urgency } from './model/Urgency';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';


// Generate Order Data
function createData(
    id: number,
    problem: String,
    urgency: Urgency,
    location: String,
    availableTime: Date,
    taken: boolean,
    done: boolean) {
    return { id, problem, urgency, location, availableTime, taken, done };
}

const rows = [
    createData(
        0,
        "The room is not ",
        Urgency.urgent,
        "Room1",
        new Date(),
        true,
        true
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Orders() {
    type StateType = { id: number, check: boolean }
    const [taken, setTaken] = React.useState<StateType>();

    const [done, setDone] = React.useState<StateType>();

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Problem</TableCell>
                        <TableCell>urgency</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Task taken</TableCell>
                        <TableCell>Done</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.problem}</TableCell>
                            <TableCell>{row.urgency.toString()}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell><Checkbox checked={row.taken}
                                onChange={(event) => setTaken({ id: row.id, check: event.target.value === "true" })}
                            ></Checkbox></TableCell>
                            <TableCell><Checkbox checked={row.done}
                                onChange={(event) => setDone({ id: row.id, check: event.target.value === "true" })}
                            ></Checkbox></TableCell>

                            <TableCell><Button variant="contained"
                                onClick={(event) => {
                                    axios.post("localhost:5000/taken", taken).
                                        then(function (response) {
                                            console.log(response);
                                        })
                                    axios.post("localhost:5000/api-done", done)
                                        .then(function (response) {
                                            console.log(response);
                                        })
                                }}>Submit</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}