import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgQrCodeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#QrCodeOutline_svg__a)">
        <path
          d="M1.75.174C.79.174 0 .964 0 1.924v2.722c0 .96.79 1.75 1.75 1.75h2.722c.96 0 1.75-.79 1.75-1.75V1.924c0-.96-.79-1.75-1.75-1.75H1.75Zm7.778 0c-.96 0-1.75.79-1.75 1.75v2.722c0 .96.79 1.75 1.75 1.75h2.722c.96 0 1.75-.79 1.75-1.75V1.924c0-.96-.79-1.75-1.75-1.75H9.528ZM1.75 1.34h2.722c.33 0 .584.254.584.584v2.722c0 .329-.255.583-.584.583H1.75a.575.575 0 0 1-.583-.583V1.924c0-.33.254-.584.583-.584Zm7.778 0h2.722c.33 0 .583.254.583.584v2.722c0 .329-.254.583-.583.583H9.528a.575.575 0 0 1-.584-.583V1.924c0-.33.255-.584.584-.584ZM2.333 2.507v1.555H3.89V2.507H2.333Zm7.778 0v1.555h1.556V2.507H10.11ZM1.75 7.95c-.96 0-1.75.79-1.75 1.75v2.723c0 .96.79 1.75 1.75 1.75h2.722c.96 0 1.75-.79 1.75-1.75V9.7c0-.96-.79-1.75-1.75-1.75H1.75Zm6.028 0v2.14h2.139V7.95h-2.14Zm2.139 2.14v1.944h1.944V10.09H9.917Zm1.944 0H14V7.95h-2.139v2.14Zm0 1.944v2.139H14v-2.14h-2.139Zm-1.944 0h-2.14v2.139h2.14v-2.14ZM1.75 9.118h2.722c.33 0 .584.254.584.583v2.723c0 .329-.255.583-.584.583H1.75a.575.575 0 0 1-.583-.583V9.7c0-.329.254-.583.583-.583Zm.583 1.167v1.555H3.89v-1.555H2.333Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="QrCodeOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgQrCodeOutline);
