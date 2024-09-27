import iconData from '@/assets/icons/data.svg'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const AnalyticHeader = () => {
    return (
        <div className="flex justify-center items-center">
            <Card className="w-full h-14">
                <CardContent className='flex justify-between items-center pt-2'>
                    <div className="flex items-center">
                        <div className='text-primary font-semibold xl:text-3xl lg:text-3xl md:text-3xl'>WT10 &nbsp; </div> <h1 className='text-secondary-foreground xl:text-3xl lg:text-3xl md:text-3xl'>APPLICATION ANALYTICS</h1>
                    </div>

                    <Image
                        src={iconData}
                        alt=""
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default AnalyticHeader