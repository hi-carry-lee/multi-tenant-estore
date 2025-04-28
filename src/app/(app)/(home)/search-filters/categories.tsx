import CategoryDropdown from "./category-dropdown";

interface CategoriesProps {
  data: any;
}

const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="flex">
      {data.map((category) => (
        <div key={category.id}>
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
