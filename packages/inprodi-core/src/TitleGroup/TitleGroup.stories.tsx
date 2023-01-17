import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TitleGroup, TitleGroupProps }   from "./TitleGroup";

export default {
	title     : "Core/Typography/TitleGroup",
	component : TitleGroup,
	argTypes  : {
		size        : { control : "text" },
		textColor   : { control : "color" },
		titleColore : { control : "color" },
	},
} as ComponentMeta<typeof TitleGroup>;

const Template: ComponentStory<typeof TitleGroup> = (args : TitleGroupProps) => {

	return(
		<TitleGroup {...args} />
	);
};

export const Basic = Template.bind({});
Basic.args = {
	title : "This is a title",
	text  : "This is a subtext",
	size  : "lg",
};
