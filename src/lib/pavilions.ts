// src/lib/pavilions.ts

// src/lib/pavilions.ts
export type Pavilion = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  tags: string[];
  iconColor?: 'red' | 'violet' | 'orange' | 'gray' | 'green'; // ここ！
};