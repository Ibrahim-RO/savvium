"use client"

import Form from "@/features/contact/components/Form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
import { useState } from "react"

type Props = {
    label: string
}

export function ModalFormContact({ label } : Props) {
    const [open, isOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={isOpen}>
            <DialogTrigger asChild>
                <Button
                    className="bg-blue-600 px-3 py-5 cursor-pointer hover:bg-blue-700 transition-colors text-base"
                >
                    {label}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-125 p-8">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Contáctanos</DialogTitle>
                    <DialogDescription>
                        Llena el formulario y te responderemos pronto.
                    </DialogDescription>
                </DialogHeader>

                <Form 
                    isOpen={isOpen}
                />
            </DialogContent>
        </Dialog>
    )
}