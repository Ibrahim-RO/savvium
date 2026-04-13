import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function ErrorMessage({ children } : Props) {
  return (
    <p className="text-red-600 bg-red-50 border-l-2 border-l-red-600 px-3 py-2 w-full text-sm font-medium">* {children}</p>
  )
}
