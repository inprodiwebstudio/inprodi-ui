import * as React from "react";
import { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.23.6c-.711 0-1.422.27-1.962.809L7.295 3.382c-.933.933-1.01 2.357-.328 3.43l-.755.755c-1.072-.681-2.497-.606-3.43.327L.81 9.867a2.784 2.784 0 0 0 0 3.924 2.784 2.784 0 0 0 3.924 0l1.973-1.973c.933-.933 1.008-2.358.327-3.43l.756-.755c1.072.681 2.496.605 3.429-.328l1.973-1.973a2.783 2.783 0 0 0 0-3.923A2.765 2.765 0 0 0 11.23.6Zm0 1.154c.411 0 .823.159 1.14.476a1.604 1.604 0 0 1 0 2.28l-1.974 1.974a1.595 1.595 0 0 1-1.787.329l1.27-1.27a.58.58 0 1 0-.822-.821l-1.27 1.27c-.263-.592-.159-1.3.33-1.788L10.09 2.23a1.607 1.607 0 0 1 1.14-.476ZM4.745 8.24c.221 0 .44.055.647.147l-1.27 1.269a.581.581 0 1 0 .822.821L6.213 9.21c.263.59.16 1.298-.328 1.786L3.91 12.97a1.604 1.604 0 0 1-2.28-.001 1.604 1.604 0 0 1 0-2.28l1.975-1.974a1.606 1.606 0 0 1 1.14-.475Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLink;