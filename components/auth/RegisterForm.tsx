"use client"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import { 
  Form, 
  FormControl, 
  FormLabel, 
  FormField, 
  FormMessage, 
  FormItem } from '../ui/form';

import React, { startTransition, useState, useTransition } from 'react';
import { CardWrapper } from './CardWrapper';
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../FormError'
import FormSuccess from '../FormSuccess'
import { RegisterSchema } from '@/schemes';
import { register } from '@/actions/register';


export const RegisterForm = () => {

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {

    setError("")
    setSuccess("")

    startTransition(() => {
      register(values)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <CardWrapper
        headerLabel='Create an account  '
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showSocial
    >
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
          >

            <div className='space-y-4'>
            <FormField
                control={form.control} 
                name='name'
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='roqeeb akindele'
                    />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control} 
                name='email'
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='roqeebakindele@gmail.com'
                      type='email'
                    />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control} 
                name='password'
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='*********'
                      type='password'
                    />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} /> {/*Invalid Credentials!*/}
            <FormSuccess message={success} /> {/*Email Sent!*/}
            <Button className='w-full' type='submit' disabled={isPending}>Create an account</Button>
          </form>
        </Form>
    </CardWrapper>
  )
}

