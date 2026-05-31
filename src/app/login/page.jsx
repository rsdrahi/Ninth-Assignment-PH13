'use client'
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <h3 className='font-bold text-2xl text-center my-3 text-teal-800'>Log In</h3>
      <Card className='border'>
        <Form className="flex flex-col gap-4">
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
      </Card>
    </div>
  );
};

export default LoginPage;