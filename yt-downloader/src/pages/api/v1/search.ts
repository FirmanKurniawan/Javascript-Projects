import ytsr, { Result, Item } from "ytsr";
import type { NextApiRequest, NextApiResponse } from "next";
import type { APIResponseTypes } from "@/lib/API";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponseTypes>
) {
  switch (req.method) {
    case "GET": {
      const { q } = req.query as {
        q: string;
      };

      if (!q) {
        res.status(400).json({
          success: false,
          data: null,
          message: "Please provide a search query",
        });
        return;
      }

      try {
        const response = {
          items: [] as Item[],
        };

        const results: Result = await ytsr(q, {
          gl: "ID",
          hl: "id",
        });

        results.items.forEach((item: Item) => {
          if (item.type === "video") {
            response.items.push(item);
          }
        });

        res.status(200).json({
          success: true,
          data: response,
          message: "",
        });
      } catch (err: any) {
        res.status(500).json({
          success: false,
          data: null,
          message: err,
        });
      }

      break;
    }

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
