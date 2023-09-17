import React from 'react';
import type { Animal } from "@/types";
import { getDogs } from '@/sanity/queries/getDogs';
import { AnimalCard } from '@/components/AnimalCard';

export default async function page() {
  const data = await getDogs();
  return (
    <div className="mx-auto py-2 container flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-20 mb-10">Dogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {data.map((dog: Animal) => (
          <AnimalCard
            key={dog._id}
            name={dog.name}
            description={(dog.body[0] as any).children[0].text}
            image={dog.mainImage?.image}
            type="dog"
            temperament={dog.dogTemperament} 
          />
        ))}
      </div>
    </div>
  );
}
