import React           from "react";
import { HelpOutline } from "@inprodi/icons";
import {
	Box,
	BoxProps,
	Tooltip,
	TooltipProps,
	MantineNumberSize,
} from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";

export interface HelpTooltipProps extends Omit<TooltipProps, "children"> {
	/**
	* Icon wrapper props
	*/
	boxProps ?: Omit<BoxProps, "children">;
	/**
	* HelpIcon size
	*/
    size ?: MantineNumberSize;
	/**
	* Tooltip position relative to target element (default) or mouse (floating)
	*/
	position ?: FloatingPosition;
}

export const HelpTooltip = ({ boxProps, size, ...rest } : HelpTooltipProps) => {
	return (
		<Tooltip
			multiline
			maw={280}
			position="left-end"
			{...rest}
		>
			<Box style={{ cursor : "pointer"}} {...boxProps}>
				<HelpOutline size={size}/>
			</Box>
		</Tooltip>
	);
};

export default HelpTooltip;
