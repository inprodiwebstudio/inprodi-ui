import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTruckOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.432 2.174C.647 2.174 0 2.784 0 3.524v5.1c0 .74.647 1.35 1.432 1.35h.227c.21.69.887 1.2 1.682 1.2.795 0 1.472-.51 1.682-1.2h3.954c.21.69.887 1.2 1.682 1.2.795 0 1.472-.51 1.682-1.2h.227c.785 0 1.432-.61 1.432-1.35v-1.91c0-.189-.042-.375-.123-.547l-.94-1.991c-.228-.487-.743-.802-1.307-.802h-2.1c-.082-.67-.686-1.2-1.416-1.2H1.432Zm0 .9h6.682c.269 0 .477.196.477.45v5.55H5.023c-.21-.69-.887-1.2-1.682-1.2-.795 0-1.472.51-1.682 1.2h-.227c-.27 0-.477-.197-.477-.45v-5.1c0-.254.207-.45.477-.45Zm8.113 1.2h2.085c.19 0 .358.103.435.267l.582 1.233H9.544v-1.5Zm0 2.4h3.496c.002.013.005.027.005.04v1.91c0 .253-.208.45-.478.45h-.227c-.21-.69-.886-1.2-1.682-1.2-.422 0-.81.143-1.114.381V6.674Zm-6.204 2.1c.43 0 .768.31.791.708a.425.425 0 0 0 0 .083c-.023.399-.362.709-.791.709-.43 0-.768-.31-.791-.709a.424.424 0 0 0 0-.083c.023-.399.362-.708.79-.708Zm7.318 0c.444 0 .795.33.795.75 0 .418-.35.75-.795.75-.444 0-.795-.332-.795-.75 0-.42.35-.75.795-.75Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgTruckOutline);
