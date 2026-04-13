import z from "zod";

export const FormSchema = z.object({
    name: z.string().min(3, "El nombre es obligatorio"),
    company: z.string().min(3, "La empresa es obligatoria"),
    email: z.email("Email no válido"),
    phone: z.string().min(1, "Teléfono obligatorio").refine((val) => !val || /^[0-9+\s()-]{7,}$/.test(val), {message: "Teléfono inválido",}),
})

export type Form = z.infer<typeof FormSchema>