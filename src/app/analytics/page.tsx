import AnalyticHeader from "../components/analytics/AnalyticHeader"
import AnalyticWrapper from "../components/analytics/AnalyticWrapper"

const Page = () => {
    return (

        <div>
            <div className="xl:my-4 lg:my-4 md:my-4 sm:my-2">
                <AnalyticHeader />
            </div>

            <div className="xl:my-4 lg:my-4 md:my-4 sm:my-1">
                <AnalyticWrapper />
            </div>
        </div>
    )
}

export default Page