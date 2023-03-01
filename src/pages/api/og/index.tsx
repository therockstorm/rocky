/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  try {
    const title = req.nextUrl.searchParams.get("title")?.slice(0, 100);
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom left, #EFF6FF, #BFDBFE)",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          {/* bg-gradient-to-bl from-blue-50 to-blue-200 */}
          <div tw="flex h-full w-full flex-col items-center justify-center text-center">
            <svg
              height={400}
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M71.78 185.7C62.01 176.7 61.35 161.6 70.31 151.8C79.26 142 94.45 141.4 104.2 150.3L200.2 238.3C205.2 242.9 208 249.3 208 256C208 262.7 205.2 269.1 200.2 273.7L104.2 361.7C94.45 370.6 79.27 369.1 70.31 360.2C61.35 350.4 62.01 335.3 71.78 326.3L148.5 256L71.78 185.7zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H216C202.7 384 192 373.3 192 360C192 346.7 202.7 336 216 336H360z" />
              <path
                d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM70.31 151.8C61.35 161.6 62.01 176.7 71.78 185.7L148.5 256L71.78 326.3C62.01 335.3 61.35 350.4 70.31 360.2C79.26 369.1 94.45 370.6 104.2 361.7L200.2 273.7C205.2 269.1 208 262.7 208 255.1C208 249.3 205.2 242.9 200.2 238.3L104.2 150.3C94.45 141.4 79.26 142 70.31 151.8V151.8zM216 336C202.7 336 192 346.7 192 360C192 373.3 202.7 384 216 384H360C373.3 384 384 373.3 384 360C384 346.7 373.3 336 360 336H216z"
                fill="#60a5fa"
              />
            </svg>
            {title && <div tw="m-5 text-4xl text-gray-900">{title}</div>}
            <div tw="text-2xl text-gray-700 mt-2 mb-5">
              Rocky Warren, rocky.dev
            </div>
          </div>
        </div>
      ),
      { height: 627, width: 1200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
