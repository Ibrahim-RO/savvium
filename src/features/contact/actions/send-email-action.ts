"use server"

import { Form, FormSchema } from "../types";

export async function sendEmail(input: Form) {
    console.log(input)

    const data = FormSchema.safeParse(input)

    if (!data.success) {
        return {
            error: "Hubo un error al enviar el formulario",
            success: ""
        }
    }

    // const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(data.data)
    // })

    return {
        error: "",
        success: ""
    }

}