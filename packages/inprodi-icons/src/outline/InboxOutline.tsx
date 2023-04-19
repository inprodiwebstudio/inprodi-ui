import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgInboxOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#InboxOutline_svg__a)">
        <path
          d="M2.528 0A2.537 2.537 0 0 0 0 2.528v8.944A2.537 2.537 0 0 0 2.528 14h8.944A2.537 2.537 0 0 0 14 11.472V2.528A2.537 2.537 0 0 0 11.472 0H2.528Zm0 1.167h8.944c.759 0 1.361.602 1.361 1.36v5.25h-3.53a.583.583 0 0 0-.584.584c0 .625-.225 1.027-.55 1.313-.323.286-.77.437-1.169.437s-.846-.151-1.17-.437c-.324-.286-.549-.688-.549-1.313a.583.583 0 0 0-.583-.583H1.167v-5.25c0-.759.602-1.361 1.36-1.361ZM1.167 8.944h3.07c.129.652.393 1.227.822 1.605.557.491 1.262.729 1.941.729.68 0 1.384-.238 1.941-.73.428-.377.693-.952.822-1.604h3.07v2.528c0 .759-.602 1.361-1.36 1.361H2.527a1.353 1.353 0 0 1-1.361-1.36V8.943Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="InboxOutline_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgInboxOutline);
