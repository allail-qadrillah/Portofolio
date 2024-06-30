import { getPageContent } from "@/lib/notion_projects"

export const GET = async (requests, { params }) => {
  try {
    const content = await getPageContent(params.id)
    return new Response(JSON.stringify(content), { status: 200 })

  } catch (error) {
    return new Response("Failed to fetch content", { status: 500 })
  }
}