import { useEffect } from 'react';
import { fetchBps, resetBps } from '../features/bp/bpSlice';
import { useSelector, useDispatch } from 'react-redux';

// components
import BpCard from '../components/BpCard';

// material ui
import Box from '@mui/material/Box';

const Home = () => {
    const { loading, bps } = useSelector((state) => state.bps);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBps());
    }, []);
    return (
        <Box sx={{ marginTop: 3 }}>
            {!loading ? (
                bps.map((bp) => <BpCard key={bp._id} bp={bp} />)
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
};

export default Home;
