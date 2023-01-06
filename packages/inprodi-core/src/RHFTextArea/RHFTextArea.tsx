import { useFormContext, Controller }                         from "react-hook-form";
import { InputVariant, MantineSize, Textarea, TextareaProps } from "@mantine/core";
import { useFocusWithin }                                     from "@mantine/hooks";
import styles                                                 from "../styles";

export interface RHFTextAreaProps extends TextareaProps, React.RefAttributes<HTMLTextAreaElement> {
    /**
    * Input's name being registered. https://react-hook-form.com/api/usecontroller/controller
    */
	name : string;
	/**
    * Input's label
    */
	label ?: string;
	/**
    * An extra action to invoke when the inpt changes. Note: the library still control the input's value.
    */
	onChange ?: (e : React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
    * Input's placeholder
    */
	placeholder?: string;
	/**
    * to change the inpt size.To see more: https://mantine.dev/core/textarea/
    */
    size?: MantineSize;
    /**
    * flag to autosize.To see more: https://mantine.dev/core/textarea/
    */
    autosize ?: boolean;
	/**
    * to change the inpt radius.To see more: https://mantine.dev/core/textarea/
    */
    radius?: MantineSize;
	/**
    * Input varaint type: To see more: https://mantine.dev/core/textarea/
    */
	variant ?: InputVariant;
}

export const RHFTextArea = ({
	name,
	onChange,
	label = "",
	autosize = false,
	...rest
}: RHFTextAreaProps) => {
	const { ref, focused } = useFocusWithin();
	const { classes } = styles({ focused });
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
					onChange && onChange(e);
					field.onChange(e);
				};
				return (
					<Textarea
						{...field}
						ref={ref}
						error={!!error}
						autosize={autosize}
						onChange={handleChange}
						label={error?.message ? error.message : label}
						classNames={{
							input        : classes.input,
							invalid      : classes.invalid,
							rightSection : error && classes.icon,
							label        : `${classes.label} ${error && classes.labelError}`,
						}}
						{...rest}
					/>
				);}
			}
		/>
	);
};

export default RHFTextArea;
