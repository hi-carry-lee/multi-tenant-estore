import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  // slug 是集合的唯一标识符，用于数据库集合命名
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
