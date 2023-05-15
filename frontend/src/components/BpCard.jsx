import { checkBp } from '../utils/utils';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBp } from '../features/bp/bpSlice';
import { formatRelative, subDays } from 'date-fns';

// material ui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import Slide from '@mui/material/Slide';

const bpCard = ({ bp: { _id, createdAt, systolic, diastolic, pulserate } }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        const response = await axios.delete(
            `https://bloodpressure-tracker-api.onrender.com/api/bps/${_id}`
        );
        if (response.status) {
            dispatch(removeBp(_id));
        }
    };
    return (
        <Slide
            in
            direction="right"
            timeout={1500}
            easing="cubic-bezier(.08,.82,.17,1)"
        >
            <Paper
                elevation={3}
                sx={{
                    marginTop: 3,
                    padding: 3,
                    position: 'relative',
                    borderRadius: 2,
                }}
            >
                <Typography variant="overline" gutterBottom>
                    {formatRelative(
                        subDays(new Date(createdAt), 0),
                        new Date(),
                        {
                            addSuffix: true,
                        }
                    )}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h3"
                    sx={{
                        fontSize: '1rem',
                        marginBottom: 1,
                    }}
                >
                    Blood Pressure
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    {systolic}/{diastolic}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="h3"
                    sx={{
                        fontSize: '1rem',
                        marginBottom: 1,
                    }}
                >
                    Pulse Rate
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 3,
                    }}
                >
                    <MonitorHeartIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6" component="h2">
                        {pulserate} BPM
                    </Typography>
                </Box>
                <Typography variant="body2" component="h3">
                    {checkBp(systolic, diastolic)}
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
        </Slide>
    );
};

export default bpCard;
