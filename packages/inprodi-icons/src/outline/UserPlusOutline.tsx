import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUserPlusOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M4.614.774a3.19 3.19 0 0 0-3.182 3.181 3.19 3.19 0 0 0 3.182 3.182 3.19 3.19 0 0 0 3.181-3.182A3.19 3.19 0 0 0 4.614.774Zm0 .954A2.22 2.22 0 0 1 6.84 3.955a2.22 2.22 0 0 1-2.227 2.228 2.22 2.22 0 0 1-2.228-2.228 2.22 2.22 0 0 1 2.228-2.227Zm5.727 6.046a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-9.157.636C.532 8.41 0 8.978 0 9.676v.484c0 1.044.54 1.951 1.52 2.554.824.508 1.923.787 3.094.787a6.74 6.74 0 0 0 2.061-.315c-.146-.28-.26-.58-.339-.894-.54.17-1.138.254-1.722.254-1.763 0-3.66-.746-3.66-2.386v-.484c0-.17.106-.312.23-.312h5.49c.183-.35.415-.671.686-.954H1.184Zm9.157.318c.176 0 .318.143.318.318v1.91h1.91a.318.318 0 0 1 0 .636h-1.91V13.5a.318.318 0 0 1-.636 0v-1.91h-1.91a.318.318 0 0 1 0-.636h1.91V9.046c0-.175.142-.318.318-.318Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgUserPlusOutline);
