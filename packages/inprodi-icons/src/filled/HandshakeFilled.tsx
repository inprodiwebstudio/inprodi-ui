import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHandshakeFilled(props: SVGProps<SVGSVGElement>) {
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
        opacity={0.35}
        d="M.327 8.958 1.42 4.303c.161-.685.7-1.1 1.27-1.464 1.292-.83 2.366-1.789 3.296-1.789 1.549 0 2.56 1.3 3.271 2.27.91 1.237 3.44 4.898 3.761 5.228.404.414.403 1.16-.027 1.686-.561.686-1.37.43-1.37.43s.008.617-.505 1.05c-.526.445-1.154.297-1.154.297s-.038.505-.583.849c-.557.351-1.276-.063-1.276-.063s-.024.523-.355.737c-.372.242-.83.181-1.17-.057C6.14 13.17.328 8.958.328 8.958Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M13.87 7.184c-.422-1.179-.924-3.232-1.179-4.014-.254-.783-.566-1.055-1.465-1.326C10.989 1.774 8.756 1 8.044 1c-.233 0-.621.08-1.242.28-.397.126-1.117.321-1.365.615-.23.272-.878 1.667-1.266 2.525-.188.415.039.912.463 1.006.524.114 1.141.042 1.704-.471.43-.393.987-.874 1.348-1.183a.523.523 0 0 1 .717.026c.302.294.712.696.858.852.361.383 3.527 3.636 3.746 3.894.239.283.306.606.306.606s1.046-.598.556-1.966ZM6.36 13.367l.34-.34a1.1 1.1 0 0 0-1.554-1.555l-.34.34a1.1 1.1 0 0 0 1.554 1.555ZM3.42 11.206l.34-.34a1.1 1.1 0 0 0-1.554-1.554l-.34.34a1.1 1.1 0 0 0 1.555 1.554Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="m1.876 10.019.34-.34A1.1 1.1 0 0 0 .662 8.124l-.34.34a1.1 1.1 0 0 0 1.554 1.555ZM4.831 12.472l.537-.537a1.1 1.1 0 0 0-1.554-1.555l-.537.538a1.1 1.1 0 0 0 1.554 1.554Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgHandshakeFilled);
