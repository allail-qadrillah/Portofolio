import { Client } from "@notionhq/client"

import { cache } from "react"

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})
export const getPages = cache(async () => {
  const response = await notionClient.databases.query({
    filter: { // FILTER YANG STATUSNYA DONE
      property: "Status Writing",
      status: {
        equals: "Done"
      }
    }, 
    sorts: [ // URUTKAN DIFITURKAN PALING DEPAN
      {
        property: "is_featured",
        direction: "descending"
      }
    ],
    database_id: process.env.NOTION_DATABASE_PROJECTS
  });

  return response.results.map((response) => {
    return {
      title: response.properties.Name.title[0].plain_text,
      slug: response.properties.Slug.rich_text[0].plain_text,
      description: response.properties.Description.rich_text[0].plain_text,
      image: response.properties.Image.url,
      stack: response.properties.Stack.multi_select.map((item) => item.name),
      is_featured: response.properties.is_featured.checkbox,
      is_public: response.properties.is_public.checkbox
    }
  });
});
