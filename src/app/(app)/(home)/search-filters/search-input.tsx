import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  disabled?: boolean;
}

// 通过绝对定位实现 Input 中内嵌 InputIcon 的布局
const SearchInput = ({ disabled }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2  -translate-y-1/2 text-neutral-500 w-4 h-4" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      {/* TODO： add categories view all button, only for mobile */}
      {/* TODO： add library button, only for logged in users */}
    </div>
  );
};

export default SearchInput;

// 使用flex的方案实现 InputIcon和Input的布局
// const SearchInput = ({ disabled }: SearchInputProps) => {
//   return (
//     <div className="flex items-center w-full">
//       <div className="flex items-center w-full relative">
//         <SearchIcon className="absolute left-3 text-neutral-500 size-4" />
//         <Input
//           className="pl-8"
//           placeholder="Search products"
//           disabled={disabled}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchInput;
