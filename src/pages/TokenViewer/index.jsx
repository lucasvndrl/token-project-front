import {
  Box,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const TokenViewer = () => {
  const tokens = [
    {
      tokenNumber: 1,
      tokenPriority: "PRIORIDADE",
    },
    {
      tokenNumber: 2,
      tokenPriority: "NORMAL",
    },
    {
      tokenNumber: 3,
      tokenPriority: "PRIORIDADE",
    },
    {
      tokenNumber: 4,
      tokenPriority: "NORMAL",
    },
  ];

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}
    >
      <Stack sx={{ flexGrow: 1 }}>
        <Box>
          <br />
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            TOKEN DA VEZ
          </Typography>
        </Box>
        <br />
        <Divider variant="fullWidth" />
        <Box
          sx={{
            height: 500,
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: "bold", flexGrow: 1, fontSize: 500 }}
          >
            01
          </Typography>
        </Box>
        <Divider variant="fullWidth" />
        <br />
        <Grid container spacing={4}>
          {tokens.map((token) => (
            <Grid key={token.tokenNumber} item xs={2} md={3}>
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
                  {token.tokenNumber}
                  {bull}
                </Typography>
                <Divider variant="fullWidth" />
                <Typography variant="h5" component="div">
                  {token.tokenPriority}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
        <br />
      </Stack>
    </Container>
  );
};
