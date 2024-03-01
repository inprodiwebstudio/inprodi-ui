import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDoctorbagOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DoctorbagOutline_svg__a)">
        <path
          d="M5.075.174c-.67 0-1.225.584-1.225 1.289v1.658H1.925C.868 3.12 0 4.035 0 5.147v7c0 1.113.868 2.027 1.925 2.027h10.15c1.057 0 1.925-.914 1.925-2.027v-7c0-1.112-.868-2.026-1.925-2.026H10.15V1.463c0-.705-.555-1.29-1.225-1.29h-3.85Zm0 1.105h3.85c.103 0 .175.075.175.184v1.658H4.9V1.463c0-.109.072-.184.175-.184Zm-3.15 2.947h10.15c.49 0 .875.406.875.921v.184H1.05v-.184c0-.515.386-.92.875-.92Zm-.875 2.21h11.9v5.711c0 .515-.386.921-.875.921H1.925c-.49 0-.875-.406-.875-.92V6.436Zm5.942 1.466a.513.513 0 0 0-.369.168.569.569 0 0 0-.148.393V9.2h-.7a.502.502 0 0 0-.376.159.555.555 0 0 0-.156.393.578.578 0 0 0 .156.394.523.523 0 0 0 .376.16h.7v.736a.579.579 0 0 0 .151.396.524.524 0 0 0 .374.164.503.503 0 0 0 .374-.164.556.556 0 0 0 .151-.396v-.737h.7a.501.501 0 0 0 .376-.159.556.556 0 0 0 .156-.394.578.578 0 0 0-.156-.393.524.524 0 0 0-.376-.16h-.7v-.736a.578.578 0 0 0-.154-.399.524.524 0 0 0-.38-.162Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DoctorbagOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDoctorbagOutline);
