import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HelpTooltip, HelpTooltipProps } from "./HelpTooltip";

export default {
	title     : "Core/UI/HelpTooltip",
	component : HelpTooltip,
} as ComponentMeta<typeof HelpTooltip>;

const Template: ComponentStory<typeof HelpTooltip> = (args : HelpTooltipProps) => {

	return(
		<div style={{ width : "fit-content"}}>
			<HelpTooltip {...args} >
			Hola
			</HelpTooltip>
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	label        : "Lable tooltip",
	position     : "left",
	withinPortal : false,
} as HelpTooltipProps;
