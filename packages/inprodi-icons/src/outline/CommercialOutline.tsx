import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCommercialOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#CommercialOutline_svg__a)">
        <path
          d="M11.97.659a1.167 1.167 0 0 0-.434.062l-6.629 2.26-3.152.242A1.907 1.907 0 0 0 0 5.118v2.625A1.907 1.907 0 0 0 1.795 9.64h-.462l.308 2.777c.08.72.698 1.272 1.422 1.272.784 0 1.432-.646 1.432-1.43v-2.41l.413.032 6.628 2.26c.77.262 1.6-.332 1.6-1.146V7.884a1.382 1.382 0 0 0 0-2.56V1.866c0-.61-.467-1.097-1.026-1.192a1.18 1.18 0 0 0-.14-.015Zm-.01 1.032c.082.009.14.075.14.176v9.128c0 .134-.103.207-.23.164l-6.69-2.28a.518.518 0 0 0-.128-.027l-1.037-.08a.519.519 0 0 0-.558.517v2.97a.387.387 0 0 1-.394.393.387.387 0 0 1-.39-.35l-.36-3.237a.519.519 0 0 0-.478-.46.858.858 0 0 1-.798-.862V5.118c0-.456.343-.826.798-.861l2.659-.204v3.242a.519.519 0 1 0 1.037 0V3.864l6.34-2.161a.209.209 0 0 1 .089-.012Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="CommercialOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCommercialOutline);
