import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardMedia, Paper, Typography } from '@mui/material';

function Recommended({ skintypes }) {
    return (
        <div className="Recommended">
            <Grid2 container display="flex" justifyContent="center" alignItems="center">
            {
                skintypes.map(skintype => {
                    return (
                        <Grid2 container xs={12} my={5} mx={3} key={skintype.name}>
                            <Grid2 item xs={12} mb={3} ml={3}>
                                <Typography variant='h5' sx={{ textDecoration: 'underline' }} >
                                    Recommend For {skintype.name} Skin:
                                </Typography>
                            </Grid2>
                            {
                                skintype.products.map(product => {
                                    return (
                                        <Grid2 container md={3} mb={3} ml={3} key={product.name}>
                                            <Grid2 item xs={12}>
                                                <Paper elevation={5} sx={{ backgroundColor: (theme) => "primary.main" }}>
                                                    <Grid2 container xs={12} className='product-card-container'>
                                                        <Grid2 item xs={6} display="flex" justifyContent="left" alignItems="center">
                                                            <Card sx={{ width: 345 }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="200"
                                                                    image={product.image}
                                                                    alt={product.name}
                                                                />
                                                            </Card>
                                                        </Grid2>
                                                        <Grid2 container xs={6} display="flex" justifyContent="center" alignItems="center">
                                                            <Grid2 item xs={12}>
                                                                <Typography textAlign="center" sx={{ color: "white" }}>
                                                                    {product.concern}
                                                                </Typography>
                                                            </Grid2>
                                                            <Grid2 item xs={12}>
                                                                <Typography textAlign="center" sx={{ color: "white" }}>
                                                                    {product.company}
                                                                </Typography>
                                                                <Typography textAlign="center" sx={{ color: "white" }}>
                                                                    {product.name}
                                                                </Typography>
                                                                <Typography textAlign="center" sx={{ color: "white" }}>
                                                                    ${product.price}
                                                                </Typography>
                                                                <Typography textAlign="center" sx={{ color: "white" }}>
                                                                    <a href={product.link} target="_blank" rel="noopener noreferrer">Click Here</a>
                                                                </Typography>
                                                            </Grid2>
                                                        </Grid2>
                                                    </Grid2>
                                                </Paper>
                                            </Grid2>
                                        </Grid2>
                                    )
                                })
                            }
                        </Grid2>
                    )
                })
            }
            </Grid2>
        </div>
    );
};

export default Recommended;