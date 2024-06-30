import { getPages } from "@/lib/notion_projects"

export const dynamic = 'force-dynamic';
export const GET = async (requests) => {
  try {
    const page = await getPages()
    
    return new Response(JSON.stringify(page), { status: 200 })

  } catch (error) {
    return new Response("Failed to fetch all Pages", { status: 500 })
  }
}