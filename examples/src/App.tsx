import * as Yup                                               from "yup";
import { useForm }                                            from "react-hook-form";
import { yupResolver }                                        from "@hookform/resolvers/yup";
import { Button, MantineProvider, Stack }                     from "@mantine/core";
import { FormProvider, RHFTextInput, RHFTextArea, RHFSwitch } from "../../packages/inprodi-core/src";

function App() {
	const schema = Yup.object().shape({
		myInpt : Yup.string()
			.required("El campo es requerido"),
		textArea : Yup.string()
			.required("El campo es requerido"),
	});
	const methods = useForm({
		defaultValues : {
			myInpt   : "",
			textArea : "",
			mySwitch : "",
		},
		resolver : yupResolver(schema),
	});
	const { handleSubmit } = methods;
	const onSubmit = (data : any) => {
		console.log(data);
	};
	return (
		<MantineProvider theme={{
			primaryShade : 6,
			primaryColor : "primary",
			colors       : {
				primary : [ "#EAECF6", "#D4D9ED", "#AAB4DC", "#95A1D3", "#7F8ECA", "#5569B9", "#2A43A7", "#223686", "#192864", "#152254" ],
			},
		}}>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<Stack>
					<RHFTextInput name="myInpt" label="Inpt" />
					<RHFSwitch name="mySwitch" label="switch"/>
					<RHFTextArea name="textArea" label="TextArea"/>
					<Button type="submit">Submit</Button>
				</Stack>
			</FormProvider>
		</MantineProvider>
	);
}

export default App;
