import React                             from "react";
import { useForm, FormProvider }         from "react-hook-form";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RHFTextArea, RHFTextAreaProps } from "./RHFTextArea";

export default {
	title     : "Core/Form/TextArea",
	component : RHFTextArea,
	argTypes  : {
		size   : { control : "select" },
		radius : { control : "select" },
	},
} as ComponentMeta<typeof RHFTextArea>;

const Template: ComponentStory<typeof RHFTextArea> = (args : RHFTextAreaProps) => {
	const methods = useForm();
	return(
		<FormProvider {...methods}>
			<RHFTextArea {...args} />
		</FormProvider>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	label : "Basic",
	name  : "basic-inpt",
};

export const TextInputStyled = Template.bind({});
TextInputStyled.args = {
	label       : "Name",
	name        : "name",
	size        : "sm",
	radius      : "lg",
	placeholder : "Your name",
	description : "description",
};

export const Invalid = Template.bind({});
Invalid.args = {
	label        : "Name",
	name         : "name",
	placeholder  : "Your name",
	error        : "Campo requerido",
	withAsterisk : true,
};
