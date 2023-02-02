import React, { SVGProps } from "react";
import { IconProps, IconsSizeOptions } from "./Icon.interface";

const IconHoc = (Icon : (props: SVGProps<SVGSVGElement>) => JSX.Element) => (props : IconProps) => {
    const { size = 16, ...rest} = props;
    const getSize = () => {
        if (typeof(size) === "number") {
            return size;
        }
        const sizes: IconsSizeOptions = {
            "xs" : 12,
            "sm" : 14,
            "md" : 16,
            "lg" : 20,
            "xl" : 24,
        };
        return sizes[size];
    };
    return (
        <Icon {...rest} width={getSize()} height={getSize()}/>
    );
}

export default IconHoc