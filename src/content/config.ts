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

// Define schema for activities
const activitySchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.string(),
  imageGallery: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  })).optional(),
  difficulty: z.string(),
  location: z.string(),
  distance: z.string().optional(),
  elevation: z.string().optional(),
  duration: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  mapCoordinates: z.object({
    center: z.tuple([z.number(), z.number()]),
    markers: z.array(z.object({
      position: z.tuple([z.number(), z.number()]),
      title: z.string().optional(),
      description: z.string().optional(),
    })).optional(),
  }).optional(),
  publishDate: z.date().optional(),
});

// Define schema for experiences
const experienceSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.string(),
  difficulty: z.string().optional(),
  location: z.string(),
  duration: z.string(),
  category: z.string(),
  publishDate: z.date().optional(),
  // Add any other fields needed for experiences
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
  'activities': defineCollection({
    schema: activitySchema,
  }),
  'experiences': defineCollection({
    schema: experienceSchema,
  }),
};
