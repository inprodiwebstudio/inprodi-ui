import * as React from "react";
import { SVGProps } from "react";
const SvgProject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.658.6C.748.6 0 1.349 0 2.258v10.684c0 .028.004.056.009.084.045.87.769 1.574 1.649 1.574h10.684c.91 0 1.658-.749 1.658-1.658V4.468c0-.909-.749-1.657-1.658-1.657H3.316V1.52A.93.93 0 0 0 2.395.6h-.737Zm0 1.105h.553v1.567c-.01.06-.01.12 0 .18v7.832h-.553c-.196 0-.378.05-.553.113v-9.14c0-.311.241-.552.553-.552Zm1.658 2.21h9.026c.312 0 .553.242.553.553v8.474c0 .312-.241.553-.553.553H1.658a.544.544 0 0 1-.553-.553c0-.312.241-.553.553-.553h.737a.93.93 0 0 0 .92-.92V3.915Zm7.91 1.838c-.02 0-.04.002-.059.005H9.763a.553.553 0 1 0 0 1.105h.14L8.658 8.108 7.207 6.657a.553.553 0 0 0-.782 0L4.583 8.499a.553.553 0 1 0 .781.781L6.816 7.83 8.267 9.28a.553.553 0 0 0 .782 0l1.635-1.635v.14a.553.553 0 1 0 1.106 0v-1.41a.553.553 0 0 0-.564-.622Zm-6.252 4.794a.553.553 0 1 0 0 1.106h6.263a.553.553 0 1 0 0-1.106H4.974Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgProject;
