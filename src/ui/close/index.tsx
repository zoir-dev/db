
import './style.css'
const Close = ({ open, setOpen }: { open: boolean, setOpen: (val: boolean) => void }) => {
    return (
        <div className={`cursor-pointer p-1 relative`} onClick={() => setOpen(!open)}>
            <div id="nav-icon1" className={open ? 'open !duration-0' : ''}>
                <span className='bg-white dark:!bg-primary'></span>
                <span className='bg-white dark:!bg-primary'></span>
                <span className='bg-white dark:!bg-primary'></span>
            </div>
        </div>
    )
}

export default Close