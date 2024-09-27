import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ current, over }: { current: number, over: number }) => {
    return (
        <div className="flex w-full">
            <div style={{ width: `${over > 0 ? current - over : 100}%` }}>
                <Progress value={current} style={{ height: '5px' }} color={current === 100 ? '#27AE60' : '#003362'} />
            </div>

            {(over > 0 && <div style={{ width: `${over}%` }}>
                <Progress value={100} style={{ height: '5px' }} color="#e11d48" />
            </div>
            )}
        </div>
    )
}

export default ProgressBar