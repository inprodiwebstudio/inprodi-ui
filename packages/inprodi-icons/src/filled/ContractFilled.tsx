import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgContractFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M1 11.9V2.1C1 .94 1.94 0 3.1 0H8l4.2 4.2v7.7a2.1 2.1 0 0 1-2.1 2.1h-7A2.1 2.1 0 0 1 1 11.9Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8 6.3H3.8a.7.7 0 1 1 0-1.4H8a.7.7 0 1 1 0 1.4ZM8 2.8V0l4.2 4.2H9.4A1.4 1.4 0 0 1 8 2.8ZM7.555 12.6c-.51 0-.893-.283-1.17-.703a5.696 5.696 0 0 1-.43.218.445.445 0 0 1-.364-.812 5.1 5.1 0 0 0 .421-.22 5.543 5.543 0 0 1-.239-1.6c0-1 .587-1.782 1.337-1.782.647 0 1.336.566 1.336 1.617 0 .894-.67 1.613-1.317 2.1.121.181.265.292.427.292.319 0 .499-.162.757-.43.21-.216.446-.46.81-.46.39 0 .632.176.808.306.143.105.198.138.297.138a.445.445 0 1 1 0 .89c-.399 0-.644-.18-.823-.31-.136-.1-.188-.135-.281-.135 0 .012-.098.115-.171.189-.27.28-.679.702-1.398.702Zm-.446-4.009c-.151 0-.445.314-.445.891 0 .333.043.713.124 1.065.418-.352.767-.782.767-1.229 0-.501-.261-.727-.446-.727ZM4.5 9.1h-.7a.702.702 0 0 1-.7-.7c0-.385.315-.7.7-.7h.7c.385 0 .7.315.7.7 0 .385-.315.7-.7.7Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgContractFilled);
