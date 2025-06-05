import React from "react";
import { Symptom } from "../types";
import SymptomListClient from "./SymptomListClient";

export function SymptomsList({ symptoms }: { symptoms: Symptom[] }) {
  return <SymptomListClient symptoms={symptoms} />;
}
