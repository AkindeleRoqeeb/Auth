"use client"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemes'

import { 
  Form, 
  FormControl, 
  FormLabel, 
  FormField, 
  FormMessage, 
  FormItem } from '../ui/form';

import React from 'react';
import { CardWrapper } from './CardWrapper';
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../FormError'
import FormSuccess from '../FormSuccess'
import { login } from '@/actions/login'


export const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      login(values)
  }

  return (
    <CardWrapper
        headerLabel='welcome back'
        backButtonLabel="don't have an account?"
        backButtonHref="/auth/register"
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
                name='email'
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input
                      {...field}
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
                      placeholder='*********'
                      type='password'
                    />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <FormError message=''/> {/*Invalid Credentials!*/}
            <FormSuccess message=''/> {/*Email Sent!*/}
            <Button className='w-full' type='submit'>Submit</Button>
          </form>
        </Form>
    </CardWrapper>
  )
}

