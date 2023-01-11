import React                                              from "react";
import { useFormContext, Controller }                     from "react-hook-form";
import { MantineSize, PasswordInput, PasswordInputProps } from "@mantine/core";
import { useFocusWithin }                                 from "@mantine/hooks";
import { OpenedEyeOutline, ClosedEyeOutline }             from "../../../inprodi-icons/dist";
import styles                                             from "../styles";

export interface RHFPasswordInputProps extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
    /**
    * Input's name being registered. [controller](https://react-hook-form.com/api/usecontroller/controller)
    */
	name : string;
    /**
    * Input's label
    */
	label ?: string;
    /**
    * An extra action to invoke when the inpt changes. Note: the library still control the input's value.
    */
	onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
    /**
    * Input description, displayed after label [PasswordInput](https://mantine.dev/core/password-input/)
    */
    description ?: string;
    /**
    * Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input [PasswordInput](https://mantine.dev/core/password-input/)
    */
    withAsterisk ?: boolean;
    /**
    * to change the inpt size.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
   size?: MantineSize;
	/**
    * to change the inpt radius.To see more: [textInput](https://mantine.dev/core/text-input/)
    */
    radius?: MantineSize;
}
export const RHFPasswordInput = ({
	name,
	label,
	onChange,
	...rest
} : RHFPasswordInputProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();

	const getVisibilityIcon = ({ reveal, size } : { reveal : boolean; size : number }) =>{
		return reveal ? <OpenedEyeOutline data-testid="opened-eye" fontSize={size} />
			: <ClosedEyeOutline data-testid="closed-eye" fontSize={size} />;
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
					onChange && onChange(event);
					field.onChange(event);
				};
				return (
					<PasswordInput
						{...field}
						data-testid="password"
						ref={ref}
						error={!!error}
						autoComplete="off"
						onChange={handleOnChange}
						icon={<OpenedEyeOutline fontSize={14} />}
						visibilityToggleIcon={getVisibilityIcon}
						label={error?.message ? error.message : label}
						classNames={{
							icon       : classes.icon,
							input      : classes.pswInput,
							innerInput : classes.innerInput,
							invalid    : classes.invalidPassword,
							wrapper    : error && classes.invalidWrapper,
							label      : `${classes.label} ${error && classes.labelError}`,
						}}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default RHFPasswordInput;
