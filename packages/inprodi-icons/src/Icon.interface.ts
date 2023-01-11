import { SVGProps } from "react";

export type IconsSize =  
| "xs"
| "sm"
| "md"
| "lg"
| "xl";

export interface IconProps extends SVGProps<SVGSVGElement> {
    size ?: number | IconsSize,
};

export type IconsSizeOptions = { [key in IconsSize]: number };