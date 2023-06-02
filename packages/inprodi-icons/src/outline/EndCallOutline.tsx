import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgEndCallOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#EndCallOutline_svg__a)">
        <path
          d="M7 .465c-3.268 0-5.146.936-6.143 1.769A2.399 2.399 0 0 0 .073 4.66l.156.625A1.953 1.953 0 0 0 2.41 6.74l1.501-.225A1.58 1.58 0 0 0 5.216 5.29l.296-1.382a.167.167 0 0 1 .113-.128c.234-.07.676-.165 1.375-.165.7 0 1.143.095 1.375.165a.167.167 0 0 1 .113.13l.296 1.38a1.58 1.58 0 0 0 1.306 1.226l1.501.225a1.95 1.95 0 0 0 2.18-1.454l.156-.626a2.399 2.399 0 0 0-.784-2.426C12.146 1.4 10.269.465 7 .465Zm0 1.05c3.071 0 4.67.855 5.47 1.525.403.336.569.846.44 1.365l-.157.626a.886.886 0 0 1-1.007.671l-1.5-.225a.503.503 0 0 1-.436-.409l-.296-1.38a1.222 1.222 0 0 0-.838-.915c-.334-.1-.881-.208-1.676-.208-.795 0-1.342.108-1.676.208h-.001a1.22 1.22 0 0 0-.837.914L4.19 5.068a.504.504 0 0 1-.435.41l-1.502.224a.885.885 0 0 1-1.006-.671l-.156-.625c-.13-.52.036-1.03.439-1.366.8-.67 2.399-1.525 5.47-1.525Zm-.005 4.191a.525.525 0 0 0-.516.532v5.731L5.1 10.591a.524.524 0 1 0-.742.742l2.274 2.274a.525.525 0 0 0 .743 0l2.274-2.274a.525.525 0 1 0-.742-.742l-1.379 1.378V6.24a.525.525 0 0 0-.533-.533Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="EndCallOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgEndCallOutline);
