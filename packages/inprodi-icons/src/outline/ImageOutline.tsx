import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgImageOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ImageOutline_svg__a)">
        <path
          d="M2.139.174A2.148 2.148 0 0 0 0 2.312v9.723c0 1.174.965 2.139 2.139 2.139h9.722A2.148 2.148 0 0 0 14 12.034V2.313A2.148 2.148 0 0 0 11.861.174H2.14Zm0 1.166h9.722c.544 0 .972.429.972.972v7.955l-2.338-2.262a1.577 1.577 0 0 0-2.188 0l-.797.771-2.403-2.325a1.574 1.574 0 0 0-2.188 0L1.166 8.146V2.312c0-.543.428-.972.972-.972Zm7.389 1.556c-.535 0-1.01.221-1.311.56a1.78 1.78 0 0 0-.44 1.19c0 .421.138.85.44 1.19.301.338.776.56 1.31.56.536 0 1.01-.222 1.312-.56a1.78 1.78 0 0 0 .439-1.19c0-.422-.138-.85-.44-1.19-.3-.339-.775-.56-1.31-.56Zm0 1.166c.243 0 .351.07.439.17a.639.639 0 0 1 .144.414.639.639 0 0 1-.144.414c-.088.099-.196.17-.44.17-.242 0-.35-.071-.438-.17a.638.638 0 0 1-.145-.414c0-.162.057-.316.145-.415.087-.098.196-.169.439-.169ZM4.013 7.174a.4.4 0 0 1 .282.115h.001l2.375 2.298-3.535 3.42H2.14a.964.964 0 0 1-.972-.972V9.769l2.562-2.48a.402.402 0 0 1 .284-.115ZM9.4 8.729a.4.4 0 0 1 .283.115l3.15 3.046v.145a.964.964 0 0 1-.973.972H4.815l4.303-4.163a.4.4 0 0 1 .283-.115Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ImageOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgImageOutline);
