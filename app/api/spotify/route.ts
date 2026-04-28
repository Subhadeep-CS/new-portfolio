import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const data = await getNowPlaying();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Spotify API error:", error);
        return NextResponse.json(
            { isPlaying: false, message: "Error fetching Spotify data" },
            { status: 500 }
        );
    }
}
