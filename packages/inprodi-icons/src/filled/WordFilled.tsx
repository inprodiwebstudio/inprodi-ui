import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgWordFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#WordFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path opacity={0.35} d="M13.3 2.82H7v8.4h6.3v-8.4Z" />
        <path
          opacity={0.35}
          d="M6.323.875a.697.697 0 0 0-.16.013l-5.6 1.121A.699.699 0 0 0 0 2.695v8.652a.7.7 0 0 0 .564.686l5.6 1.121A.7.7 0 0 0 7 12.466V1.576a.7.7 0 0 0-.677-.7Z"
        />
        <path d="M4.657 9.615a.564.564 0 0 1-.55-.441L3.59 6.842a4.108 4.108 0 0 1-.056-.58h-.012a4.272 4.272 0 0 1-.066.58l-.524 2.315a.588.588 0 0 1-1.15-.022l-.768-4.13a.488.488 0 0 1 .48-.577h.065c.243 0 .449.179.483.42l.285 2.014c.024.147.042.347.048.593h.018c.006-.18.031-.386.074-.607l.325-1.782a.779.779 0 0 1 1.535.01l.299 1.765c.024.126.042.313.06.553H4.7c.006-.186.025-.38.048-.58l.276-1.967a.488.488 0 1 1 .963.158l-.775 4.15a.565.565 0 0 1-.554.46ZM13.3 2.12H7v9.8h6.3a.7.7 0 0 0 .7-.7v-8.4a.7.7 0 0 0-.7-.7Zm-.7 8.4H8.4v-1.4h4.2v1.4Zm0-2.8H8.4v-1.4h4.2v1.4Zm0-2.8H8.4v-1.4h4.2v1.4Z" />
      </g>
      <defs>
        <clipPath id="WordFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgWordFilled);
