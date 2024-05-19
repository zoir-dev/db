import MovieCard from "@/ui/card"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Soon",
    description: "Soon",
    openGraph: {
        title: "Soon",
        description: "Soon",
        siteName: "Soon",
    }
}
const Soon = () => {
    return (
        <div>
            <h2 className="font-semibold text-center text-4xl pb-10">Coming soon</h2>
            <div className="flex flex-wrap justify-center gap-10 pb-10">
                {
                    [20, 21, 22, 23, 24, 25, 26, 27, 28].map((item, index) => <MovieCard href="/" key={index} index={item} />)
                }
            </div>
        </div>
    )
}

export default Soon