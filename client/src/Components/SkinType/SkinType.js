import './SkinType.css';
import React from 'react';
import { Card, CardMedia, Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useParams } from 'react-router-dom';
import GoToTop from '../GoToTop';

function SkinType({ skintypes }) {
    let { id } = useParams();

    // Fetch skintype using keyword from url
    let skintype = skintypes.find(skintype => skintype.name === id);
    let products = skintype.products

    console.log('skintype', skintype);
    console.log('skintype products', products);

    return (
        <div className='skin-type'>
            <Grid2 container rowSpacing={2} columnSpacing={2} display="flex" justifyContent="center" alignItems="center" >
                <Grid2 container columnSpacing={4} display="flex" justifyContent="center" alignItems="center" className="grid-container1">
                    <Grid2 container spacing={4} xs={8} display="flex" justifyContent="center" alignItems="center" pl={15}>
                        <Grid2 item xs={12}>
                            <Typography>About Your {skintype.name} Skin:</Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography>{skintype.body}</Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 container md={4} className='skintype-image-container'>
                        <Grid2 item xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={skintype.image}
                                    alt={skintype.name}
                                />
                            </Card>
                        </Grid2>
                    </Grid2>
                </Grid2>

                <Grid2 container xs={8} md={12} mt={8} mb={8} display="flex" justifyContent="center" alignItems="center" className="grid-container2" >
                    {products.map(product => {
                        return (
                            <Grid2 container md={3} mb={3} key={product.name}>
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
                                                        <br/>
                                                        {product.name}
                                                        <br/>
                                                        ${product.price}
                                                    </Typography>
                                                </Grid2>

                                                {/* <Typography textAlign="center" sx={{ color: "white" }}>
                                                    {product.concern}
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    {product.company}
                                                    <br/>
                                                    {product.name}
                                                    <br/>
                                                    ${product.price}
                                                </Typography> */}
                                            </Grid2>
                                        </Grid2>
                                    </Paper>
                                </Grid2>
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Grid2>
            <GoToTop />
        </div>
    );
}

export default SkinType;