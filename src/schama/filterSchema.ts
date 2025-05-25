import * as yup from 'yup';

export const filterSchema = yup.object().shape({
    mesInicial: yup.string().required("Campo obrigatório"),
    mesFinal: yup.string().required("Campo obrigatório"),
    anoInicial: yup.string().required("Campo obrigatório"),
    anoFinal: yup.string().required("Campo obrigatório"),
})

export type FilterSchema = yup.InferType<typeof filterSchema>;