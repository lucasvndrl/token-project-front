import { Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
export const TokenCardList = (tokenNumber, tokenPriority) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  console.log(tokenNumber);
  return (
    <CardContent
      sx={{
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderRadius: 5,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        {bull}
        {tokenNumber}
        {bull}
      </Typography>
      <Divider variant="fullWidth" />
      <Typography variant="h5" component="div">
        {tokenPriority}
      </Typography>
    </CardContent>
  );
};
