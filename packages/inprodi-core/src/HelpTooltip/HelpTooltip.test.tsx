import React           from "react";
import { render }      from "@testing-library/react";
import { HelpTooltip } from "./HelpTooltip";

describe("HelpTooltip", () => {
	test("snaptshot", () => {
		const { container } = render(
			<HelpTooltip
				label="Help Label"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
