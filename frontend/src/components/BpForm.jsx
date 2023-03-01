import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBp } from '../features/bp/bpSlice';

// material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BpForm = () => {
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [pulserate, setPulserate] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bp = { systolic, diastolic, pulserate };

        try {
            const response = await axios.post(
                'http://localhost:4000/api/bps',
                bp
            );

            const created = response.data.createdAt;

            if (response.status) {
                setSystolic('');
                setDiastolic('');
                setPulserate('');
                setError(null);
                console.log('New bp added', response.data);
                dispatch(addBp(response.data));
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="systolic"
                label="Systolic"
                variant="outlined"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
            />
            <TextField
                id="diastolic"
                label="Diastolic"
                variant="outlined"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
            />
            <TextField
                id="pulserate"
                label="Pulse Rate"
                variant="outlined"
                value={pulserate}
                onChange={(e) => setPulserate(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
                Add BP
            </Button>
        </Box>
    );
};

export default BpForm;
