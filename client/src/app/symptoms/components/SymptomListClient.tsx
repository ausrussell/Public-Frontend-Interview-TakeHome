"use client";
import {
  StyledCardActionArea,
  StyledSymptomBox,
  StyledSymptomCard,
} from "@/styles/StyledSymptomComponents";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import SymptomDetailPage from "../[id]/page";
import { Symptom } from "../types";

export default function SymptomListClient({
  symptoms,
}: {
  symptoms: Symptom[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      expandedIndex !== null &&
      cardRefs.current[expandedIndex] &&
      containerRef.current
    ) {
      const card = cardRefs.current[expandedIndex];
      const container = containerRef.current;
      if (card && container) {
        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setOffset(cardRect.top - containerRect.top);
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      setOffset(0);
    }
  }, [expandedIndex]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {symptoms.map((symptom: Symptom, idx: number) => {
        const isSelected = expandedIndex === idx;
        return (
          <StyledSymptomBox
            key={symptom.id}
            ref={(el: HTMLDivElement | null) => {
              cardRefs.current[idx] = el;
            }}
            isSelected={isSelected}
            expandedIndex={expandedIndex}
            offset={offset}
          >
            {isSelected && (
              <IconButton
                aria-label="close"
                onClick={() => setExpandedIndex(null)}
                sx={{ position: "absolute", top: 16, right: 16, zIndex: 20 }}
              >
                <CloseIcon />
              </IconButton>
            )}
            <StyledSymptomCard isSelected={isSelected}>
              {!isSelected && (
                <StyledCardActionArea
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                  isSelected={isSelected}
                  disabled={isSelected}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography variant="h6">
                        {symptom.name.toUpperCase()}
                      </Typography>
                      <Typography variant="body2">
                        {symptom.description}
                      </Typography>
                    </Box>
                    <ExpandMoreIcon
                      sx={{ ml: 2, fontSize: 32, color: "#888" }}
                    />
                  </CardContent>
                </StyledCardActionArea>
              )}
              <Collapse in={expandedIndex === idx} timeout="auto">
                <Box sx={{ pt: 2 }}>
                  <SymptomDetailPage symptomId={symptom.id} />
                </Box>
              </Collapse>
            </StyledSymptomCard>
          </StyledSymptomBox>
        );
      })}
    </Box>
  );
}
