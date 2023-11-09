import { getPages } from "@/lib/notion_projects"


export const GET = async (requests) => {
  try {
    const page = await getPages()
    
    return new Response(JSON.stringify(page), { status: 200 })

  } catch (error) {
    return new Response("Failed to fetch all Pagescd  ", { status: 500 })
  }
}