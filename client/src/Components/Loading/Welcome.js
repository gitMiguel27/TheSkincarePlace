import './Welcome.css';
import React, { useEffect, useState } from "react";
import { Collapse, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from "react-scroll";

function Welcome() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className='Welcome'>
            <Collapse
                in={checked}
                { ... (checked ? { timeout: 1000 } : {} )}
                collapsedHeight={50}
            >
                <div className='container'>
                    <Typography variant='h3' className="title">Welcome to <br/> The Skincare Place!</Typography>
                    <Scroll to='Expanded' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className='expand'/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
      </div>
    )
}

export default Welcome;