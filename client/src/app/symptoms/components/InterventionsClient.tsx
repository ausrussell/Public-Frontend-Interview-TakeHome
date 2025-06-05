"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { useState } from "react";

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

export default function InterventionsClient({
  interventions,
  severityLevels,
  defaultSeverity,
  symptomName,
}: {
  interventions: Intervention[];
  severityLevels: string[];
  defaultSeverity: string;
  symptomName: string;
}) {
  const [severity, setSeverity] = useState<string>(defaultSeverity);

  // Color mapping for severity levels
  const severityColors: Record<string, string> = {
    mild: "#4caf50", // green
    moderate: "#ff9800", // orange
    severe: "#f44336", // red
  };

  // Sort so SOS interventions are at the front
  const filteredInterventions = interventions
    .filter((i) => i.severity.includes(severity))
    .sort((a, b) => (b.SOS ? 1 : 0) - (a.SOS ? 1 : 0));

  return (
    <Box
      sx={{
        backdropFilter: "blur(10px)",
        mb: 4,
        p: 4,
        pt: 2,
      }}
    >
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {`Select severity of your ${symptomName} `}
        </Typography>
        <Tabs
          value={severity}
          onChange={(_, val) => val && setSeverity(val)}
          variant="fullWidth"
          slotProps={{
            indicator: {
              style: {
                backgroundColor: severityColors[severity] || "#1976d2",
                height: 4,
                borderRadius: 2,
                transition: "background-color 0.3s",
              },
            },
          }}
          sx={{
            mb: 2,
            ".Mui-selected": {
              color: severityColors[severity] || "#1976d2",
            },
          }}
        >
          {severityLevels.map((level) => (
            <Tab
              key={level}
              value={level}
              label={level.charAt(0).toUpperCase() + level.slice(1)}
              sx={{
                fontWeight: 600,
                color: severityColors[level],
                transition: "color 0.3s",
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ my: 3 }}>
        <Typography variant="h6">Interventions</Typography>
        {filteredInterventions.length === 0 ? (
          <Typography>No interventions for this severity.</Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredInterventions.map((intervention) => (
              <Grid key={intervention.id}>
                <Card
                  sx={{
                    border: intervention.SOS ? "4px solid red" : undefined,
                    boxShadow: intervention.SOS ? 6 : undefined,
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2}>
                      {intervention.product_image && (
                        <img
                          src={intervention.product_image}
                          alt={intervention.name}
                          width={60}
                          height={60}
                          style={{ objectFit: "contain", borderRadius: 8 }}
                        />
                      )}
                      <Box>
                        <Typography variant="h6">
                          {intervention.name.toLocaleUpperCase()}
                        </Typography>
                        {intervention.SOS && (
                          <Chip label="S.O.S." color="error" sx={{ ml: 1 }} />
                        )}
                        <Typography variant="body2" color="text.secondary">
                          {intervention.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions>
                    {intervention.product_link && (
                      <Button
                        href={intervention.product_link}
                        target="_blank"
                        rel="noopener"
                        size="small"
                      >
                        Link to product
                      </Button>
                    )}
                    <Typography variant="caption" sx={{ ml: "auto" }}>
                      👍 {intervention.likes} | 👎 {intervention.dislikes}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
