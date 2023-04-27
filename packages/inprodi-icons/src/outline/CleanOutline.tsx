import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCleanOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#CleanOutline_svg__a)">
        <path
          d="M7.057.236a.512.512 0 0 0-.504.52V3.76A1.372 1.372 0 0 0 5.7 5.02v.341H4.505c-1.219 0-2.218 1-2.218 2.219v.341c0 2.645-.657 4.616-.657 4.616a.512.512 0 0 0 .223.601s1.85 1.097 4.87 1.097c1.158 0 2.176-.168 3.064-.361a.512.512 0 0 0 .332-.07c1.247-.298 2.097-.634 2.097-.634a.512.512 0 0 0 .273-.66s-.646-1.593-.646-4.589v-.341c0-1.22-1-2.219-2.218-2.219H8.43v-.34c0-.568-.356-1.056-.853-1.261V.755a.512.512 0 0 0-.52-.52Zm-.008 4.45h.033a.33.33 0 0 1 .324.335v.853a.512.512 0 0 0 .512.512h1.707c.665 0 1.194.53 1.194 1.195v.17H3.311v-.17c0-.666.529-1.195 1.194-1.195h1.707a.512.512 0 0 0 .512-.512v-.853a.33.33 0 0 1 .325-.334Zm-3.786 4.09h7.602c.091 2.004.368 3.094.529 3.59-.23.09-.482.194-1.201.38-.135-.404-.341-1.134-.398-2.457a.512.512 0 1 0-1.023.044c.056 1.293.257 2.097.418 2.622-.744.141-1.557.257-2.466.257-.514 0-.941-.057-1.37-.11.123-.324.254-.716.341-1.357a.512.512 0 1 0-1.014-.138c-.09.661-.223 1.07-.32 1.299-.014.03-.006.008-.016.03-.955-.216-1.397-.412-1.628-.533.14-.475.446-1.698.546-3.628Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="CleanOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCleanOutline);