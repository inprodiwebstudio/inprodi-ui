import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgGridOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.75.774C.79.774 0 1.564 0 2.524v3.11c0 .96.79 1.75 1.75 1.75h3.111c.96 0 1.75-.79 1.75-1.75v-3.11c0-.96-.79-1.75-1.75-1.75H1.75Zm7.389 0c-.96 0-1.75.79-1.75 1.75v3.11c0 .96.79 1.75 1.75 1.75h3.111c.96 0 1.75-.79 1.75-1.75v-3.11c0-.96-.79-1.75-1.75-1.75H9.139ZM1.75 1.94h3.111c.33 0 .583.254.583.584v3.11c0 .33-.254.584-.583.584H1.75a.575.575 0 0 1-.583-.583V2.524c0-.33.254-.584.583-.584Zm7.389 0h3.111c.33 0 .583.254.583.584v3.11c0 .33-.254.584-.583.584H9.139a.575.575 0 0 1-.583-.583V2.524c0-.33.254-.584.583-.584ZM1.75 8.162c-.96 0-1.75.79-1.75 1.75v3.112c0 .96.79 1.75 1.75 1.75h3.111c.96 0 1.75-.79 1.75-1.75V9.912c0-.96-.79-1.75-1.75-1.75H1.75Zm7.389 0c-.96 0-1.75.79-1.75 1.75v3.112c0 .96.79 1.75 1.75 1.75h3.111c.96 0 1.75-.79 1.75-1.75V9.912c0-.96-.79-1.75-1.75-1.75H9.139ZM1.75 9.33h3.111c.33 0 .583.254.583.583v3.112c0 .329-.254.583-.583.583H1.75a.575.575 0 0 1-.583-.583V9.912c0-.329.254-.583.583-.583Zm7.389 0h3.111c.33 0 .583.254.583.583v3.112c0 .329-.254.583-.583.583H9.139a.575.575 0 0 1-.583-.583V9.912c0-.329.254-.583.583-.583Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgGridOutline);
