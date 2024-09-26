import AnalyticHeader from "../components/analytics/AnalyticHeader"
import AnalyticWrapper from "../components/analytics/AnalyticWrapper"

const Page = () => {
    return (

        <div>
            <div className="my-4">
                <AnalyticHeader />
            </div>

            <div className="my-4">
                <AnalyticWrapper />
            </div>
        </div>
    )
}

export default Page