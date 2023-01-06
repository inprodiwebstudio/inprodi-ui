import { ReactNode } from "react";
// form
import { FormProvider as Form, UseFormReturn} from "react-hook-form";

export interface FormProviderProps {
    children : ReactNode | ReactNode[];
    onSubmit : () => void;
    methods : UseFormReturn<any, any>;
}

export function FormProvider({ children, onSubmit, methods } : FormProviderProps) {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	);
}

export default FormProvider;
