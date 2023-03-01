import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const bpCard = ({ bp: { createdAt, systolic, diastolic, pulserate } }) => {
    // console.log(props);
    return (
        <Paper elevation={3} sx={{ marginTop: 3, padding: 3 }}>
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
            <Typography variant="h6" component="h2">
                Pulse Rate: {pulserate}
            </Typography>
        </Paper>
    );
};

export default bpCard;
