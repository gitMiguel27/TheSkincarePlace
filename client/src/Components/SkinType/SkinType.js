import './SkinType.css';
import React from 'react';

function SkinType({ selectedSkintype }) {

    return (
        <div className='SkinType'>
            <h3>Hello from {selectedSkintype.name}!</h3>
        </div>
    );
}

export default SkinType;