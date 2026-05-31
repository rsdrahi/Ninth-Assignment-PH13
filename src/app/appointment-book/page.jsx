"use client"
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const AppointmentBook = () => {
  return (
    <div className='max-w-2xl m-auto'>
      <div className=' text-center my-3 space-y-2'>
        <h2 className='font-bold text-2xl text-teal-900'>Appointment Book</h2>
        <p className='text-muted font-medium'>Fill The Form Below To Your Next Appointment</p>
      </div>
      <Card className='shadow border border-teal-100'>
        <Form className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label>User Email</Label>
            <Input placeholder="User Email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="name"
            type="name"
          >
            <Label>Doctor Name</Label>
            <Input placeholder="Doctor Name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="name"
            type="name"
          >
            <Label>Patient Name</Label>
            <Input placeholder="Patient Name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="gender"
            type="name"
          >
            <Label>Gender</Label>
            <Input placeholder="Male/Female" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="phone"
            type="number"
          >
            <Label>Number</Label>
            <Input placeholder="Input Number" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="date"
            type="date"
          >
            <Label>Appointment Date</Label>
            <Input />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="time"
            type="time"
          >
            <Label>Appointment Time</Label>
            <Input />
            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AppointmentBook;