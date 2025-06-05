"use client";
import {
    Alert,
    CircularProgress,
    Container,
    Typography
} from "@mui/material";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
    fetchAllInterventions,
    fetchSymptomById,
} from "../../../api/fetchSymptoms";
import InterventionsClient from "../components/InterventionsClient";
import { Symptom } from "../types";

interface Intervention {
  id: number;
  name: string;
  description: string;
  severity: string[];
  product_link: string;
  product_image: string;
  likes: number;
  dislikes: number;
  SOS?: boolean;
}

const severityLevels = ["mild", "moderate", "severe"];

// Accept a symptomId prop for client-side rendering
export default function SymptomDetailPage({
  symptomId,
}: {
  symptomId?: number | string;
}) {
  const id = symptomId ?? useParams()?.id;
  const [symptom, setSymptom] = useState<Symptom | null>(null);
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      setLoading(true);
      try {
        const symptomRes = await fetchSymptomById(String(id));
        const {
          name,
          description,
          interventions: interventionIds,
        } = symptomRes.message;
        setSymptom({
          id: Number(id),
          name,
          description,
          interventions: interventionIds,
        });
        if (interventionIds.length > 0) {
          const intRes = await fetchAllInterventions();
          const { message: interventionObjs } = intRes;
          setInterventions(
            interventionObjs.filter((i: Intervention) =>
              interventionIds.includes(i.id)
            )
          );
        } else {
          setInterventions([]);
        }
        setLoading(false);
      } catch (e) {
        setError("Failed to load symptom details.");
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  if (loading) {
    return (
      <Container
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }
  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }
  if (!symptom) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="warning">Symptom not found.</Alert>
      </Container>
    );
  }
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {symptom.name.toUpperCase()}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {symptom.description}
      </Typography>
      <Suspense fallback={<CircularProgress sx={{ mt: 4 }} />}>
        <InterventionsClient
          interventions={interventions}
          severityLevels={severityLevels}
          defaultSeverity="mild"
          symptomName={symptom.name}
        />
      </Suspense>
    </Container>
  );
}
