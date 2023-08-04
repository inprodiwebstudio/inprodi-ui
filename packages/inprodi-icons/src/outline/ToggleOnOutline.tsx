import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgToggleOnOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.818 3.382A3.825 3.825 0 0 0 0 7.2a3.825 3.825 0 0 0 3.818 3.818h2.625a.48.48 0 0 0 .156 0h3.583a.486.486 0 0 0 .055-.003A3.824 3.824 0 0 0 14 7.2a3.824 3.824 0 0 0-3.818-3.818H3.818Zm0 .954h.072L.958 7.268c0-.023-.003-.045-.003-.068a2.856 2.856 0 0 1 2.863-2.864Zm1.42 0h1.356L1.75 9.181a2.853 2.853 0 0 1-.545-.81.46.46 0 0 0 .015-.014L5.226 4.35a.464.464 0 0 0 .013-.014Zm4.944 0A2.856 2.856 0 0 1 13.046 7.2a2.856 2.856 0 0 1-2.864 2.864A2.856 2.856 0 0 1 7.318 7.2a2.856 2.856 0 0 1 2.864-2.864Zm-3.31 1.072c-.296.542-.508 1.133-.508 1.792 0 .033.017.06.018.092l-2.931 2.746c-.33-.042-.641-.14-.925-.283l4.347-4.347ZM6.606 8.39c.113.337.284.63.481.918l-.755.755H4.82L6.605 8.39ZM7.7 10.044l.024.02h-.043l.019-.02Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgToggleOnOutline);
