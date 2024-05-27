import WatchPage from "@/components/watch"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Home",
    description: "Home",
    openGraph: {
        title: "Home",
        description: "Home",
        siteName: "Home",
    }
}

const HomeWatch = ({ params }: { params: { home: string } }) => {
    return (
        <WatchPage />
    )
}

export default HomeWatch