import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

export const TokenGenerator = () => {
  const [tokenType, setTokenType] = useState("");

  const handleChange = (event) => {
    setTokenType(event.target.value);
  };
  return (
    <Container
      sx={{
        height: 800,
        width: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ height: 500, width: 1200 }}>
        <Stack spacing={5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Prioridade do Token
            </InputLabel>
            <Select
              sx={{ marginTop: 5 }}
              label="Prioridade do Token"
              value={tokenType}
              onChange={handleChange}
            >
              <MenuItem value="Prioritário">Prioritário</MenuItem>
              <MenuItem value="Comum">Comum</MenuItem>
              {console.log(tokenType)}
            </Select>
          </FormControl>
          <Button>GERAR TOKEN</Button>
        </Stack>
      </Paper>
    </Container>
  );
};
