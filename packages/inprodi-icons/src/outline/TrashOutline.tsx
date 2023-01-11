import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTrashOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.657.774c-1.227 0-2.25.917-2.421 2.1H1.84a.525.525 0 0 0-.168 0H.533a.525.525 0 1 0 0 1.05h.748l.881 9.11c.095.982.93 1.74 1.916 1.74h5.158c.987 0 1.821-.758 1.916-1.74l.882-9.11h.748a.526.526 0 1 0 0-1.05h-1.14a.524.524 0 0 0-.167 0H9.079a2.458 2.458 0 0 0-2.422-2.1Zm0 1.05c.658 0 1.198.443 1.352 1.05H5.306a1.387 1.387 0 0 1 1.351-1.05Zm-4.322 2.1h8.644l-.872 9.009a.868.868 0 0 1-.871.79H4.078a.87.87 0 0 1-.87-.79l-.873-9.01Zm3.09 1.742a.525.525 0 0 0-.518.533v5.25a.525.525 0 1 0 1.05 0v-5.25a.525.525 0 0 0-.533-.533Zm2.45 0a.525.525 0 0 0-.518.533v5.25a.525.525 0 1 0 1.05 0v-5.25a.525.525 0 0 0-.533-.533Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgTrashOutline);
