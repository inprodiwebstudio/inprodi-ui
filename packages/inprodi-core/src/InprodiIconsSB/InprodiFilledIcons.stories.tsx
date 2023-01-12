import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AvatarFilled }                   from "../../../inprodi-icons/dist";

export default {
	title     : "Inprodi Icons/Filled",
	component : AvatarFilled,
} as ComponentMeta<typeof AvatarFilled>;

const Template: ComponentStory<typeof AvatarFilled> = (args : React.SVGProps<SVGSVGElement>) => {
	return(
		<AvatarFilled {...args} />
	);
};

export const BasicIcon = Template.bind({});
BasicIcon.args = {
	fillOpacity : 1,
	size        : 25,
	color       : "gray",
} as React.SVGProps<SVGSVGElement>;

