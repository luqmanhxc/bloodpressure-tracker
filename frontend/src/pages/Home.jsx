import { useEffect } from 'react';
import { fetchBps, resetBps } from '../features/bp/bpSlice';
import { useSelector, useDispatch } from 'react-redux';

// components
import BpCard from '../components/BpCard';
import BpForm from '../components/BpForm';

// material ui
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
    const { loading, bps } = useSelector((state) => state.bps);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBps());
    }, []);

    return (
        <Box sx={{ marginTop: 3 }}>
            <BpForm />
            {!loading ? (
                bps.map((bp) => <BpCard key={bp._id} bp={bp} />)
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
};

export default Home;
