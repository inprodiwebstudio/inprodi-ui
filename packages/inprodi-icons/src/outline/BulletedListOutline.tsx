import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBulletedListOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.875 2.799a.875.875 0 1 0 0 1.749.875.875 0 0 0 0-1.75Zm2.448.35a.525.525 0 1 0 0 1.049h10.145a.525.525 0 1 0 0-1.05H3.323ZM.875 6.296a.875.875 0 1 0 0 1.749.875.875 0 0 0 0-1.75Zm2.448.35a.525.525 0 1 0 0 1.049h10.145a.525.525 0 1 0 0-1.05H3.323ZM.875 9.794a.874.874 0 1 0 0 1.749.874.874 0 0 0 0-1.75Zm2.448.35a.525.525 0 1 0 0 1.05h10.145a.525.525 0 1 0 0-1.05H3.323Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBulletedListOutline);
