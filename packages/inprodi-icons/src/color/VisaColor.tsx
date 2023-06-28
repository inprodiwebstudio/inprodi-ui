import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVisaColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 10.667c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 0 1 0 10.667V3.333C0 2.597.597 2 1.333 2h11.334C13.403 2 14 2.597 14 3.333v7.334Z"
        fill="#1565C0"
      />
      <path
        d="m4.062 5.583-.875 2.611s-.223-1.104-.245-1.243C2.444 5.814 1.71 5.877 1.71 5.877l.866 3.373H3.63l1.457-3.667H4.062Zm.834 3.667h.957l.579-3.667h-.969L4.896 9.25Zm6.773-3.667h-1.007L9.092 9.25h.951l.196-.524h1.199l.102.524h.87l-.74-3.667Zm-1.165 2.443.521-1.386.273 1.386h-.794ZM7.79 6.652c0-.202.166-.352.642-.352.309 0 .663.224.663.224l.156-.77s-.453-.171-.897-.171c-1.007 0-1.526.481-1.526 1.09 0 1.103 1.327.952 1.327 1.518 0 .097-.077.321-.63.321-.554 0-.92-.203-.92-.203l-.164.739s.354.202 1.039.202c.686 0 1.638-.514 1.638-1.251 0-.887-1.328-.951-1.328-1.347Z"
        fill="#fff"
      />
      <path
        d="M3.07 7.565 2.75 5.982s-.146-.343-.525-.343H.744s1.887.558 2.327 1.926Z"
        fill="#FFC107"
      />
    </svg>
  );
}
export default IconHoc(SvgVisaColor);