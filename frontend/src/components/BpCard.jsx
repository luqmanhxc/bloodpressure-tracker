import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { checkBp } from '../utils/utils';

const bpCard = ({ bp: { createdAt, systolic, diastolic, pulserate } }) => {
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
                sx={{ position: 'absolute', top: 20, right: 20 }}
            />
        </Paper>
    );
};

export default bpCard;
