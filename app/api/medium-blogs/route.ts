import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sahilsuman1202")
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching Medium blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

