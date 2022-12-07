import './Expanded.css';
import React from "react";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Expanded({ skintypes }) {
    
    return (
        <div className="Expanded" id='Expanded'>
            <div className='expanded-content-container'>
                <Typography variant='h3' mt={5} mb={10}>Choose Your Skin Type:</Typography>

                {
                    skintypes.map(skintype => {
                    return <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }} key={skintype.id}>
                            <Link to={skintype.name} className='skin-type-links' >{skintype.name}</Link>
                        </Typography>
                    })
                }

                <Typography variant='h7' mt={10} mb={1}>
                    Don't know your skin type?
                </Typography>
                <Typography variant='h7' mb={1}>
                    <a href='https://www.wikihow.com/Determine-Your-Skin-Type' target="_blank" rel="noopener noreferrer">Click Here</a>
                </Typography>

                <Typography variant='h7' mb={1}>
                    Have an account?
                </Typography>
                <Typography variant='h7' mb={5}>
                    <Link to="login">Log-In</Link>
                </Typography>
                
            </div>
        </div>
    )
};

export default Expanded;