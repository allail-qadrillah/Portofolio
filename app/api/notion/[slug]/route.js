import { getPageBySlug, getPageContent } from "@/lib/notion_projects"

export const GET = async (requests, { params }) => {
  try {

    const page = await getPageBySlug(params.slug)

    if (!page) {
      return new Response("Page Not Found", { status: 404 })
    
    } else {
      const content = await getPageContent(page.id)

      return new Response(JSON.stringify(content), { status: 200 })
    }

  } catch (error) {
    return new Response("Failed to fetch content", { status: 500 })
  }
}