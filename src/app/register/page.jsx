'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { google } from 'better-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user, "User");
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    })
    // console.log({ data, error });
    if (data) {
      redirect('/login')
    }
    if (error) {
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
      <h3 className='font-bold text-2xl text-center my-3 text-teal-800'>Register</h3>
      <Card className='border'>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="name"
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField
            name="image"
            type="url"
          >
            <Label>Image</Label>
            <Input placeholder="Image URl..." />
            <FieldError />
          </TextField>
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
              Register
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
            Already have an account? <Link href={'/login'} className='text-teal-600 font-semibold underline'>Login</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;