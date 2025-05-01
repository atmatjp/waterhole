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

export const pavilions: Pavilion[] = [
  {
    id: 'a',
    name: 'パビリオンA',
    lat: 34.6649,
    lng: 135.4076,
    description: '未来と技術の展示が中心のパビリオンです。',
     tags: ['未来', '技術', '展示'],
    iconColor: "violet"
    
  },
  {
    id: 'b',
    name: 'パビリオンB',

    lat: 34.64765,
    lng: 135.3833,
    description: '自然と共生するデザインのパビリオンです。',
       tags: ['自然', 'デザイン', '共生'],
        iconColor: 'violet'
  },

];