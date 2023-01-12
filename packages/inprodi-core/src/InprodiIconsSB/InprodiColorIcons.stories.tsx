import React                             from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WordColor }                   from "../../../inprodi-icons/dist";

export default {
	title     : "Inprodi Icons/Color",
	component : WordColor,
} as ComponentMeta<typeof WordColor>;

const Template: ComponentStory<typeof WordColor> = (args : React.SVGProps<SVGSVGElement>) => {
	return(
		<WordColor {...args} />
	);
};

export const BasicIcon = Template.bind({});
BasicIcon.args = {
	fillOpacity : 1,
	size        : 25,
} as React.SVGProps<SVGSVGElement>;

