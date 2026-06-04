import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const SOURCE_IMAGE_PATH = join(process.cwd(), "src", "image", "246627.jpg");

export async function GET() {
  try {
    const image = await readFile(SOURCE_IMAGE_PATH);

    return new Response(new Uint8Array(image), {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}
