import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCatalogueOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.432-.313A1.44 1.44 0 0 0 1 1.119v9.545a3.03 3.03 0 0 0 3.023 3.023h4.932a.477.477 0 1 0 0-.955H4.023a2.061 2.061 0 0 1-2.068-2.068v-.318a.47.47 0 0 1 .477-.478.47.47 0 0 1 .477.478c0 .036.003.071.01.106a1.435 1.435 0 0 0 1.422 1.326h6.363a1.44 1.44 0 0 0 1.432-1.432V2.39A1.44 1.44 0 0 0 10.705.96H3.846A1.435 1.435 0 0 0 2.432-.313Zm0 .954a.47.47 0 0 1 .477.478V9.003a1.402 1.402 0 0 0-.477-.089c-.168 0-.327.035-.477.089V1.119A.47.47 0 0 1 2.432.64Zm1.432 1.273h6.84a.47.47 0 0 1 .478.477v7.955a.47.47 0 0 1-.478.477H4.341a.47.47 0 0 1-.477-.477V1.914ZM5.6 3.829a.477.477 0 1 0 0 .954h3.818a.477.477 0 1 0 0-.954H5.6Zm.014 2.221a.477.477 0 1 0 0 .955h.972a.477.477 0 1 0 0-.955h-.972Zm2.88 0a.477.477 0 1 0 0 .955h.938a.477.477 0 1 0 0-.955h-.937ZM5.632 7.641a.477.477 0 1 0 0 .955h.971a.477.477 0 1 0 0-.955h-.971Zm2.88 0a.477.477 0 1 0 0 .955h.938a.477.477 0 1 0 0-.955h-.938Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCatalogueOutline);
