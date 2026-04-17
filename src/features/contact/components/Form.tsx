import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { type Form, FormSchema } from '../types'
import ErrorMessage from './ErrorMessage'
import { sendEmail } from '../actions/send-email-action'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  isOpen?: Dispatch<SetStateAction<boolean>>
}

export default function Form({ isOpen } : Props) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit"
  })

  const onSubmit = async (data: Form) => {

    const { success, error } = await sendEmail(data)

    if (success) {
      toast.success(success)

      if(isOpen) {
        isOpen(false)
      }
    }

    if (error) {
      toast.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-5'
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='name' className='font-semibold'>Nombre</label>
        <input
          type='text'
          id='name'
          placeholder="Tu nombre"
          className='border border-slate-200 w-full p-2 rounded-md'
          {...register("name")}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='company' className='font-semibold'>Empresa</label>
        <input
          type='text'
          id='company'
          placeholder="Nombre de tu empresa"
          className='border border-slate-200 w-full p-2 rounded-md'
          {...register("company")}
        />
        {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='font-semibold'>Email</label>
        <input
          type='email'
          id='email'
          placeholder="tu@empresa.com"
          className='border border-slate-200 w-full p-2 rounded-md'
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='phone' className='font-semibold'>Teléfono</label>
        <input
          type='number'
          id='phone'
          placeholder="1234567890"
          className='border border-slate-200 w-full p-2 rounded-md'
          {...register("phone")}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </div>

      <input
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full py-3 text-white rounded-lg cursor-pointer font-semibold'
        value={"Agenda tu demo personalizada"}
      />
    </form>
  )
}
