import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FilterSchema, filterSchema } from "../schama/filterSchema";



export const useFilterChecklist = () => {
    
    const {control, formState: {errors}, handleSubmit, watch} = useForm<FilterSchema>({
        resolver: yupResolver(filterSchema),
    })

     const anoInicial = watch("anoInicial");
    const anoFinal = watch("anoFinal");

    const isMesInicialDisabled = !anoInicial;
    const isMesFinalDisabled = !anoFinal;

    return {
        control,
        errors,
        isMesInicialDisabled,
        isMesFinalDisabled,
        anoInicial,
        anoFinal,
        handleSubmit,
    };
}