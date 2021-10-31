import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async (request: VercelRequest, response: VercelResponse) => {
  const target = (() => {
    const target = request.query.target;

    if (Array.isArray(target)) {
      return target[0];
    }

    return target;
  })();

  const res = await fetch(target);

  response.setHeader("Content-Type", "plain/text");

  response.status(200).send(await res.text());
};
