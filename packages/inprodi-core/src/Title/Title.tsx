import {
	TitleOrder,
	MantineNumberSize,
	Title as MantineTitle,
	TitleProps as MantineTitleProps,
	DefaultMantineColor,
} from "@mantine/core";

export interface TitleProps extends MantineTitleProps {
	order ?: TitleOrder;
    size ?: MantineNumberSize;
	/**
    * color text: DefaultMantineColor = "dark" | "gray" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "green" | "lime" | "yellow" | "orange" | "teal" | (string & {})
    */
	color ?: "dimmed" | DefaultMantineColor;
}
export const Title = ({children, size = "md", color, ...rest} : TitleProps) => {
	const getOrderTitle = () => {
		const orders = {
			"xl" : 2,
			"lg" : 3,
			"md" : 4,
			"sm" : 5,
			"xs" : 6,
		} as { [key in MantineNumberSize] : TitleOrder };
		return orders[size];
	};
	return (
		<MantineTitle
			order={getOrderTitle()}
			sx={(theme) => ({
				color : color ?
					color : theme.colorScheme === "dark" ? "#fff" : "#000",
			})}
			{...rest}
		>
			{children}
		</MantineTitle>
	);
};

export default Title;
