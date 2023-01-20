import React                                     from "react";
import { ActionIcon, Center, Group, Kbd }        from "@mantine/core";
import { UserOutline, DiamondFilled, WordColor } from "../../../packages/inprodi-icons/dist";

const IconsSection = () => {
	return (
		<>
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
		</>
	);
};

export default IconsSection;
