import './Expanded.css';
import React from "react";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';


function Expanded({ skintypes }) {
    
    return (
        <div className="Expanded" id='Expanded'>
            <Typography variant='h5'>Choose Your Skin Type:</Typography>
            {
                skintypes.map(skintype => {
                return <Link to={skintype.name} key={skintype.id} >{skintype.name}
                    </Link>
                })
            }
            <br/>
            <Typography>Don't know your skin type?
                <a href='https://www.wikihow.com/Determine-Your-Skin-Type' target="_blank" rel="noopener noreferrer">Click Here</a>
            </Typography>

            <Typography>Have an account?
                Log-In
            </Typography>
        </div>
    )
};

export default Expanded;