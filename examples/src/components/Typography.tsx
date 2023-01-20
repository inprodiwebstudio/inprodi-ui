import React                                    from "react";
import { Card, Center, Grid, Kbd, Stack, Text } from "@mantine/core";
import { CirclesOutline }                       from "../../../packages/inprodi-icons/dist";
import {
	Link,
	Title,
	TitleGroup,
	TextGroup,
} from "../../../packages/inprodi-core/src";

export const Typography = () => {
	return (
		<>
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
		</>
	);
};

export default Typography;
