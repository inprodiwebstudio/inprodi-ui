import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTransferOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#TransferOutline_svg__a)">
        <path
          d="M10.49.174a.552.552 0 0 0-.384.948l2.002 2.001H.56a.552.552 0 1 0 0 1.104h11.547L10.107 6.23a.552.552 0 1 0 .78.78l2.944-2.943a.552.552 0 0 0 0-.78L10.886.34a.553.553 0 0 0-.396-.167ZM3.493 7.166a.552.552 0 0 0-.38.167L.17 10.277a.552.552 0 0 0 0 .78l2.944 2.945a.554.554 0 0 0 .788.008.553.553 0 0 0-.008-.789L1.892 11.22H13.44a.552.552 0 1 0 0-1.103H1.892l2.002-2.002a.552.552 0 0 0-.4-.948Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="TransferOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgTransferOutline);
