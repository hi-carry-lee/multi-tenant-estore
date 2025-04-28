import { Category } from "@/payload-types";
import Footer from "./footer";
import NavBar from "./navbar";
import SearchFilters from "./search-filters";

import configPromise from "@payload-config";
import { getPayload } from "payload";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  // find function returns PaginatedDocs<Category> object
  // it has many properties, docs is the array of categories
  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  // 通过payload.find获取到的数据，它是一个封装的对象，这里对数据进行格式化处理
  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subCategories: (doc.subCategories?.docs ?? []).map((doc) => ({
      // 为什么这里要使用 (doc as Category) 而不是 doc 呢？
      // 因为使用了depth: 1,后，当前Payload SDK无法infer出嵌套的类型
      // Payload的github上的pull request有相关的讨论：feat:depth generic
      ...(doc as Category),
      subCategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <SearchFilters data={formattedData} />
      {/* flex-1 is used to take up the remaining space, so the footer will be at the bottom */}
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
