// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// "blog" — это название нашей коллекции
const blogCollection = defineCollection({
  // 'z' — это zod, он описывает "схему"
  schema: z.object({
    title: z.string(), // У каждого поста должен быть заголовок (строка)
    description: z.string(), // Описание для превью (строка)
    pubDate: z.date(), // Дата публикации (дата)
    // 'optional' значит "необязательно"
    heroImage: z.string().optional(), // Картинка для обложки (строка - путь к файлу)
  }),
});

export const collections = {
  'blog': blogCollection,
};