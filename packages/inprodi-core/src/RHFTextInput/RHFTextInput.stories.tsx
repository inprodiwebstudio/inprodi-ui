import { useForm, FormProvider }         from "react-hook-form";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {RHFTextInput, RHFTextInputProps} from "./RHFTextInput";

export default {
	title     : "Core/Form/TextInput",
	component : RHFTextInput,
	argTypes  : {
		size   : { control : "select" },
		radius : { control : "select" },
	},
} as ComponentMeta<typeof RHFTextInput>;

const Template: ComponentStory<typeof RHFTextInput> = (args : RHFTextInputProps) => {
	const methods = useForm({
		defaultValues : {
			basic    : "",
			myInptLg : "",
		},
	});
	return(
		<FormProvider {...methods}>
			<RHFTextInput {...args} />
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
};

export const Invalid = Template.bind({});
Invalid.args = {
	label       : "Name",
	name        : "name",
	placeholder : "Your name",
	error       : true,
};
