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
        d="M.484 1.836a.477.477 0 1 0 0 .954h.876c.232 0 .425.16.469.388l.095.497L2.949 9.06a2.073 2.073 0 0 0 2.031 1.68h5.955c.99 0 1.846-.708 2.031-1.68l1.026-5.386a.476.476 0 0 0-.469-.567H2.786L2.766 3A1.436 1.436 0 0 0 1.36 1.836H.484Zm2.484 2.226h9.979l-.918 4.82c-.1.528-.556.905-1.094.905H4.98c-.537 0-.992-.377-1.093-.905l-.919-4.82Zm2.763 7.315a.954.954 0 1 0 0 1.908.954.954 0 0 0 0-1.908Zm4.453 0a.954.954 0 1 0 0 1.908.954.954 0 0 0 0-1.908Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCartOutline);
