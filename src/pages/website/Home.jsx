import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: '#dbebeaff',
          paddingTop: 5,
          paddingBottom: 5
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Hero Section
        </Typography>
        <Typography variant="p" sx={{margin: "15px 0px 20px 0px", width: {xs: '100%', sm: '50%'},  textAlign: 'center'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio
          esse molestiae laudantium blanditiis tenetur possimus ea illum velit
          in!
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" size="small">Primary</Button>
          <Button variant="outlined" size="small">Primary</Button>
        </Stack>
      </Box>
    </>
  );
};
