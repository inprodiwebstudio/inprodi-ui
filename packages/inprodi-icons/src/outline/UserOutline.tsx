import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUserOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.6.836a3.508 3.508 0 0 0-3.5 3.5c0 1.926 1.573 3.5 3.5 3.5s3.5-1.574 3.5-3.5c0-1.927-1.573-3.5-3.5-3.5Zm0 1.05c1.36 0 2.45 1.09 2.45 2.45 0 1.359-1.09 2.45-2.45 2.45s-2.45-1.091-2.45-2.45c0-1.36 1.09-2.45 2.45-2.45Zm-4.208 7.35A1.4 1.4 0 0 0 1 10.628v.533c0 1.261.798 2.237 1.857 2.822 1.06.584 2.402.853 3.743.853 1.341 0 2.683-.269 3.743-.853.903-.499 1.583-1.295 1.774-2.297h.084v-1.058c0-.763-.63-1.392-1.394-1.392H2.393Zm0 1.05h8.415c.196 0 .344.147.344.342v.008h-.001v.525c0 .838-.471 1.437-1.315 1.903-.843.465-2.039.722-3.235.722-1.196 0-2.392-.257-3.235-.722-.844-.466-1.315-1.065-1.315-1.903v-.533c0-.195.147-.342.342-.342Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgUserOutline);
