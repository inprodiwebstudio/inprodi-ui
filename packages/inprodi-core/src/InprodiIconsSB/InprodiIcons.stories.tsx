import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { User }                          from "../../../inprodi-icons/dist";

export default {
	title     : "Icons",
	component : User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args : React.SVGProps<SVGSVGElement>) => {
	return(
		<User {...args} />
	);
};

export const BasicIcon = Template.bind({});
BasicIcon.args = {
	fillOpacity : 1,
	fontSize    : 25,
	color       : "gray",
} as React.SVGProps<SVGSVGElement>;

