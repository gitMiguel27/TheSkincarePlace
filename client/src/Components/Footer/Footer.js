import React from "react";
// import './Footer.css';
import { Box, Container, Link } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';

function Footer() {
    return (
        <footer>
            <Box px={{ xs: 1, sm:3 }} py={{ xs:5, sm:5 }} bgcolor="#210f08" color="white">
                <Container maxWidth='lg'>
                    <Grid2 container spacing={5} justifyContent="space-between" >
                        <Grid2 item xs={12} sm={4}>
                            <Box borderBottom={0.5}>CONTACT</Box>
                            <Box>
                                <Link href="https://www.linkedin.com/in/miguel-nazario/" target="_blank" rel="noopener noreferrer" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    LinkedIn&nbsp;
                                    <LinkedInIcon/>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://github.com/gitMiguel27" target="_blank" rel="noopener noreferrer" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    GitHub&nbsp;
                                    <GitHubIcon/>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.hackerrank.com/mnazario35" target="_blank" rel="noopener noreferrer" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    HackerRank&nbsp;
                                    <LaptopIcon/>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://medium.com/@mnazario35" target="_blank" rel="noopener noreferrer" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    Blog&nbsp;
                                    <HdrStrongIcon/>
                                </Link>
                            </Box>
                        </Grid2>
                        <Grid2 item xs={12} sm={4}>
                            <Box borderBottom={0.5} >ACCOUNT</Box>
                            <Box>
                                <Link href="/" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" display="flex" sx={{ textDecoration: "none" }} >
                                    Sign Up
                                </Link>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </footer>
    )
};

export default Footer;