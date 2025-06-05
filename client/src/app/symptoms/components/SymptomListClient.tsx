"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { Symptom } from "../types";
import SymptomDetailPage from "../[id]/page";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Collapse,
} from "@mui/material";

export default function SymptomListClient({ symptoms }: { symptoms: Symptom[] }) {
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
    <Box ref={containerRef} sx={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {symptoms.map((symptom: Symptom, idx: number) => {
        const isSelected = expandedIndex === idx;
        return (
          <Box
            key={symptom.id}
            ref={(el: HTMLDivElement | null) => {
              cardRefs.current[idx] = el;
            }}
            sx={{
              width: "100%",
              margin: "8px 0",
              zIndex: isSelected ? 10 : 1,
              position: "relative",
              height: isSelected ? "100%" : "auto",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              opacity: expandedIndex === null || isSelected ? 1 : 0,
              pointerEvents: expandedIndex === null || isSelected ? "auto" : "none",
              borderRadius: isSelected ? 2 : 2,
              transform: isSelected && offset !== 0 ? `translateY(-${offset}px)` : "none",
              "&:hover": expandedIndex === null || !isSelected ? {
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                transform: isSelected ? `translateY(-${offset}px)` : "translateY(-2px) scale(1.02)",
                color: "#333",
              } : undefined,
            }}
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
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                height: isSelected ? "100%" : "auto",
                boxShadow: "none",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                overflow: "visible",
              }}
            >
              {!isSelected && (
                <CardActionArea
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  sx={{
                    height: isSelected ? "auto" : "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    pointerEvents: isSelected ? "none" : "auto",
                    position: "relative",
                  }}
                  disabled={isSelected}
                >
                  <CardContent sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                      <Typography variant="h6">{symptom.name.toUpperCase()}</Typography>
                      <Typography variant="body2">{symptom.description}</Typography>
                    </Box>
                    <ExpandMoreIcon sx={{ ml: 2, fontSize: 32, color: "#888" }} />
                  </CardContent>
                </CardActionArea>
              )}
              <Collapse in={expandedIndex === idx} timeout="auto">
                <Box sx={{ pt: 2 }}>
                  <SymptomDetailPage symptomId={symptom.id} />
                </Box>
              </Collapse>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
