import React                             from "react";
import { useForm, FormProvider }         from "react-hook-form";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RHFSwitch }                     from "./RHFSwitch";

export default {
	title     : "Core/Form/Switch",
	component : RHFSwitch,
} as ComponentMeta<typeof RHFSwitch>;

const Template: ComponentStory<typeof RHFSwitch> = (args) => {
	const methods = useForm();
	return(
		<FormProvider {...methods}>
			<RHFSwitch {...args} />
		</FormProvider>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	label : "Basic",
	name  : "basic-inpt",
};

