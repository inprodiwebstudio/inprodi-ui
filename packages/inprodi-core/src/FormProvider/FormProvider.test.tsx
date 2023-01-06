import React                      from "react";
import { useForm }                from "react-hook-form";
import { act, render, fireEvent } from "@testing-library/react";
import { RHFTextInput }           from "../RHFTextInput";
import { FormProvider }           from "./FormProvider";

describe("FormProvaider", () => {
	test("should change value on RHK", async () => {
		const textInptName = "myInpt";
		const onSubmit = jest.fn();

		const Provider: React.FC<{children : React.ReactElement[] }> = ({ children }) => {
			const methods = useForm<{ [textInptName]: string }>({ defaultValues : {
				[textInptName] : "",
			}});
			return <FormProvider methods={methods} onSubmit={onSubmit}>{children}</FormProvider>;
		};

		const { getByRole } = render(
			<Provider>
				<RHFTextInput name="test" />
				<button type="submit">Submit</button>
			</Provider>
		);

		const btn = getByRole("button");
		await act( () => fireEvent.submit(btn));
		expect(onSubmit).toBeCalled();
	});
});
