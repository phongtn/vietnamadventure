// Define the schema for our content collections
import { z, defineCollection } from 'astro:content';

// Define a schema for adventure content
const adventureSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.string(),
  difficulty: z.string(),
  duration: z.string(),
  location: z.string(),
  elevation: z.string(),
  bestSeason: z.string(),
  galleryImages: z.array(z.string()),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  type: z.string(),
});

// Define collections
export const collections = {
  'trail-running': defineCollection({
    schema: adventureSchema,
  }),
  'hiking': defineCollection({
    schema: adventureSchema,
  }),
  'climbing': defineCollection({
    schema: adventureSchema,
  }),
};
