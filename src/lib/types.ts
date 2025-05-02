// src/lib/types.ts

export type Pavilion = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  tags: string[];
  iconColor?: "red" | "violet" | "orange" | "gray" | "green" | "gold"|"blue"|"black";
  male?: boolean;
  female?: boolean;
  unisex?: boolean;
  wheelchair?: boolean;
};