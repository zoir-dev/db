'use client'
import { Input } from "@nextui-org/react"
import { Bell, Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Close from "@/ui/close"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
const Drawer = dynamic(() => import('./Drawer'), { ssr: false })


const Header = () => {
    const [focused, setFocused] = useState(false)
    const searchRef = useRef<HTMLInputElement>(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (focused && searchRef.current) searchRef.current?.focus()
    }, [focused])

    const pathName = usePathname()
    if (pathName === '/login') return null
    return (
        <header className="py-6 flex items-center justify-end relative">
            <div className={`${open && 'left-[240px] md:left-[220px]'} !z-[1000] absolute left-0 duration-500 xl:hidden`}>
                <Close open={open} setOpen={setOpen} />
            </div>
            <div className="flex items-center">
                <Search className="cursor-pointer hover:text-primary duration-250 mr-3" onClick={() => setFocused(true)} />
                <Input variant="underlined" color="primary" placeholder="Search..." className={` ${focused && '!w-[200px] sm:!w-[300px] mx-3'} overflow-hidden p-0 w-0 duration-300`} onFocusChange={(e) => setFocused(e)} ref={searchRef} />
                <Bell className="cursor-pointer hover:text-primary duration-250 ml-3" />
            </div>
            <Drawer open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header