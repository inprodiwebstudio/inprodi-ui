import React                          from "react";
import * as Yup                       from "yup";
import { useForm }                    from "react-hook-form";
import { yupResolver }                from "@hookform/resolvers/yup";
import { Button, Center, Kbd, Stack } from "@mantine/core";
import {
	FormProvider,
	RHFTextInput,
	RHFTextArea,
	RHFSwitch,
	RHFPasswordInput,
} from "../../../packages/inprodi-core/dist";

const FormSection = () => {
	const schema = Yup.object().shape({
		myInpt : Yup.string()
			.required("El campo es requerido"),
		textArea : Yup.string()
			.required("El campo es requerido"),
		password : Yup.string()
			.required("El campo es requerido"),
	});
	const methods = useForm({
		defaultValues : {
			myInpt   : "",
			textArea : "",
			mySwitch : false,
			password : "",
		},
		resolver : yupResolver(schema),
	});
	const { handleSubmit } = methods;
	const onSubmit = (data : any) => {
		console.log(data);
	};
	return (
		<>
			<Center>
				<Kbd>Form</Kbd>
			</Center>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<Stack p={25}>
					<RHFTextInput name="myInpt" label="Inpt" />
					<RHFSwitch name="mySwitch" label="switch"/>
					<RHFTextArea name="textArea" label="TextArea"/>
					<RHFPasswordInput name="password" label="Password"/>
					<Button type="submit" >Submit</Button>
				</Stack>
			</FormProvider>
		</>
	);
};

export default FormSection;
