import * as Yup                      from "yup";
import { useForm, FormProvider }     from "react-hook-form";
import { yupResolver }               from "@hookform/resolvers/yup";
import { RHFTextInput, RHFTextArea } from "../../packages/inprodi-core/src";
import { MantineProvider }           from "@mantine/core";

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
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<RHFTextInput name="myInpt" label="Inpt" />
					<RHFTextArea name="textArea" label="TextArea"/>
				</form>
			</FormProvider>
		</MantineProvider>
	);
}

export default App;
