'use client'
import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/logo.png'
import { Calendar, Heart, Home, LogIn, LogOut, MessageCircle, Settings, TrendingUp, Users } from "lucide-react"
import { usePathname } from "next/navigation"

const SideBar = ({ drawer, onClose }: { drawer?: boolean, onClose?: () => void }) => {
    const pathName = usePathname()
    const token = '1'
    if (pathName === '/login') return null
    return (
        <div className={`max-w-xs w-full p-8 h-screen flex-col justify-between ${drawer ? 'flex h-full' : 'hidden xl:flex shadow-sidebar'}`}>
            <div>
                <Link onClick={onClose} href='/'>
                    <Image src={logo.src} alt="logo" width={120} height={50} />
                </Link>
                <div className="flex flex-col gap-4 pt-10">
                    {
                        types.map((l, i) => (
                            <Link onClick={onClose} href={l.href} key={i}
                                className={` ${pathName === l.href && 'font-semibold text-primary'} flex items-center gap-4 hover:text-primary duration-250 py-1`}
                            >
                                {l.icon} {l.name}
                            </Link >
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4 pt-32">
                <Link onClick={onClose} href='/settings'
                    className={` ${pathName === '/settings' && 'font-semibold text-primary'} flex items-center gap-4 hover:text-primary duration-250 py-1`}
                >
                    <Settings width={22} /> Settings
                </Link >
                {
                    token ?
                        <p className={`flex items-center gap-4 hover:text-primary duration-250 py-1 cursor-pointer`}>
                            <LogOut width={22} /> Log Out
                        </p >
                        :
                        <Link href='/login' className={`flex items-center gap-4 hover:text-primary duration-250 py-1 cursor-pointer`}>
                            <LogIn width={22} /> Log In
                        </Link>

                }
            </div>
        </div>
    )
}

export default SideBar



const types = [
    {
        name: "Home",
        icon: <Home width={22} />,
        href: '/'
    },
    {
        name: "Favourities",
        icon: <Heart width={22} />,
        href: '/favourities'
    },
    {
        name: "Trending",
        icon: <TrendingUp width={22} />,
        href: '/trending'
    },
    {
        name: "Coming soon",
        icon: <Calendar width={22} />,
        href: '/soon'
    },
]