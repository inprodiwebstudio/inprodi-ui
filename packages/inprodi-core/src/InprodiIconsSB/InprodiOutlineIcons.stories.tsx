import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserOutline }                   from "../../../inprodi-icons/dist";

export default {
	title     : "Inprodi Icons/Outline",
	component : UserOutline,
	argTypes  : {
		color : { control : "color" },
	},
} as ComponentMeta<typeof UserOutline>;

const Template: ComponentStory<typeof UserOutline> = (args : React.SVGProps<SVGSVGElement>) => {
	return(
		<UserOutline {...args} />
	);
};

export const BasicIcon = Template.bind({});
BasicIcon.args = {
	fillOpacity : 1,
	size        : 25,
	color       : "currentColor",
} as React.SVGProps<SVGSVGElement>;

