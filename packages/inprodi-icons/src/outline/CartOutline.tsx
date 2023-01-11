import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCartOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.484 1.774a.477.477 0 1 0 0 .954h.876c.232 0 .425.16.469.387l.095.497 1.025 5.386a2.073 2.073 0 0 0 2.031 1.68h5.955c.99 0 1.846-.708 2.031-1.68l1.026-5.386a.476.476 0 0 0-.469-.566H2.786l-.02-.109A1.436 1.436 0 0 0 1.36 1.774H.484ZM2.968 4h9.979l-.918 4.82c-.1.528-.556.905-1.094.905H4.98c-.537 0-.992-.377-1.093-.905L2.968 4Zm2.763 7.315a.954.954 0 1 0 0 1.908.954.954 0 0 0 0-1.908Zm4.453 0a.954.954 0 1 0 0 1.908.954.954 0 0 0 0-1.908Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCartOutline);
