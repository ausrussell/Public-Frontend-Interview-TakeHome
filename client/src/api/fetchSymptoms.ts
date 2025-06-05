"use server";
import { API_BASE_URL } from "./constants";

export async function fetchSymptoms() {
  const response = await fetch(`${API_BASE_URL}/symptoms/getAll`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch symptoms: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

export async function fetchSymptomById(id: string) {
  const response = await fetch(`${API_BASE_URL}/symptoms/getById/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch symptom: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function fetchAllInterventions() {
  const response = await fetch(`${API_BASE_URL}/interventions/getAll`);
  if (!response.ok) {
    throw new Error(`Failed to fetch interventions: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
