import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRefreshOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 1.836c-1.93 0-3.639.96-4.674 2.427a.477.477 0 1 0 .78.55A4.753 4.753 0 0 1 7 2.79a4.756 4.756 0 0 1 4.758 4.56l-.765-.765a.476.476 0 1 0-.675.674l1.43 1.43a.477.477 0 0 0 .675 0l.11-.11a.476.476 0 0 0 .092-.092l1.228-1.228a.477.477 0 1 0-.674-.674l-.482.482C12.447 4.142 9.989 1.836 7 1.836Zm-5.093 4.45a.477.477 0 0 0-.33.14l-.109.108a.477.477 0 0 0-.094.095L.147 7.856a.477.477 0 1 0 .674.674l.482-.482c.25 2.925 2.708 5.231 5.697 5.231 1.93 0 3.639-.96 4.674-2.427a.477.477 0 1 0-.78-.55A4.753 4.753 0 0 1 7 12.326a4.756 4.756 0 0 1-4.757-4.56l.764.764a.477.477 0 1 0 .675-.674l-1.43-1.43a.477.477 0 0 0-.345-.14Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRefreshOutline);
