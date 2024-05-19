import MovieCard from "@/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Favourities",
    description: "Favourities",
    openGraph: {
        title: "Favourities",
        description: "Favourities",
        siteName: "Favourities",
    }
}
const Favourities = () => {
    return (
        <div>
            <h2 className="font-semibold text-center text-4xl pb-10">Favourities</h2>
            <div className="flex flex-wrap justify-center gap-10 pb-10">
                {
                    [30, 31, 32, 33, 34, 35, 36, 37, 38].map((item, index) => <MovieCard liked href="/" key={index} index={item} />)
                }
            </div>
        </div>
    )
}

export default Favourities