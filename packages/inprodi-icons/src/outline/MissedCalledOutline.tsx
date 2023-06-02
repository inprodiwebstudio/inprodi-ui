import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMissedCalledOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#MissedCalledOutline_svg__a)">
        <path
          d="M11.375.903a.524.524 0 0 0-.068.005H9.274a.525.525 0 1 0 0 1.05h.793L6.988 4.905l-3.3-3.151a.525.525 0 1 0-.724.758l3.663 3.5a.525.525 0 0 0 .725 0l3.497-3.35v.87a.523.523 0 0 0 .899.376.523.523 0 0 0 .15-.375V1.504a.526.526 0 0 0-.523-.601ZM7 7.207c-3.277 0-5.153.942-6.143 1.769a2.402 2.402 0 0 0-.785 2.426l.157.625a1.957 1.957 0 0 0 2.18 1.455l1.501-.225a1.577 1.577 0 0 0 1.306-1.227l.296-1.381a.164.164 0 0 1 .113-.13c.25-.074.69-.163 1.375-.163.684 0 1.124.089 1.375.164a.164.164 0 0 1 .113.128l.296 1.382c.137.64.659 1.13 1.306 1.227l1.5.225a1.956 1.956 0 0 0 2.181-1.455l.157-.625a2.402 2.402 0 0 0-.785-2.426c-.99-.827-2.866-1.77-6.143-1.77Zm0 1.05c3.079 0 4.675.86 5.47 1.524.397.331.566.86.44 1.365v.001l-.157.626a.893.893 0 0 1-1.007.67l-1.5-.224a.521.521 0 0 1-.436-.409l-.296-1.38v-.001a1.22 1.22 0 0 0-.838-.915c-.356-.106-.9-.208-1.676-.208-.775 0-1.32.102-1.676.208-.43.13-.746.487-.838.915L4.19 11.81a.522.522 0 0 1-.435.409l-1.501.225a.893.893 0 0 1-1.007-.671l-.156-.626a1.347 1.347 0 0 1 .438-1.366C2.325 9.116 3.921 8.256 7 8.256Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="MissedCalledOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMissedCalledOutline);
