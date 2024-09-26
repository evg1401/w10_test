import { Card, CardContent } from "@/components/ui/card";
import { moneyFormat } from '@/utils'
import Image from 'next/image'
import iconArrowUp from '@/assets/icons/arrow_up.svg'
import ProgressBar from "./ProgressBar";
import AnalyticCardDialog from "./AnalyticCardDialog";

interface Props {
    title: string;
    keyValue: string;
    count: number;
    sum: number;
    plan: number;
    submitAnalytics: (targetValue: { [key: string]: number }) => void
}

const AnalyticItem = ({ ...props }: Props) => {
    const handleSave = async (targetValue: number) => {
        props.submitAnalytics({ [props.keyValue]: targetValue })
    }

    const perValue = Math.round((props.count / props.plan) * 100)
    const percent = perValue < 100 ? { current: perValue, over: 0 } : { current: 100, over: perValue - 100 }

    return (
        <div>
            <div className="mb-2">
                <div className='font-semibold xl:text-4xl lg:text-4xl md:text-4xl mx-1'>{props.title}</div>
            </div>

            <Card className="shadow-md">
                <CardContent className='flex flex-col justify-between'>
                    <div className="flex flex-col mb-4">
                        <div className="font-semibold xl:text-3xl lg:text-3xl md:text-3xl mb-2">{props.count} заявки</div>
                        <div className="font-semibold xl:text-3xl lg:text-3xl md:text-3xl">{moneyFormat(props.sum.toString()).split(',')[0]} ₽</div>
                    </div>

                    <div className="flex items-center mb-2">
                        <div className="flex items-center font-medium text-lg" style={{ color: '#2D3944' }}>
                            <span>Цель {props.title}:</span> &nbsp; <span className="text-success font-semibold">{props.plan} заявок</span>
                        </div>

                        <div>
                            <AnalyticCardDialog title={props.title} onSave={handleSave} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                            <div className="mr-1">
                                <Image
                                    src={iconArrowUp}
                                    alt=""
                                />
                            </div>
                            <div className="text-primary font-bold text-xl">{props.count} заявки</div>
                        </div>

                        <div className="text-secondary text-xs">
                            {percent.current + percent.over}%
                        </div>
                    </div>

                    <ProgressBar over={percent.over} current={percent.current} />
                </CardContent>
            </Card>
        </div>
    )
}

export default AnalyticItem