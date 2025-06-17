"use client"
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '@/lib/validation'
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import CustomInput from '@/components/ChordUI/form/CustomInput'
import SubmitButton from '@/components/ChordUI/form/SubmitButton'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { FormInputType } from '../sign/page'
import { login } from '@/lib/actions/user.action'



const page = () => {
  const route = useRouter()
  const [loading, setloading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setloading(true);
    try {
     const user = await login(values)
     toast(`Login Success. You have been logged in successfully with email ${values.email}`)
     route.push('/')
    } catch (error) {
      console.error('Sign up failed:', error)
      toast(`Sign Up Failed. ${error}`)
    } finally {
      setloading(false)
    }
  }
  return (
    <div className='dot px-2 h-full w-full'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Sign Up to ChordLABS</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter the details below to sign up to ChordLABS
            </p>
          </div>
          {/** Form Section */}
          <div className='grid gap-6'>
            <CustomInput
              control={form.control}
              name="email"
              forminputtype={FormInputType.EMAIL}
              placeholder="Enter your email"
              label="Email"
            />
            <CustomInput
              control={form.control}
              name="password"
              forminputtype={FormInputType.PASSWORD}
              placeholder="Enter your password"
              label="Password"
            />
          </div>
          {/** Submit Button */}
          <SubmitButton
            isLoading={loading}
            children="Sign Up"
          />
        </form>
      </Form>
    </div>
  )
}

export default page