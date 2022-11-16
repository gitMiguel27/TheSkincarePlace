// import './SkinType.css';
import React from 'react';
import { Typography } from '@mui/material';

function SkinType({ selectedSkintype }) {

    // Fetch skintype using keyword from url

    return (
        <div className='Skintype'>
            <Typography>Hello from {selectedSkintype.name}!</Typography>
            <Typography>{selectedSkintype.body}</Typography>
        </div>
    );
}

export default SkinType;