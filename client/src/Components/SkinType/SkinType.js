// import './SkinType.css';
import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useParams } from 'react-router-dom';

function SkinType({ skintypes }) {
    let { id } = useParams();

    // Fetch skintype using keyword from url
    let skintypeArray = skintypes.filter(skintype => skintype.name.toLowerCase() === id);
    let skintype = skintypeArray[0];

    console.log('skintypeArray', skintypeArray);
    console.log('skintype', skintype);
    console.log(skintype.products);

    return (
        <div className='Skintype'>
            <Grid2 container spacing={2}>
                <Typography>About Your {skintype.name} Skin:</Typography>
                <Typography>{skintype.body}</Typography>
            </Grid2>
        </div>
    );
}

export default SkinType;