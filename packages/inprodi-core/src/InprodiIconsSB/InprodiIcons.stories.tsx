import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserOutline }                   from "../../../inprodi-icons/dist";

export default {
	title     : "Inprodi Icons/Basic",
	component : UserOutline,
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
	color       : "gray",
} as React.SVGProps<SVGSVGElement>;

