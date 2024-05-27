import { Star } from "lucide-react"

export const rating = (rate: number, w?: number) => {
    const array = []

    for (let i = 0; i < rate; i++) {
        array.push(<Star width={18} fill="#006FEE" className="text-primary fill-primary" />)
    }
    for (let i = 0; i < 5 - rate; i++) {
        array.push(<Star width={18} className="text-primary" />)
    }

    return (
        <div className="flex gap-0.5">
            {array.map((a, index) => (
                <div key={index}>{a}</div>
            ))}
        </div>
    )
}