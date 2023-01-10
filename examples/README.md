# Inprodi library examples

### Index

- [@inprodi/core](#inprodi-core)
    - [Get started](#get-started)
        - [With Vite template](#with-vite-template)
        - [Install dependecies](#install-dependecies)
    - [Form inputs usage](#form-inputs-usage)
        - [Considerations](#considerations)
        - [Styling Inputs](#styling-inputs)
- [@inprodi/icons](#inprodi-icons)
	 - [Install icons](#install-icons)
	 - [Usage icons](#usage-icons)



## Inprodi Core
It's important to know that this library uses third party library such as [@mantine/core](https://mantine.dev/) and [@mantine/hooks](https://mantine.dev/) to build ui and to validate form uses [react-hook-form](https://react-hook-form.com/). So we recommend to checkout the documentation about the library before to start using this library.

To see more about the configurarion of our component visit the following link[inprodi-documentation](https://guileless-parfait-5f3c72.netlify.app/?path=/story/core-form-textarea--basic)

## Get started

### With Vite template
Let's create a new application:
```bash
yarn create vite mantine-vite --template react-ts
```

### Install dependecies
```bash
yarn add @inprodi/core @mantine/core @mantine/hooks react-hook-form
```

### Considerations
Before to star using the inputs, it's important to know that under the hood the form inputs uses [useFormContext](https://react-hook-form.com/api/useformcontext/) from [react-hook-form](https://react-hook-form.com/), so it's imperative to wrap all the inputs into a [FormProvider](https://react-hook-form.com/api/formprovider). 

### Form inputs usage
It's important to know that to avoid the warning _"A component is changing an uncontrolled input to be controlled..."_. We need to register the text input into the **defatultValues**.
```jsx
import * as Yup                                               from "yup";
import { useForm }                                            from "react-hook-form";
import { yupResolver }                                        from "@hookform/resolvers/yup";
import { Button, MantineProvider, Stack }                     from "@mantine/core";
import { FormProvider, RHFTextInput, RHFTextArea, RHFSwitch } from "../../packages/inprodi-core/src";

export function App() {
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
```
### Styling Inputs
All the inputs have a defect style and some configurations are not configurable, however there're some configuration that we are be able to change such as the primary color.
To configurate it, we just need to follow the example below: 
```jsx
<MantineProvider 
    theme={{
        primaryShade : 6,
        primaryColor : "primary",
        colors       : {
            primary : [ "#EAECF6", "#D4D9ED", "#AAB4DC", "#95A1D3", "#7F8ECA", "#5569B9", "#2A43A7", "#223686", "#192864", "#152254" ],
        },
    }}
>
    <FormProvider {...methods}>
        <RHFTextInput name="myInpt" label="Inpt" />
    </FormProvider>
</MantineProvider>
```
## @inprodi/icons

### Install icons
```bash
yarn add @inprodi/icons
```

### Usage icons

```jsx
import React from "react";
import { User } from "@inprodi/icons";

const App = () => {
  return <User />;
};

export default App;
```
## License

MIT