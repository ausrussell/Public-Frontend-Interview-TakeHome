"use client";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      }}
    >
      <Typography variant="h1" align="center">
        Manta Cares
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Symptoms
      </Button>
    </main>
  );
}
