import React                                       from "react";
import { useForm, FormProvider }                   from "react-hook-form";
import { ComponentMeta, ComponentStory }           from "@storybook/react";
import { RHFPasswordInput, RHFPasswordInputProps } from "./RHFPasswordInput";

export default {
	title     : "Core/Form/PasswordInput",
	component : RHFPasswordInput,
	argTypes  : {
		size   : { control : "select" },
		radius : { control : "select" },
	},
} as ComponentMeta<typeof RHFPasswordInput>;

const Template: ComponentStory<typeof RHFPasswordInput> = (args : RHFPasswordInputProps) => {
	const methods = useForm();
	return(
		<FormProvider {...methods}>
			<RHFPasswordInput {...args} />
		</FormProvider>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	label        : "Password",
	name         : "basic-inpt-password",
	description  : "",
	error        : false,
	radius       : "sm",
	size         : "md",
	withAsterisk : false,
};
export const Styled = Template.bind({});
Styled.args = {
	label        : "Password",
	name         : "basic-inpt-password",
	description  : "description",
	error        : false,
	radius       : "md",
	size         : "lg",
	withAsterisk : true,
};
export const Invalid = Template.bind({});
Invalid.args = {
	label        : "Password",
	name         : "basic-inpt-password",
	description  : "",
	error        : true,
	radius       : "sm",
	size         : "md",
	withAsterisk : false,
};

