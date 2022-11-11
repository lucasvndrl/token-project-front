import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { TokenCardList } from "../../components/TokenCardList";

export const TokenViewer = () => {
  const tokens = [
    {
      tokenNumber: 1,
      tokenPriority: "PRIORIDADE",
    },
  ];

  return (
    <Container sx={{ alignItems: "center", display: "flex" }}>
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ backgroundColor: "palegreen" }}>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            TOKEN DA VEZ
          </Typography>
        </Box>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            backgroundColor: "darkviolet",
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
        <Stack direction="row" spacing={2}>
          {tokens.map((token, index) => (
            <TokenCardList
              tokenNumber={token.tokenNumber}
              tokenPriority={token.tokenPriority}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
