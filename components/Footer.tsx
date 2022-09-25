import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";


export default function Footer() {
  return (
    <footer>
      <Box bgcolor="#696969" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}> 
              <Box borderBottom={1} >Customer Support:</Box>
              <Box>
                <Link href='/' color='inherit'>
                  phone number
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  email address
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  mailing address
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}> 
              <Box borderBottom={1}>
                <h2>Automating the smallest bit of work so you can focus on your customers</h2>
              </Box>
              <Box>
                <h2>Follow us here: </h2>
              </Box>
              <Box>
                <Link href='https://www.instagram.com/zerobit_consult/' color='inherit' target="_blank">
                  <FaInstagram />
                </Link> 
              </Box>
              <Box>
                <Link href='https://twitter.com' color='inherit' target="_blank">
                  <FaTwitter />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}> 
              <Box borderBottom={1}>Connect with us</Box>
              <Box>
                <Link href='/' color='inherit'>
                  Blog
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link href='/' color='inherit'>
                  Careers
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}