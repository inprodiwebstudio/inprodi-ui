import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgAttachmentOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.087 0C9.084 0 8.08.38 7.317 1.143L.165 8.297a.532.532 0 1 0 .752.753L8.07 1.895a2.845 2.845 0 0 1 4.034 0 2.845 2.845 0 0 1 0 4.035l-6.752 6.752c-.58.58-1.504.58-2.084 0a1.466 1.466 0 0 1 0-2.085L8.716 5.15a.532.532 0 1 0-.752-.752L2.516 9.845a2.546 2.546 0 0 0 0 3.589 2.546 2.546 0 0 0 3.588 0l6.752-6.752a3.924 3.924 0 0 0 0-5.539A3.904 3.904 0 0 0 10.087 0Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgAttachmentOutline);
