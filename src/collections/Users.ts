import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  // slug 是集合的唯一标识符，用于数据库集合命名
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
