import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChartOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M11.848.774c-.554 0-1.037.227-1.345.573-.308.347-.45.788-.45 1.221 0 .216.036.433.109.64l-2.34 1.839c-.283-.187-.61-.325-1-.325a1.78 1.78 0 0 0-1.214.48L3.53 4.015c.024-.123.063-.245.063-.37 0-.434-.142-.875-.45-1.221-.309-.347-.792-.574-1.345-.574-.553 0-1.037.227-1.345.574-.308.346-.45.787-.45 1.221 0 .434.142.875.45 1.221.308.347.792.574 1.345.574a1.78 1.78 0 0 0 1.215-.48L5.09 6.145c-.024.124-.063.246-.063.37 0 .434.142.875.45 1.222.308.346.792.573 1.345.573.553 0 1.036-.227 1.344-.573.308-.347.45-.788.45-1.222 0-.215-.035-.432-.108-.639l2.34-1.84c.283.187.61.326.999.326.553 0 1.036-.227 1.344-.574.308-.346.45-.787.45-1.22 0-.434-.142-.875-.45-1.222-.308-.346-.79-.573-1.344-.573Zm0 1.076c.284 0 .429.088.54.212.11.125.178.312.178.506a.775.775 0 0 1-.179.506c-.11.125-.255.212-.54.212-.266 0-.398-.086-.506-.198a.531.531 0 0 0-.06-.091.765.765 0 0 1-.151-.429c0-.194.067-.381.178-.506.11-.124.256-.212.54-.212ZM1.798 2.927c.284 0 .43.087.54.212.11.124.178.312.178.506a.775.775 0 0 1-.178.506c-.11.125-.256.212-.54.212-.284 0-.43-.087-.54-.212a.775.775 0 0 1-.178-.506c0-.194.067-.382.178-.506.11-.125.256-.212.54-.212ZM6.823 5.8c.267 0 .398.085.507.198a.538.538 0 0 0 .06.091c.082.12.15.264.15.428a.775.775 0 0 1-.177.507c-.111.124-.256.211-.54.211-.284 0-.43-.087-.54-.211a.775.775 0 0 1-.178-.507c0-.194.067-.381.178-.506.11-.124.256-.211.54-.211Zm5.023 0c-.986 0-1.796.81-1.796 1.796v5.382c0 .986.81 1.797 1.796 1.797.985 0 1.796-.811 1.796-1.797V7.595c0-.986-.81-1.796-1.796-1.796Zm0 1.076c.404 0 .72.316.72.72v5.382c0 .404-.316.72-.72.72a.711.711 0 0 1-.72-.72V7.595c0-.404.316-.72.72-.72Zm-10.05.002C.81 6.877 0 7.687 0 8.673v4.304c0 .986.81 1.797 1.796 1.797s1.797-.811 1.797-1.797V8.673c0-.985-.811-1.796-1.797-1.796Zm0 1.077c.404 0 .72.315.72.72v4.303c0 .404-.316.72-.72.72a.711.711 0 0 1-.72-.72V8.673a.71.71 0 0 1 .72-.719Zm5.027 1.793c-.986 0-1.797.81-1.797 1.796v1.434c0 .986.811 1.797 1.797 1.797.986 0 1.797-.811 1.797-1.797v-1.434c0-.985-.811-1.796-1.797-1.796Zm0 1.076c.404 0 .72.316.72.72v1.434c0 .404-.316.72-.72.72a.712.712 0 0 1-.72-.72v-1.434c0-.404.316-.72.72-.72Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChartOutline);