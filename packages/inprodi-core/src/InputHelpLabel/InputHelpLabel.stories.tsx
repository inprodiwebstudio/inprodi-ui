import React                                   from "react";
import { ComponentMeta, ComponentStory }       from "@storybook/react";
import { InputHelpLabel, InputHelpLabelProps } from "./InputHelpLabel";

export default {
	title     : "Core/UI/InputHelpLabel",
	component : InputHelpLabel,
} as ComponentMeta<typeof InputHelpLabel>;

const Template: ComponentStory<typeof InputHelpLabel> = (args : InputHelpLabelProps) => {

	return(
		<div style={{ width : 320 }}>
			<InputHelpLabel {...args} />
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	label     : "Label",
	helpLabel : "help label",
	required  : true,
} as InputHelpLabelProps;
