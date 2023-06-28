import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPrintOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PrintOutline_svg__a)">
        <path
          d="M4.375 0C3.511 0 2.8.749 2.8 1.658v.553h-.525C1.025 2.21 0 3.289 0 4.605v5.158c0 .91.711 1.658 1.575 1.658H2.8v.921c0 .91.711 1.658 1.575 1.658h5.25c.864 0 1.575-.749 1.575-1.658v-.92h1.225c.864 0 1.575-.75 1.575-1.659V4.605c0-1.316-1.025-2.394-2.275-2.394H11.2v-.553C11.2.748 10.489 0 9.625 0h-5.25Zm0 1.105h5.25c.296 0 .525.241.525.553v.553h-6.3v-.553c0-.312.229-.553.525-.553Zm-2.1 2.21h9.45c.683 0 1.225.572 1.225 1.29v5.158c0 .312-.229.553-.525.553H11.2v-1.29c0-.909-.711-1.658-1.575-1.658h-5.25c-.864 0-1.575.75-1.575 1.658v1.29H1.575c-.296 0-.525-.241-.525-.553V4.605c0-.718.542-1.29 1.225-1.29Zm2.1 5.159h5.25c.296 0 .525.24.525.552v3.316c0 .312-.229.553-.525.553h-5.25c-.296 0-.525-.241-.525-.553V9.026c0-.312.229-.552.525-.552Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="PrintOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPrintOutline);
