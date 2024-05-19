'use client'
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Login = () => {
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
            router.push('/')
        } catch (error: any) {
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full py-6 overflow-y-auto min-h-[100vh] flex items-center justify-center">
            <Card className="w-full max-w-[400px] dark:bg-gray-900">
                <CardBody>
                    <h2 className="text-center font-semibold text-xl pb-4">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pb-2" >
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
                            Kirish
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login