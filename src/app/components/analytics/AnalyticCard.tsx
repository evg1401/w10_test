'use client'

import { useState } from "react";
import AnalyticItem from "./AnalyticItem";
import { AnalyticData } from "@/app/interfaces/analytics";

interface Props {
    data: AnalyticData
}

const AnalyticCard = ({ data }: Props) => {
    const [analyticData, setAnalyticData] = useState({ ...data })

    const onSubmitAnalytics = async (e: { [key: string]: number }): Promise<void> => {
        // const { week_plan, month_plan, day_plan } = analyticData

        // const result = await saveTargetValue({ week_plan, month_plan, day_plan, ...e })
        // setAnalyticData({ ...analyticData, ...result })
        setAnalyticData({ ...analyticData, ...e })
    }

    const planAnalyticsList = [
        {
            day: {
                plan: analyticData['day_plan'], count: analyticData['count_day'], sum: analyticData['sum_day']
            }
        },

        {
            week: {
                plan: analyticData['week_plan'], count: analyticData['count_week'], sum: analyticData['sum_week']
            }
        },

        {
            month: {
                plan: analyticData['month_plan'], count: analyticData['count_month'], sum: analyticData['sum_month']
            }
        },
    ]

    const AnalyticItems = () => planAnalyticsList.map((x, i) => {
        if (x.day) {
            return (
                <div key={i} className="p-4">
                    <AnalyticItem title="за день" keyValue={'day_plan'} count={x.day.count} sum={x.day?.sum} plan={x.day?.plan} submitAnalytics={onSubmitAnalytics} />
                </div>)
        }
        else if (x.week) {
            return (
                <div key={i} className="p-4">
                    <AnalyticItem title="за неделю" keyValue={'week_plan'} count={x.week?.count} sum={x.week?.sum} plan={x.week?.plan} submitAnalytics={onSubmitAnalytics} />
                </div>)
        }
        else if (x.month) {
            return (
                <div key={i} className="p-4">
                    <AnalyticItem title="за месяц" keyValue={'month_plan'} count={x.month?.count} sum={x.month?.sum} plan={x.month?.plan} submitAnalytics={onSubmitAnalytics} />
                </div>)
        }
    })

    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4">
            <AnalyticItems />
        </div>
    )
}

export default AnalyticCard