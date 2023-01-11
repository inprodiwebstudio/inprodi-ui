import React, { SVGProps } from "react";
import { IconProps, IconsSizeOptions } from "./Icon.interface";

const IconHoc = (Icon : (props: SVGProps<SVGSVGElement>) => JSX.Element) => (props : IconProps) => {
    const { size = 16, ...rest} = props;
    const getSize = () => {
        if (typeof(size) === "number") {
            return size;
        }
        const sizes: IconsSizeOptions = {
            "xs" : 10,
            "sm" : 12,
            "md" : 14,
            "lg" : 16,
            "xl" : 20,
        };
        return sizes[size];
    };
    return (
        <Icon {...rest} width={getSize()} height={getSize()}/>
    );
}

export default IconHoc