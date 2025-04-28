import { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    // here the ref is the outest div in the CategoryDropdown component
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const dropdownWith = 240; // with of dropdown (w-60 = 15rem - 240px)

      // calculate the initial position of the dropdown
      // 为什么要加上window.scrollX和window.scrollY？因为计算基于的是viewport，而它和屏幕的物理左边界不是一回事，它会随着横向滚动条的移动而移动
      let left = rect.left + window.scrollX;
      const top = rect.bottom + window.scrollY;

      // check if the dropdown would go off the right edge of the viewport
      // window.innerWidth 是浏览器窗口的实际物理宽度，随着浏览器的缩放而变化
      if (left + dropdownWith > window.innerWidth) {
        // Align to the right edge of button instead
        left = rect.right + window.scrollX - dropdownWith;

        // If still off-screen, align to the right edge of the viewport with some padding
        if (left < 0) {
          left = window.innerWidth - dropdownWith - 16;
        }
      }

      // Ensure dropdown doesn't go off the left edge of the viewport
      if (left < 0) {
        left = 16;
      }

      return { top, left };
    }
    return { top: 0, left: 0 };
  };

  return { getDropdownPosition };
};
