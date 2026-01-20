import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const talks = defineCollection({
    schema: z.object({
        title: z.string(),
        publishDate: z.string(),
        type: z.enum(['writing', 'interview', 'speaking']),
        publication: z.string().optional(),
        url: z.string().url()
    })
});

export const collections = { pages, talks };

// Blog and projects content was archived to archive/ directory.
// To re-enable: move files from archive/ to src/content/ and add collection schema.
