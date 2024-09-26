// здесь запрос к api

import AnalyticCard from "./AnalyticCard"

const AnalyticWrapper = () => {
    const data = {
        'day_plan': 13,
        'count_day': 5,
        'sum_day': 34567,
        'week_plan': 134,
        'count_week': 17,
        'sum_week': 134205,
        'month_plan': 500,
        'count_month': 21,
        'sum_month': 145723,
    }
    return (
        <AnalyticCard data={{ ...data }} />
    )
}

export default AnalyticWrapper