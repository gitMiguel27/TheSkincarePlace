// import './SkinType.css';
import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useParams } from 'react-router-dom';

function SkinType({ skintypes }) {
    let { id } = useParams();

    // Fetch skintype using keyword from url
    let skintype = skintypes.find(skintype => skintype.name === id);

    console.log('skintype', skintype);
    console.log('skintype products', skintype.products);

    return (
        <div className='skin-type'>
            <Grid2 container spacing={2}>
                <Typography>About Your {skintype.name} Skin:</Typography>
                <Typography>{skintype.body}</Typography>
            </Grid2>
        </div>
    );
}

export default SkinType;