// app/api/hello/route.ts
import { NextResponse } from 'next/server'; // Importing NextResponse for the new API routes
import { getAllPosts } from '../../lib/posts'; // Import your post-fetching logic

export async function GET() {
  try {
    const posts = getAllPosts(); // Fetch the posts
    return NextResponse.json(posts); // Return the posts as JSON
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message); // Optional: Log the error
    }
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}
