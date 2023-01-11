import * as Yup                                                           from "yup";
import { useForm }                                                        from "react-hook-form";
import { yupResolver }                                                    from "@hookform/resolvers/yup";
import { ActionIcon, Button, Center, Group, Kbd, MantineProvider, Stack } from "@mantine/core";

import { UserOutline, DiamondFilled, WordColor } from "../../packages/inprodi-icons/src";

import {
	FormProvider,
	RHFTextInput,
	RHFTextArea,
	RHFSwitch,
	RHFPasswordInput,
} from "../../packages/inprodi-core/src";

function App() {
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
		<MantineProvider theme={{
			primaryShade : 6,
			primaryColor : "primary",
			colors       : {
				primary : [ "#EAECF6", "#D4D9ED", "#AAB4DC", "#95A1D3", "#7F8ECA", "#5569B9", "#2A43A7", "#223686", "#192864", "#152254" ],
			},
		}}>
			<Stack>
				<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
					<Stack p={25}>
						<RHFTextInput name="myInpt" label="Inpt" />
						<RHFSwitch name="mySwitch" label="switch"/>
						<RHFTextArea name="textArea" label="TextArea"/>
						<RHFPasswordInput name="password" label="Password"/>
						<Button type="submit" >Submit</Button>
					</Stack>
				</FormProvider>
				<Center>
					<Kbd>Icons</Kbd>
				</Center>
				<Center>
					<Group>
						<ActionIcon color="primary" variant="subtle">
							<UserOutline size="xl" />
						</ActionIcon>
						<ActionIcon color="primary" variant="subtle">
							<DiamondFilled size="xl" />
						</ActionIcon>
						<ActionIcon color="primary" variant="subtle">
							<WordColor fillOpacity={1} size="xl" />
						</ActionIcon>
					</Group>
				</Center>
			</Stack>
		</MantineProvider>
	);
}

export default App;
