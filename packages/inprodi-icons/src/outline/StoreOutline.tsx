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
          d="M1.925.356C1.255.356.7.911.7 1.581v.95L.037 4.186a.525.525 0 0 0 .032.455c.08.558.303 1.07.63 1.497v7.343a.525.525 0 0 0 .526.525h11.55a.525.525 0 0 0 .525-.525V6.141c.33-.428.553-.943.633-1.503a.524.524 0 0 0 .03-.451L13.3 2.53v-.948c0-.67-.554-1.226-1.225-1.226H1.925Zm0 1.05h10.15c.104 0 .175.072.175.175v1.05c0 .067.013.133.038.195l.636 1.592a2.084 2.084 0 0 1-2.074 1.889 2.086 2.086 0 0 1-1.486-.616.525.525 0 0 0-.723-.02A2.43 2.43 0 0 1 7 6.308a2.43 2.43 0 0 1-1.642-.635.525.525 0 0 0-.723.019c-.38.381-.902.616-1.486.616a2.083 2.083 0 0 1-2.074-1.89l.636-1.59a.525.525 0 0 0 .038-.195v-1.05c0-.104.072-.176.175-.176Zm7 .7a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm-5.657 4.57c.568.401 1.234.68 1.982.68s1.414-.279 1.983-.68c.528.4 1.156.68 1.867.68.506 0 .98-.122 1.4-.338v5.939h-1.4V8.932a.525.525 0 0 0-.525-.525h-3.85a.525.525 0 0 0-.525.525v4.025h-4.2V7.018c.42.216.894.339 1.4.339.711 0 1.339-.281 1.868-.681ZM7 9.456h2.8v3.501H7v-3.5Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="StoreOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgStoreOutline);
