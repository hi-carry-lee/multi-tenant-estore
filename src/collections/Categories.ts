import type { CollectionConfig } from "payload";

// 定义Category数据结构
interface CategoryData {
  parent?: string;
  subCategories?: Array<Record<string, unknown>>;
}

export const Categories: CollectionConfig = {
  // slug 是集合的唯一标识符，用于数据库集合命名
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "color",
      type: "text",
    },
    {
      name: "parent",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "subCategories",
      type: "join",
      collection: "categories",
      on: "parent",
      hasMany: true,
      admin: {
        description:
          "List of child categories based on this category being their parent. No need to add manually.",
      },
    },
  ],
};
