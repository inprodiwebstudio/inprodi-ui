import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgComplexListOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ComplexListOutline_svg__a)">
        <path
          d="M.56 1.34a.552.552 0 1 0 0 1.104h5.52a.552.552 0 1 0 0-1.104H.56Zm8.832 0a.552.552 0 1 0 0 1.104h1.472a.552.552 0 1 0 0-1.104H9.392Zm3.68 0a.552.552 0 1 0 0 1.104h.368a.552.552 0 1 0 0-1.104h-.368ZM.56 3.916a.552.552 0 1 0 0 1.104h3.68a.552.552 0 1 0 0-1.104H.56Zm8.832 0a.552.552 0 1 0 0 1.104h1.472a.552.552 0 1 0 0-1.104H9.392Zm3.68 0a.552.552 0 1 0 0 1.104h.368a.552.552 0 1 0 0-1.104h-.368ZM.56 6.492a.552.552 0 1 0 0 1.104h4.784a.552.552 0 1 0 0-1.104H.56Zm8.832 0a.552.552 0 1 0 0 1.104h1.472a.552.552 0 1 0 0-1.104H9.392Zm3.68 0a.552.552 0 1 0 0 1.104h.368a.552.552 0 1 0 0-1.104h-.368ZM.56 9.068a.552.552 0 1 0 0 1.104h2.576a.552.552 0 1 0 0-1.104H.56Zm8.832 0a.552.552 0 1 0 0 1.104h1.472a.552.552 0 1 0 0-1.104H9.392Zm3.68 0a.552.552 0 1 0 0 1.104h.368a.552.552 0 1 0 0-1.104h-.368ZM.56 11.645a.554.554 0 0 0-.56.552.552.552 0 0 0 .56.552h6.256a.554.554 0 0 0 .56-.553.552.552 0 0 0-.56-.551H.56Zm8.832 0a.554.554 0 0 0-.56.552.552.552 0 0 0 .56.552h1.472a.554.554 0 0 0 .517-.766.552.552 0 0 0-.517-.338H9.392Zm3.68 0a.554.554 0 0 0-.517.765.552.552 0 0 0 .517.338h.368a.554.554 0 0 0 .56-.551.55.55 0 0 0-.56-.552h-.368Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ComplexListOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgComplexListOutline);
