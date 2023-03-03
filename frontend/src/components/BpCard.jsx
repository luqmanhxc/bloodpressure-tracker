import { checkBp } from '../utils/utils';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBp } from '../features/bp/bpSlice';

// material ui
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const bpCard = ({ bp: { _id, createdAt, systolic, diastolic, pulserate } }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        const response = await axios.delete(
            `http://localhost:4000/api/bps/${_id}`
        );
        if (response.status) {
            dispatch(removeBp(_id));
        }
    };
    return (
        <Paper
            elevation={3}
            sx={{ marginTop: 3, padding: 3, position: 'relative' }}
        >
            <Typography variant="overline" gutterBottom>
                {createdAt}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Upper reading
                <Typography component="span"> (systolic)</Typography>:{' '}
                {systolic}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Lower reading
                <Typography component="span"> (diastolic)</Typography>:{' '}
                {diastolic}
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                Pulse Rate: {pulserate}
            </Typography>
            <Typography variant="h5" component="h3">
                Your blood pressure is {checkBp(systolic, diastolic)}
            </Typography>
            <DeleteIcon
                color="error"
                sx={{
                    fontSize: '2rem',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    cursor: 'pointer',
                    '&:hover': {
                        fontSize: '2.1rem',
                    },
                }}
                onClick={handleClick}
            />
        </Paper>
    );
};

export default bpCard;
