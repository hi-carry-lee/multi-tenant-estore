import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "users",
    // if it has deep embeded fields, then you can limit the depth
    depth: 1,
  });

  return Response.json(data);
};
