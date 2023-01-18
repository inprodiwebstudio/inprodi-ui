import * as Yup                                                                             from "yup";
import { BrowserRouter }                                                                    from "react-router-dom";
import { useForm }                                                                          from "react-hook-form";
import { yupResolver }                                                                      from "@hookform/resolvers/yup";
import { ActionIcon, Button, Card, Center, Grid, Group, Kbd, MantineProvider, Stack, Text } from "@mantine/core";

import { UserOutline, DiamondFilled, WordColor, CirclesOutline } from "../../packages/inprodi-icons/src";

import {
	FormProvider,
	RHFTextInput,
	RHFTextArea,
	RHFSwitch,
	RHFPasswordInput,
	Title,
	TitleGroup,
	Link,
	TextGroup,
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
		<BrowserRouter>
			<MantineProvider theme={{
				primaryShade : 6,
				primaryColor : "primary",
				colors       : {
					primary : [ "#EAECF6", "#D4D9ED", "#AAB4DC", "#95A1D3", "#7F8ECA", "#5569B9", "#2A43A7", "#223686", "#192864", "#152254" ],
				},
			}}>
				<Stack p={25} spacing={20}>
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
					<Center>
						<Kbd>TypoGraphy</Kbd>
					</Center>
					<Center>
						<Grid>
							<Grid.Col md={6}>
								<Card withBorder>
									<Stack>
										<Title order={1}>This is h1 title</Title>
										<Title order={2}>This is h2 title</Title>
										<Title order={3}>This is h3 title</Title>
										<Title order={4}>This is h4 title</Title>
										<Title order={5}>This is h5 title</Title>
										<Title order={6}>This is h6 title</Title>
									</Stack>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<Card withBorder h={"100%"}>
									<Stack>
										<Text size="xl">Text xl</Text>
										<Text size="lg">Text lg</Text>
										<Text size="md">Text md</Text>
										<Text size="sm">Text sm</Text>
										<Text size="xs">Text xs</Text>
									</Stack>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<Card withBorder h={"100%"}>
									<TitleGroup
										size="lg"
										title="This is a Title"
										text="This is the complementary text for the title"
									/>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<Card withBorder h={"100%"}>
									<Link to="/" size="xl">
									Route
									</Link>
								</Card>
							</Grid.Col>
							<Grid.Col md={6}>
								<Card withBorder h={"100%"}>
									<Stack>
										<TextGroup leftIcon={<CirclesOutline />}>Text Icon</TextGroup>
										<TextGroup color="blue" rightIcon={<CirclesOutline />}>Text Icon -  Color blue</TextGroup>
										<TextGroup
											color="red"
											leftIcon={<CirclesOutline color="#BE4BDB"/>}
											rightIcon={<CirclesOutline color="#9775FA" />}
										>
										Text Icon - Custmos colors
										</TextGroup>
										<TextGroup
											wrapperProps={{
												p         : 15,
												gap       : 10,
												justify   : "end",
												bg        : "dark",
												direction : "column",
												align     : "center",
											}}
											leftIcon={<CirclesOutline />}
											rightIcon={<CirclesOutline />}
										>
										Text Icon - wrapperConfig
										</TextGroup>
									</Stack>
								</Card>
							</Grid.Col>
						</Grid>
					</Center>
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
		</BrowserRouter>
	);
}

export default App;
