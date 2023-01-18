import React             from "react";
import { BrowserRouter } from "react-router-dom";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link, LinkProps }               from "./Link";

export default {
	title     : "Core/Typography/Link",
	component : Link,
	argTypes  : {
		color : { control : "color" },
	},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args : LinkProps) => {

	return(
		<BrowserRouter>
			<Link {...args} >
			    Hola
			</Link>
		</BrowserRouter>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	to : "/",
};
