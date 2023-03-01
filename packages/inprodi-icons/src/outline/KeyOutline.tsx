import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgKeyOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M9.21.774a4.798 4.798 0 0 0-4.789 4.789c0 .325.067.628.13.931L.16 10.883a.553.553 0 0 0-.161.39v2.948a.553.553 0 0 0 .553.553H3.5a.553.553 0 0 0 .553-.553V13.3h1.29a.553.553 0 0 0 .552-.553v-1.29h1.29a.553.553 0 0 0 .552-.552v-.812c.468.152.956.26 1.474.26 2.638 0 4.789-2.151 4.789-4.79 0-2.638-2.15-4.79-4.79-4.79Zm0 1.105a3.676 3.676 0 0 1 3.685 3.684A3.676 3.676 0 0 1 9.21 9.247c-.64 0-1.239-.162-1.762-.447a.553.553 0 0 0-.817.485v1.067h-1.29a.553.553 0 0 0-.553.553v1.29H3.5a.553.553 0 0 0-.553.552v.921H1.105v-2.166l4.417-4.416a.553.553 0 0 0 .142-.54A3.676 3.676 0 0 1 9.21 1.879Zm.737 1.842a1.105 1.105 0 1 0 0 2.21 1.105 1.105 0 0 0 0-2.21Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgKeyOutline);
