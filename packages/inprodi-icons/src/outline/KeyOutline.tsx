import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgKeyOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M9.21-.313a4.798 4.798 0 0 0-4.789 4.79c0 .324.067.627.13.93L.16 9.796a.553.553 0 0 0-.161.39v2.948a.553.553 0 0 0 .553.553H3.5a.553.553 0 0 0 .553-.553v-.92h1.29a.553.553 0 0 0 .552-.554v-1.289h1.29a.553.553 0 0 0 .552-.553v-.812c.468.153.956.26 1.474.26 2.638 0 4.789-2.151 4.789-4.79 0-2.638-2.15-4.79-4.79-4.79Zm0 1.105a3.676 3.676 0 0 1 3.685 3.684A3.676 3.676 0 0 1 9.21 8.16c-.64 0-1.239-.161-1.762-.447a.553.553 0 0 0-.817.485v1.068h-1.29a.553.553 0 0 0-.553.552v1.29H3.5a.552.552 0 0 0-.553.552v.921H1.105v-2.165l4.417-4.417a.553.553 0 0 0 .142-.54A3.676 3.676 0 0 1 9.21.792Zm.737 1.842a1.105 1.105 0 1 0 0 2.21 1.105 1.105 0 0 0 0-2.21Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgKeyOutline);
