import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStoreOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#StoreOutline_svg__a)">
        <path
          d="M1.925.294C1.255.294.7.85.7 1.52v.949L.037 4.124a.525.525 0 0 0 .032.456c.08.558.303 1.07.63 1.497v7.343a.525.525 0 0 0 .526.525h11.55a.526.526 0 0 0 .525-.525V6.078c.33-.428.553-.942.633-1.502a.524.524 0 0 0 .03-.452L13.3 2.468v-.949c0-.67-.554-1.225-1.225-1.225H1.925Zm0 1.05h10.15c.104 0 .175.072.175.175v1.05c0 .067.013.133.038.195l.636 1.591a2.084 2.084 0 0 1-2.074 1.89 2.086 2.086 0 0 1-1.486-.617.525.525 0 0 0-.723-.019A2.43 2.43 0 0 1 7 6.244a2.43 2.43 0 0 1-1.642-.635.525.525 0 0 0-.723.02c-.38.38-.902.615-1.486.615a2.083 2.083 0 0 1-2.074-1.889l.636-1.591a.525.525 0 0 0 .038-.195V1.52c0-.103.072-.175.175-.175Zm7 .7a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm-5.657 4.57c.568.4 1.234.68 1.982.68s1.414-.28 1.983-.68c.528.4 1.156.68 1.867.68.506 0 .98-.123 1.4-.338v5.939h-1.4V8.869a.525.525 0 0 0-.525-.525h-3.85a.525.525 0 0 0-.525.525v4.026h-4.2V6.956c.42.216.894.338 1.4.338.711 0 1.339-.28 1.868-.68ZM7 9.393h2.8v3.5H7v-3.5Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="StoreOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgStoreOutline);
