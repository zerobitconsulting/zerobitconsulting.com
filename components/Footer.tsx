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
              <Box className="text-sm">
                <Link href='/' color='inherit'>
                  phone number
                </Link>
              </Box>
              <Box className="text-sm">
                <Link href='/' color='inherit'>
                  email address
                </Link>
              </Box>
              <Box className="text-sm">
                <Link href='/' color='inherit'>
                  mailing address
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}> 
              <Box borderBottom={1}>
                <p className="text-sm">Automating the smallest bit of work so you can focus on your customers</p>
              </Box>
              <Box>
                <h2>Follow us here: </h2>
              </Box>
              <Box className="text-sm">
                <Link  href='https://www.instagram.com/zerobit_consult/' color='inherit' >
                  Instagram
                </Link>
              </Box>
              <Box className="text-sm">
                <Link href='https://twitter.com/zerobit_consult' color='inherit'>
                  Twitter
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}> 
              <Box borderBottom={1}>Connect with us</Box>
              <Box className="text-sm">
                <Link href='/' color='inherit'>
                  Blog
                </Link>
              </Box>
              <Box className="text-sm">
                <Link href='/' color='inherit'>
                  Privacy Policy
                </Link>
              </Box>
              <Box className="text-sm">
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