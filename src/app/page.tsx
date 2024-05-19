import MovieCard from "@/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
  openGraph: {
    title: "Home",
    description: "Home",
    siteName: "Home",
  }
}
export default function Home() {
  return (
    <div>
      <h2 className="font-semibold text-center text-4xl pb-10">Movies</h2>
      <div className="flex flex-wrap justify-center gap-10 pb-10">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <MovieCard href="/" key={index} index={item} />)
        }
      </div>
    </div>
  );
}
