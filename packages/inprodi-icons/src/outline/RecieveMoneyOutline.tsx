import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRecieveMoneyOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.289.836C.584.836 0 1.42 0 2.125v6.26c0 .705.584 1.289 1.289 1.289h11.415c.705 0 1.29-.584 1.29-1.29v-6.26c0-.704-.585-1.288-1.29-1.288H1.29Zm.92 1.105h9.575c0 .61.493 1.104 1.104 1.104v4.42c-.61 0-1.104.493-1.104 1.104H2.209c0-.611-.493-1.105-1.104-1.105V3.045c.611 0 1.104-.493 1.104-1.104Zm4.788.736c-.722 0-1.328.363-1.69.86-.362.498-.52 1.111-.52 1.718s.158 1.22.52 1.717a2.086 2.086 0 0 0 3.379 0c.362-.498.52-1.11.52-1.717s-.158-1.22-.52-1.718a2.086 2.086 0 0 0-1.69-.86Zm0 1.105c.383 0 .605.144.796.405.19.262.308.662.308 1.068s-.118.805-.308 1.067c-.19.262-.413.406-.796.406-.384 0-.606-.144-.797-.406-.19-.262-.308-.661-.308-1.067 0-.406.118-.806.308-1.068.19-.261.413-.405.797-.405Zm-4.42.736a.736.736 0 1 0 0 1.473.736.736 0 0 0 0-1.473Zm8.838 0a.737.737 0 1 0 0 1.473.737.737 0 0 0 0-1.473Zm-4.427 5.884a.553.553 0 0 0-.544.56v1.981l-.53-.53a.551.551 0 1 0-.781.781l1.426 1.426a.552.552 0 0 0 .878-.003l1.423-1.423a.552.552 0 1 0-.781-.78l-.53.53v-1.982a.553.553 0 0 0-.561-.56Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRecieveMoneyOutline);
