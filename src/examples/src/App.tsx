import * as Yup                  from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver }           from "@hookform/resolvers/yup";
import { RHFTextInput }          from "@inprodi/core";

function App() {
	const schema = Yup.object().shape({
		myInpt : Yup.string()
			.required("El campo es requerido"),
	});
	const methods = useForm({
		defaultValues : {
			myInpt : "",
		},
		resolver : yupResolver(schema),

	});
	const { handleSubmit } = methods;
	const onSubmit = (data : any) => {
		console.log(data);
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<RHFTextInput name="myInpt" label="Inpt" />
			</form>
		</FormProvider>
	);
}

export default App;
