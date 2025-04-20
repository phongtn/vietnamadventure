import { defineCollection, z } from 'astro:content';

// Define the schema for activities
const activityCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    imageGallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    difficulty: z.enum(['Easy', 'Moderate', 'Hard']),
    location: z.string(),
    distance: z.string().optional(),
    elevation: z.string().optional(),
    duration: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    mapCoordinates: z.object({
      center: z.tuple([z.number(), z.number()]),
      routes: z.array(
        z.object({
          points: z.array(z.tuple([z.number(), z.number()])),
          color: z.string().optional(),
        })
      ).optional(),
      markers: z.array(
        z.object({
          position: z.tuple([z.number(), z.number()]),
          title: z.string().optional(),
          description: z.string().optional(),
        })
      ).optional(),
    }).optional(),
    publishDate: z.date().default(() => new Date()),
  }),
});

// Define the schema for experiences
const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    imageGallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    difficulty: z.enum(['Easy', 'Moderate', 'Hard']),
    location: z.string(),
    duration: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    price: z.string().optional(),
    mapCoordinates: z.object({
      center: z.tuple([z.number(), z.number()]),
      markers: z.array(
        z.object({
          position: z.tuple([z.number(), z.number()]),
          title: z.string().optional(),
          description: z.string().optional(),
        })
      ).optional(),
    }).optional(),
    publishDate: z.date().default(() => new Date()),
  }),
});

export const collections = {
  'activities': activityCollection,
  'experiences': experienceCollection,
};
