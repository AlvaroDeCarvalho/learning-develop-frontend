import * as yup from 'yup';

export const filterSchema = yup.object().shape({
    mesInicial: yup.string().required("Campo obrigatório"),
    mesFinal: yup.string().required("Campo obrigatório"),
    anoInicial: yup.string().required("Campo obrigatório"),
    anoFinal: yup.string()
    .required("Campo obrigatório")
    .test("is-greater", "Ano final deve ser maior que o ano inicial", function (value) {
        const { anoInicial,mesInicial, mesFinal  } = this.parent;
        if (!value || !anoInicial) return true;
        
       const anoIni = parseInt(anoInicial)
        const anoFim = parseInt(value)
        const mesIni = parseInt(mesInicial)
        const mesFim = parseInt(mesFinal)

        const dataIni = new Date(anoIni, mesIni - 1)
        const dataFim = new Date(anoFim, mesFim - 1)

        if (dataFim < dataIni) return false
        return true;
    })
})

export type FilterSchema = yup.InferType<typeof filterSchema>;