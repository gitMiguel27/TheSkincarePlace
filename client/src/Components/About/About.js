import React from "react";
import './About.css';
import { Divider, Typography } from '@mui/material';

function About() {
    return (
        <div className="About">
            <Typography variant="h5" mb={3} sx={{ textDecoration: 'underline' }} >
                About The Skincare Place:
            </Typography>
            <Typography variant="body1" mx={5} mb={3}>
                The Skincare Place was created to help people starting their skincare journeys as well as those who
                simply want to look for a new product to use. My skincare journey first started when my friend and I were having a spa night and doing face masks. I remember watching YouTube videos of some of her favorite skincare channels, and she was telling me about her own skincare journey. She convinced me to start on my own journey, but it wasn't always easy. My friend and I struggled sometimes, buying products that were actually damaging our skin or just weren't targetting the specific issues we were having respectively.
            </Typography>
            <Typography variant="body1" mx={5} mb={10}>
                I personally know how difficult it can be to start your skincare journey. Even with the help of my friend, I still felt lost in all the products out there from time to time. But I am finally at a happy place with my skin! And I want to help others get to that same point of happiness in their own skin. The Skincare Place is a love letter to my friend, and I hope that my passion extends to you to feel welcomed and loved.
            </Typography>
            <Divider>
                Cleanse-Tone-Exfoliate-Moisturize-and-Sunscreen!
            </Divider>
        </div>
    );
};

export default About;