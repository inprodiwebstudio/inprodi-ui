import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStopwatchOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M5.268.836a.512.512 0 1 0 0 1.024h3.756a.512.512 0 1 0 0-1.024H5.268Zm6.699 1.36a.513.513 0 0 0-.345.885l.801.78a.512.512 0 1 0 .715-.735l-.802-.78a.512.512 0 0 0-.37-.15Zm-4.82.347A6.154 6.154 0 0 0 1 8.69a6.154 6.154 0 0 0 6.146 6.146 6.154 6.154 0 0 0 6.147-6.146 6.154 6.154 0 0 0-6.147-6.147Zm0 1.025a5.114 5.114 0 0 1 5.121 5.122 5.114 5.114 0 0 1-5.122 5.122A5.114 5.114 0 0 1 2.024 8.69a5.114 5.114 0 0 1 5.122-5.122Zm-.009 1.017a.512.512 0 0 0-.504.52V8.86a.512.512 0 1 0 1.025 0V5.104a.512.512 0 0 0-.52-.52Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgStopwatchOutline);
