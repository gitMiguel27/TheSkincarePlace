import React from "react";
import './Footer.css';
import { Box, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';


function Footer() {
    return (
        <footer>
            <Box>
                <Container maxWidth='lg'>
                    <Grid2 container spacing={5}>
                        <Grid2 item x={12} sm={4}>
                            <Box>
                                <Typography variant="h5">
                                    Contact
                                </Typography>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </footer>
    )
};

export default Footer;