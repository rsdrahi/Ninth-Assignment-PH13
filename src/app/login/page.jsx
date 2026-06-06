'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user, 'User');

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password
    })
    console.log({ data, error });
    if (data) {
      toast.success('Logged in Successful')
      redirect('/')
    }
    else {
      toast.error("Please SignUp First!")
    }

  }
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    })
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <h3 className='font-bold text-2xl text-center my-3 text-teal-800'>Log In</h3>
      <Card className='border'>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter Your Password" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button type="submit" variant="outline" className={'bg-gradient-to-r from-sky-500 to-teal-400 w-full text-black'}>
              Log In
            </Button>
          </div>
        </Form>
        <div className='flex justify-center items-center gap-2'>
          <Separator className='flex-1' />
          <div className='whitespace-nowrap'>
            OR
          </div>
          <Separator className='flex-1' />
        </div>
        <div>
          <Button onClick={handleGoogleSignIn} variant='outline' className={'w-full font-semibold'}>
            <FcGoogle />  Continue With Google
          </Button>
          <div className='my-5 text-center'>
            Don't Have an Account? <Link href={'/register'} className='text-teal-600 font-semibold underline'>Register</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;