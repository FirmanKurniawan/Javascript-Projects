import type { NextApiRequest, NextApiResponse } from "next";
import type { APIResponseTypes } from "@/lib/API";
import { isVideoValid, downloadVideo } from "@/lib/Youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponseTypes>
) {
  switch (req.method) {
    case "POST": {
      const { url, format, quality } = req.body as {
        url: string;
        format: string;
        quality: string;
      };

      if (!url || !format) {
        res.status(400).json({
          success: false,
          data: null,
          message: "Missing url or format",
        });
        return;
      }

      if (isVideoValid(url) === false) {
        res.status(400).json({
          success: false,
          data: null,
          message: "No video found with that url",
        });
        return;
      }

      try {
        await downloadVideo(url, format, quality)
          .then((url) => {
            res.status(200).json({
              success: true,
              data: url,
              message: "",
            });
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              data: null,
              message: err.message,
            });
          });
      } catch (err: any) {
        res.status(500).json({
          success: false,
          data: null,
          message: err.message,
        });
      }

      break;
    }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
