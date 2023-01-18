import React                             from "react";
import { CirclesOutline }                from "@inprodi/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextGroup, TextGroupProps }     from "./TextGroup";

export default {
	title     : "Core/Typography/TextGroup",
	component : TextGroup,
	argTypes  : {
		size      : { control : "text" },
		color     : { control : "color" },
		rightIcon : { control : "disabled" },
		leftIcon  : { control : "disabled" },
	},
} as ComponentMeta<typeof TextGroup>;

const Template: ComponentStory<typeof TextGroup> = (args : TextGroupProps) => {
	return(
		<TextGroup {...args}>Text Icon</TextGroup>
	);
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
	leftIcon : <CirclesOutline />,
};
export const RightIcon = Template.bind({});
RightIcon.args = {
	rightIcon : <CirclesOutline />,
};
export const BothIcon = Template.bind({});
BothIcon.args = {
	leftIcon  : <CirclesOutline />,
	rightIcon : <CirclesOutline />,
};
export const CustomColors = Template.bind({});
CustomColors.args = {
	color     : "blue",
	leftIcon  : <CirclesOutline color="#BE4BDB" />,
	rightIcon : <CirclesOutline color="#9775FA" />,
};
export const WrapperStyled = Template.bind({});
WrapperStyled.args = {
	leftIcon     : <CirclesOutline />,
	rightIcon    : <CirclesOutline />,
	wrapperProps : {
		p         : 15,
		gap       : 10,
		justify   : "end",
		bg        : "dark",
		direction : "column",
		align     : "center",
	},
};
