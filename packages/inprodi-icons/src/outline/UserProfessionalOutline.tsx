import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUserProfessionalOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.6.774a3.508 3.508 0 0 0-3.5 3.5c0 1.926 1.573 3.5 3.5 3.5s3.5-1.574 3.5-3.5c0-1.927-1.573-3.5-3.5-3.5Zm0 1.05c1.36 0 2.45 1.09 2.45 2.45 0 1.359-1.09 2.45-2.45 2.45s-2.45-1.091-2.45-2.45c0-1.36 1.09-2.45 2.45-2.45Zm-4.208 7.35A1.4 1.4 0 0 0 1 10.566v.532c0 1.262.798 2.238 1.857 2.822 1.06.585 2.402.854 3.743.854 1.341 0 2.683-.269 3.743-.854 1.06-.584 1.857-1.56 1.857-2.82v-.534c0-.763-.63-1.392-1.393-1.392H2.393Zm0 1.05h8.415c.196 0 .344.147.344.342l-.001.532c0 .84-.471 1.438-1.315 1.904-.843.465-2.039.721-3.235.721-1.196 0-2.392-.256-3.235-.721-.844-.466-1.315-1.065-1.315-1.904v-.532c0-.195.147-.343.342-.343Zm5.433.7a.526.526 0 1 0 0 1.05h1.4a.524.524 0 0 0 .376-.9.527.527 0 0 0-.376-.15h-1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgUserProfessionalOutline);
