export const getLastFiveYearsAGo = () => {
    const today = new Date().getFullYear();
    return Array.from({ length: 5 }, (_, i) => {
        const year = today - i;
        return {
            label: year.toString(),
            value: year.toString(),
        };
    });
}

export const getMonthOptions = (selectYear?: string | number) => {

    const monthOptions = [
        { label: "Janeiro", value: "01" },
        { label: "Fevereiro", value: "02" },
        { label: "Março", value: "03" },
        { label: "Abril", value: "04" },
        { label: "Maio", value: "05" },
        { label: "Junho", value: "06" },
        { label: "Julho", value: "07" },
        { label: "Agosto", value: "08" },
        { label: "Setembro", value: "09" },
        { label: "Outubro", value: "10" },
        { label: "Novembro", value: "11" },
        { label: "Dezembro", value: "12" }
    ]

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; 
    const limit = Number(selectYear) === currentYear ? Math.max(currentMonth - 1, 0) : 12
    return monthOptions.slice(0, limit)
}

export const generatePeriod = (startDate: string, endDate: string) => {
    const [startMonth, startYear] = startDate.split("/");
    const [endMonth, endYear] = endDate.split("/");
    const start = new Date(Number(startYear), Number(startMonth) - 1);
    const end = new Date(Number(endYear), Number(endMonth) - 1);

    return {
        dataInicial: start.toISOString().slice(0, 10),
        dataFinal: end.toISOString().slice(0, 10),
    }
}
