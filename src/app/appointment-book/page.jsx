"use client"
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const AppointmentBook = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const appointment = Object.fromEntries(formData.entries());
    // console.log(appointment);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    });
    const data = await res.json();
    // console.log(data, "Data");
    if (data) {
      toast.success('Appointment Booked Successfully')
    }
    else {
      toast.error('Something Went Wrong')
    }
  }

  return (
    <div className='max-w-2xl m-auto'>
      <div className='text-center my-3 space-y-2'>
        <h2 className='font-bold text-2xl text-teal-900'>Appointment Book</h2>
        <p className='text-muted font-medium'>Fill The Form Below To Your Next Appointment</p>
      </div>
      <Card className='shadow border border-teal-100'>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
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
            name="doctorName"
            type="text"
          >
            <Label>Doctor Name</Label>
            <Input placeholder="Doctor Name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="patientName"
            type="text"
          >
            <Label>Patient Name</Label>
            <Input placeholder="Patient Name" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="gender"
            type="text"
          >
            <Label>Gender</Label>
            <Input placeholder="Male/Female" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="phone"
            type="tel"
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
            <Button type="submit" className={'w-full'}>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AppointmentBook;