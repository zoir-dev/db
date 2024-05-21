
import Video from 'next-video'
import src from 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
import { Chip } from '@nextui-org/react'

const WatchPage = () => {

    return (
        <div className='w-full overflow-hidden'>
            <Video src={src}
                poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg'
                blurDataURL='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg'
                accentColor='#006FEE' />
            <div className='pt-6 sm:pt-10 flex flex-col gap-4'>
                <h2 className='text-2xl sm:text-4xl font-semibold'>Title</h2>
                <p className='text-default-500 sm:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugiat unde, suscipit doloremque impedit recusandae a consectetur corrupti pariatur similique quibusdam necessitatibus quisquam reiciendis odit dicta qui officiis! Dolor recusandae vitae deleniti facere, tempore sint deserunt provident quo natus ratione rem totam, reiciendis minima eveniet ipsum fugiat qui iure harum?
                </p>
                <p className='text-default-500'>2023.01.01</p>
                <div className='flex flex-wrap gap-3 py-2'>
                    {
                        ['Jangovor', 'Fantastic']
                            .map((item, index) =>
                                <Chip key={index} color='primary' variant='bordered'>
                                    {item}
                                </Chip>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default WatchPage