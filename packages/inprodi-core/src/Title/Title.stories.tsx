import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title, TitleProps }             from "./Title";

export default {
	title     : "Core/Typography/Title",
	component : Title,
	argTypes  : {
		color : { control : "color" },
	},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args : TitleProps) => {

	return(
		<Title {...args} >
			Hola
		</Title>
	);
};
// Title font-size: h1-h6 or any valid CSS font-size value
// MantineNumberSize
export const H1 = Template.bind({});
H1.args = {
	order : 1,
};
export const H2 = Template.bind({});
H2.args = {
	order : 2,
};
export const H3 = Template.bind({});
H3.args = {
	order : 3,
};
export const H4 = Template.bind({});
H4.args = {
	order : 4,
};
export const H5 = Template.bind({});
H5.args = {
	order : 5,
};
export const H6 = Template.bind({});
H6.args = {
	order : 6,
};
