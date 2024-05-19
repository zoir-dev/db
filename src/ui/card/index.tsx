import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Image as NextImage } from '@nextui-org/image'
import { ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({ href, index, liked }: { href: string, index: number, liked?: boolean }) => {
    return (
        <Card className='dark:bg-[#111827] relative max-w-full sm:max-w-md w-full'>
            <CardBody className='p-0'>
                <Button isIconOnly className='absolute top-4 right-4 z-50' variant='flat'>
                    {liked ?
                        <Heart width={25} fill='#b91c1c' className='text-[#b91c1c]' />
                        :
                        <Heart width={25} />
                    }
                </Button>
                <NextImage as={Image} src={`https://picsum.photos/${800 + index}`} loading='lazy' radius='none' alt='rasm' className='w-full h-auto object-cover aspect-[5/3]' width={580} height={448} />
                <div className='p-4 flex flex-col gap-4'>
                    <h3 className='font-semibold text-xl'>Gumroh</h3>
                    <p className='text-default-500 text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi vitae aspernatur id atque, ex odit. Fuga expedita veritatis illum?
                    </p>
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
                    <Button fullWidth color='primary' variant='bordered'
                        as={Link} href={href} radius='sm'
                        className='group'
                        size='lg'
                        endContent={<ArrowRight width={23} className='group-hover:translate-x-3 group-hover:opacity-70 duration-250' />}
                    >
                        Watch
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default MovieCard