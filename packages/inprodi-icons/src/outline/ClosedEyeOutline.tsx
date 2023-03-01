import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgClosedEyeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.993.836c-2.689 0-5.166 1.207-6.85 3.072a.552.552 0 1 0 .82.741c1.481-1.64 3.673-2.708 6.03-2.708 2.356 0 4.552 1.068 6.038 2.709a.554.554 0 0 0 .935-.556.553.553 0 0 0-.117-.186C12.161 2.044 9.681.836 6.993.836Zm6.034 6.62a.552.552 0 0 0-.508.418c-.59 2.217-2.916 4.009-5.526 4.009s-4.929-1.791-5.52-4.01a.552.552 0 1 0-1.067.286c.176.662.474 1.282.86 1.846l-1.049.873a.553.553 0 1 0 .708.848l1.101-.918c.4.413.83.777 1.328 1.082l-.675 1.17a.552.552 0 1 0 .957.553l.7-1.212c.667.276 1.361.481 2.108.54v1.335a.552.552 0 1 0 1.105 0V12.94c.745-.06 1.44-.265 2.107-.541l.7 1.213a.55.55 0 0 0 .917.06.553.553 0 0 0 .04-.613l-.676-1.171c.5-.306.928-.67 1.328-1.082l1.102.92a.554.554 0 1 0 .708-.848l-1.05-.875a6.016 6.016 0 0 0 .862-1.845.553.553 0 0 0-.56-.704Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgClosedEyeOutline);
