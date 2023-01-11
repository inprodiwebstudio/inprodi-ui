import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVoteOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.768-.313c-.908 0-1.656.748-1.656 1.656v11.224H.56a.552.552 0 1 0 0 1.104h12.88a.552.552 0 1 0 0-1.104h-.552V1.343c0-.908-.748-1.656-1.656-1.656H2.768Zm0 1.104h8.464c.312 0 .552.24.552.552v11.224H2.216V1.343c0-.312.24-.552.552-.552Zm7.355 2.2a.552.552 0 0 0-.385.17l-.53.53-.53-.53a.552.552 0 1 0-.78.78l.53.53-.53.53a.552.552 0 1 0 .78.78l.53-.53.53.53a.552.552 0 1 0 .78-.78l-.53-.53.53-.53a.553.553 0 0 0-.395-.95Zm-6.251.928a.552.552 0 1 0 0 1.104h2.576a.552.552 0 1 0 0-1.104H3.872Zm4.416 3.864a.552.552 0 0 0-.552.552v1.84a.552.552 0 0 0 .552.552h1.84a.552.552 0 0 0 .552-.552v-1.84a.552.552 0 0 0-.552-.552h-1.84Zm-4.416.92a.552.552 0 1 0 0 1.104h2.576a.552.552 0 1 0 0-1.104H3.872Zm4.968.184h.736v.736H8.84v-.736Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgVoteOutline);
