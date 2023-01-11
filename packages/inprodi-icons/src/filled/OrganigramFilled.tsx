import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgOrganigramFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M8.273 4.818H5.727c-.703 0-1.272-.57-1.272-1.273V2.273C4.455 1.57 5.025 1 5.727 1h2.546c.703 0 1.272.57 1.272 1.273v1.272c0 .704-.57 1.273-1.272 1.273ZM5.09 11.818v-1.272c0-.704.57-1.273 1.274-1.273h1.272c.704 0 1.273.57 1.273 1.273v1.272c0 .703-.57 1.273-1.273 1.273H6.364c-.704 0-1.273-.57-1.273-1.273ZM10.182 11.818v-1.272c0-.704.57-1.273 1.273-1.273h1.272c.704 0 1.273.57 1.273 1.273v1.272c0 .703-.57 1.273-1.273 1.273h-1.272c-.704 0-1.273-.57-1.273-1.273ZM0 11.818v-1.272c0-.704.57-1.273 1.273-1.273h1.272c.704 0 1.273.57 1.273 1.273v1.272c0 .703-.57 1.273-1.273 1.273H1.273C.57 13.09 0 12.52 0 11.818Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M7.636 6.09V4.819H6.364v1.273H3.182c-1.055 0-1.91.855-1.91 1.909v1.273h1.273V8c0-.351.286-.636.637-.636h3.182v1.909h1.272v-1.91h3.182c.351 0 .636.286.636.637v1.273h1.273V8c0-1.054-.854-1.91-1.909-1.91H7.636Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgOrganigramFilled);
