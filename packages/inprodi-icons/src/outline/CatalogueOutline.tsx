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
        d="M2.432.6A1.44 1.44 0 0 0 1 2.032v9.545A3.03 3.03 0 0 0 4.023 14.6h4.932a.477.477 0 1 0 0-.955H4.023a2.061 2.061 0 0 1-2.068-2.068v-.318a.47.47 0 0 1 .477-.477.47.47 0 0 1 .477.477c0 .036.003.071.01.106a1.435 1.435 0 0 0 1.422 1.326h6.363a1.44 1.44 0 0 0 1.432-1.432V3.304a1.44 1.44 0 0 0-1.431-1.431H3.846A1.435 1.435 0 0 0 2.432.6Zm0 .954a.47.47 0 0 1 .477.478V9.916a1.402 1.402 0 0 0-.477-.089c-.168 0-.327.035-.477.089V2.032a.47.47 0 0 1 .477-.478Zm1.432 1.273h6.84a.47.47 0 0 1 .478.477v7.955a.47.47 0 0 1-.478.477H4.341a.47.47 0 0 1-.477-.477V2.827ZM5.6 4.742a.477.477 0 1 0 0 .954h3.818a.477.477 0 1 0 0-.954H5.6Zm.014 2.222a.477.477 0 1 0 0 .954h.972a.477.477 0 1 0 0-.954h-.972Zm2.88 0a.477.477 0 1 0 0 .954h.938a.477.477 0 1 0 0-.954h-.937Zm-2.863 1.59a.477.477 0 1 0 0 .955h.971a.477.477 0 1 0 0-.955h-.971Zm2.88 0a.477.477 0 1 0 0 .955h.938a.477.477 0 1 0 0-.955h-.938Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCatalogueOutline);
