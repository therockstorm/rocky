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
              "linear-gradient(to bottom left, #ECFDF5, #A7F3D0)",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <div tw="flex h-full w-full flex-col items-center justify-center text-center">
            <svg
              height={400}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24V258.4C213.1 249.4 200 230.3 200 208c0-30.93 25.07-56 56-56s56 25.07 56 56C312 230.3 298.9 249.4 280 258.4z" />
              <path
                d="M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24V258.4C213.1 249.4 200 230.3 200 208c0-30.93 25.07-56 56-56s56 25.07 56 56C312 230.3 298.9 249.4 280 258.4z"
                fill="#34d399"
              />
            </svg>
            {title && <div tw="m-5 text-4xl text-gray-900">{title}</div>}
            <div tw="text-2xl text-gray-700 mt-2 mb-5">privacyprotect.dev</div>
          </div>
        </div>
      ),
      { height: 627, width: 1200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
