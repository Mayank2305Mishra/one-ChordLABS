"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import CustomInput from '@/components/ChordUI/form/CustomInput'
import SubmitButton from '@/components/ChordUI/form/SubmitButton'
import { userDemographicsSchema } from '@/lib/validation'
import { FormInputType } from '../sign/page'
import { toast } from 'sonner'


const page = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof userDemographicsSchema>>({
    resolver: zodResolver(userDemographicsSchema),
    defaultValues: {
      dob: new Date(),
      gender: "male",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userDemographicsSchema>) {
    setLoading(true);
    try {
      console.log(values)
    } catch (error) {
      console.error('Sign up failed:', error)
      toast(`Sign Up Failed. ${error}`)
    } finally {
      setLoading(false)
    }
    console.log(values)
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
              name="dob"
              forminputtype={FormInputType.DATE_PICKER}
              placeholder="Enter your date of birth"
              label="Date of Birth"
            />
            <CustomInput
              control={form.control}
              name="gender"
              forminputtype={FormInputType.SELECT}
              placeholder="Enter your gender"
              label="Gender"
            />
            <CustomInput
              control={form.control}
              name="phone"
              forminputtype={FormInputType.PHONE_INPUT}
              placeholder="Enter your phone number"
              label="Phone Number"
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