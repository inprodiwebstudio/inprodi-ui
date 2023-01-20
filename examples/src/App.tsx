import { BrowserRouter }          from "react-router-dom";
import { MantineProvider, Stack } from "@mantine/core";

import FormSection  from "./components/FormSection";
import Typography   from "./components/Typography";
import IconsSection from "./components/IconsSection";

function App() {

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
					<FormSection />
					<Typography />
					<IconsSection />
				</Stack>
			</MantineProvider>
		</BrowserRouter>
	);
}

export default App;
