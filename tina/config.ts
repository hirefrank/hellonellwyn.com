import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "object",
                name: "image",
                label: "Image",
                fields: [
                  {
                    type: "string",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "src/content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
              },
              {
                type: "object",
                name: "image",
                label: "SEO Image",
                fields: [
                  {
                    type: "string",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "object",
                name: "image",
                label: "Image",
                fields: [
                  {
                    type: "string",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "siteConfig",
        label: "Site Configuration",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Site Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Site Subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "Site Description",
            required: true,
          },
          {
            type: "object",
            name: "image",
            label: "Site Image",
            fields: [
              { type: "string", name: "src", label: "Image Source" },
              { type: "string", name: "alt", label: "Image Alt Text" },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "title", label: "Hero Title" },
              { type: "rich-text", name: "text", label: "Hero Text" },
              {
                type: "object",
                name: "image",
                label: "Hero Image",
                fields: [
                  { type: "string", name: "src", label: "Image Source" },
                  { type: "string", name: "alt", label: "Image Alt Text" },
                ],
              },
              {
                type: "object",
                name: "actions",
                label: "Hero Actions",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Action Text" },
                  { type: "string", name: "href", label: "Action Link" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "subscribe",
            label: "Subscribe Section",
            fields: [
              { type: "string", name: "title", label: "Subscribe Title" },
              { type: "string", name: "text", label: "Subscribe Text" },
              { type: "string", name: "formUrl", label: "Form URL" },
            ],
          },
          {
            type: "number",
            name: "postsPerPage",
            label: "Posts Per Page",
          },
          {
            type: "number",
            name: "projectsPerPage",
            label: "Projects Per Page",
          },
          {
            type: "object",
            name: "headerNavLinks",
            label: "Header Navigation Links",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Link Text" },
              { type: "string", name: "href", label: "Link URL" },
            ],
          },
          {
            type: "object",
            name: "footerNavLinks",
            label: "Footer Navigation Links",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Link Text" },
              { type: "string", name: "href", label: "Link URL" },
            ],
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Media Links",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Platform Name" },
              { type: "string", name: "href", label: "Profile URL" },
            ],
          },
        ],
      },
    ],
  },
});
