// "use client";
import { Container, Typography } from "@mui/material";
import { fetchSymptoms } from "../../api/fetchSymptoms";
import { SymptomsList } from "./components/SymptomList";

export default async function SymptomListPage() {
  const { message: symptoms } = await fetchSymptoms();

  return (
    <Container
      sx={{
        mt: 4,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 2,
        pt: 2,
        mb: 2,
      }}
    >
      <Typography
        variant="h4"
      >
        Let us help you with your symptoms
      </Typography>

      <SymptomsList symptoms={symptoms} />
    </Container>
  );
}
