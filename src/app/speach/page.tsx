'use client'
import { Button, Input } from "@nextui-org/react"
import { useState } from "react"

const Speach = () => {
    const [value, setValue] = useState<string>('')

    const speach = () => {
        const speachText = new SpeechSynthesisUtterance(value)
        window.speechSynthesis.speak(speachText)
    }
    return (
        <div className="flex gap-6 items-center max-w-sm mx-auto">
            <Input
                variant="bordered"
                radius="sm"
                placeholder="Enter word"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                color="primary"
            />
            <Button onClick={speach} color="primary" radius="sm">
                Click
            </Button>
        </div>
    )
}

export default Speach