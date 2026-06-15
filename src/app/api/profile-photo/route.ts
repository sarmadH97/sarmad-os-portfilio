import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const SOURCE_IMAGE_PATHS = [
  join(process.cwd(), "public", "image", "246627.png"),
  join(process.cwd(), "public", "image", "24662227.jpg"),
];

export async function GET() {
  for (const sourcePath of SOURCE_IMAGE_PATHS) {
    try {
      const image = await readFile(sourcePath);
      const isJpeg = sourcePath.endsWith(".jpg") || sourcePath.endsWith(".jpeg");

      return new Response(new Uint8Array(image), {
        headers: {
          "Content-Type": isJpeg ? "image/jpeg" : "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      // Try the next known public image location.
    }
  }

  return new Response(null, { status: 404 });
}
