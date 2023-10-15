import { Client } from "@notionhq/client"
import { NotionAPI } from 'notion-client'

import { cache } from "react"

// Initializing a client
const notionAPI = new NotionAPI()
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

export const getPageBySlug = cache(async (slug) => {
  // RETURN DENGAN ARRAY URL, URL IMAGE, TECH STACK
  return await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  })
    .then((res) => res.results[0]);
})

export const getPageContent = cache(async (page_id) => {
  // returnm 
  // DAPATKAN PAGE URLnya
  const content = await notionAPI.getPage(page_id)
  // console.log(content)

  // menghapus array parent_id pada array oaling depan agar tidak menampilkan properties dari page
  const firstBlock = content.block[Object.keys(content.block)[0]];
  delete firstBlock.value.parent_id;
  
  return {
    record_map: content,
    title: content.block[Object.keys(content.block)[0]].value.properties[";|mG"][0][0],
    description: content.block[Object.keys(content.block)[0]].value.properties["JKBr"][0][0],
    image: content.block[Object.keys(content.block)[0]].value.properties["?BS|"][0][0],
    github: content.block[Object.keys(content.block)[0]].value.properties["Wm\\b"][0][0],
    stack: content.collection[Object.keys(content.collection)[0]].value.schema.PMzp.options,
    is_public: content.block[Object.keys(content.block)[0]].value.properties.FZDs[0][0] == "Yes" ? true : false,
    type: content.collection[Object.keys(content.collection)[0]].value.schema.vstL.options,
  }
})
