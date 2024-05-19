import HomePage from "@/pages/Home";
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
    <HomePage />
  );
}
