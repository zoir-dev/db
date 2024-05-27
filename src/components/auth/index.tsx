'use client'
import { http } from "@/utils/http"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Logo from "@/assets/logo.svg"
import logo from "@/assets/logo.svg";
import Image from "next/image";

const Auth = ({ login }: { login?: boolean }) => {
    const [password, setPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ username: string, email: string, password: string }>()

    const onSubmit = async (form: { username?: string, email: string, password: string }) => {
        try {
            setLoading(true)
            await http.post(login ? 'auth/sign-in' : "auth/sign-up", form).then(res => console.log(res.data))
            router.push('/')
            reset()
        } catch (error: any) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full py-6 overflow-y-auto h-[95vh] flex flex-col items-center justify-center">
            <div className="mb-7 hover:scale-105 transition duration-200">
                <Link href='/'>
                    <Image src={logo.src} alt="logo" width={160} height={60} />
                </Link>
            </div>
            <Card className="w-full max-w-[400px] dark:bg-gray-900">
                <CardBody>
                    <h2 className="text-center font-semibold text-xl pb-4">{login ? "Login" : "Register"}</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pb-2" >
                        <Input
                            placeholder='Enter username'
                            variant='bordered'
                            radius='sm'
                            label="Username"
                            classNames={{ label: "text-dark" }}
                            labelPlacement='outside'
                            color='primary'
                            {...register('email', {
                                required: 'Enter username',
                            })}
                            isInvalid={!!errors.username}
                            errorMessage={errors.username && errors.username?.message}
                            isDisabled={loading}
                        />
                        <Input
                            placeholder='Enter email'
                            variant='bordered'
                            radius='sm'
                            label="Email"
                            classNames={{ label: "text-dark" }}
                            labelPlacement='outside'
                            color='primary'
                            {...register('email', {
                                required: 'Enter email', pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                    message: "Enter correct email"
                                }
                            })}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email && errors.email?.message}
                            isDisabled={loading}
                        />
                        <Input
                            placeholder='Enter a password'
                            variant='bordered'
                            radius='sm'
                            label="Password"
                            classNames={{ label: "text-dark" }}
                            type={!password ? 'password' : 'string'}
                            labelPlacement='outside'
                            color='primary'
                            {...register('password', { required: "Enter a password" })}
                            endContent={password ? (
                                <EyeOff

                                    onClick={() => setPassword(!password)}
                                    className="w-5 cursor-pointer text-foreground-500"
                                />
                            ) : (
                                <Eye
                                    onClick={() => setPassword(!password)}
                                    className="w-5 cursor-pointer text-foreground-500"
                                />
                            )}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password && errors.password?.message}
                            isDisabled={loading}
                        />
                        <Button type="submit" color="primary" fullWidth radius="sm" isLoading={loading}>
                            Login
                        </Button>
                    </form>
                    <p className="text-sm !font-normal">
                        {login ? "Don't have an account?" : "Already have an account?"}
                        <Link href={login ? '/register' : '/login'} className="px-2 text-primary">
                            {login ? 'Register' : 'Login'}
                        </Link>
                    </p>
                </CardBody>
            </Card>
        </div>
    )
}

export default Auth