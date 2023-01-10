import { useFormContext, Controller } from "react-hook-form";
import { Switch, SwitchProps }        from "@mantine/core";

export interface IRHFSwitch extends SwitchProps {
    /**
    * Input's name being registered. [controller](https://react-hook-form.com/api/usecontroller/controller)
    */
	name : string;
    /**
    * An extra action to invoke when the inpt changes. Note: the library still control the input's value.
    */
	onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export const RHFSwitch = ({ name, onChange, ...rest } : IRHFSwitch ) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
					onChange && onChange(e);
					field.onChange(e);
				};
				return (
					<Switch
						{...field}
						id={name}
						name={name}
						checked={field.value}
						onChange={handleChange}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFSwitch;
