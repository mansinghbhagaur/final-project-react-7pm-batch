import { Box, Grid, List, ListItem, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "grey", p: 3 }}>
      <Grid container spacing={1}>
        {/* frist column */}
        <Grid size={{xs: 12, sm: 6, md: 6, lg: 4}} color="white">
          <Typography variant="h4" fontWeight="bold" color="white" mb={2} >Logo</Typography>
          <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis error, minima dolor amet et ullam optio officia modi magni sapiente?</Typography>
        </Grid>
        {/* second column */}
        <Grid size={{xs: 12, sm: 6, md: 6, lg: 4}} sx={{color: "white"}}>
          <Typography variant="h5" fontWeight="bolder" align="left">Quick Links</Typography>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>About</ListItem>
          </List>
        </Grid>
        {/* column third */}
        <Grid size={{xs: 12, sm: 6, md: 6, lg: 4}} sx={{color: 'white'}}>
          <Typography>Hello man</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
