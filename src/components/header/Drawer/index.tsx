'use client'
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import SideBar from '@/components/sidebar';
interface thisProps {
    open: boolean,
    setOpen: (val: boolean) => void
}
const Drawer = ({ open, setOpen }: thisProps) => {
    const bodyRef = useRef(typeof document !== 'undefined' && document?.querySelector('body'));
    const router = useRouter()
    const pathName = usePathname()


    useEffect(() => {
        const updatePageScroll = () => {
            if (typeof document !== 'undefined' && bodyRef.current) {
                if (open) {
                    bodyRef.current.style.overflow = 'hidden';
                } else {
                    bodyRef.current.style.overflow = '';
                }
            }
        };
        if (typeof window !== 'undefined') {
            updatePageScroll();
        }
    }, [open]);
    return ReactDOM.createPortal(
        <div id='drawer'>
            <div className={`fixed z-[-1] w-full top-0 bottom-0 h-full duration-500 drawer 
                ${open ? 'backdrop-blur-md !z-[1000]' : 'opacity-0'}`}
            />
            <div className={`fixed shadow-sidebar max-w-xs w-full !z-40 !duration-500 h-[100vh] top-0 left-0 flex flex-col gap-[16px] items-center ${open ? 'translate-x-[0px] duration-400' : '-translate-x-[350px]'} bg-background`}>
                <div className={open ? 'w-full !z-40 h-full' : 'hidden'}>
                    <SideBar drawer={true} onClose={() => setOpen(false)} />
                </div>
            </div>
        </div >,
        bodyRef.current! || document.body
    )
}

export default Drawer