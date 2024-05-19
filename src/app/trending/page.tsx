import MovieCard from "@/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trending",
    description: "Trending",
    openGraph: {
        title: "Trending",
        description: "Trending",
        siteName: "Trending",
    }
}
const Trending = () => {
    return (
        <div>
            <h2 className="font-semibold text-center text-4xl pb-10">Trending</h2>
            <div className="flex flex-wrap justify-center gap-10 pb-10">
                {
                    [10, 11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => <MovieCard href="/" key={index} index={item} />)
                }
            </div>
        </div>
    )
}

export default Trending