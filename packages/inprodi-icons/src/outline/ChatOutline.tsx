import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChatOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .836c-3.86 0-7 3.14-7 7 0 1.146.302 2.218.792 3.173l-.76 2.717c-.176.631.448 1.255 1.08 1.079l2.718-.76c.955.49 2.025.791 3.17.791 3.86 0 7-3.14 7-7s-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.786a5.914 5.914 0 0 1-2.89-.75.525.525 0 0 0-.397-.048l-2.585.722.722-2.585a.525.525 0 0 0-.047-.397 5.911 5.911 0 0 1-.753-2.892A5.942 5.942 0 0 1 7 1.886Zm-2.45 5.25a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChatOutline);
