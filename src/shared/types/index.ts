import z from "zod"

const NavigationSchema = z.object({
    name: z.string(),
    url: z.string()
})

export type Navigation = z.infer<typeof NavigationSchema>