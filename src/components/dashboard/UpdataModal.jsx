'use client'
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { refresh } from "next/cache";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LuSquarePen } from 'react-icons/lu';

const UpdataModal = ({ booking }) => {

  const router = useRouter();

  const { doctorName, patientName, date, time, _id } = booking
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookings = Object.fromEntries(formData.entries());
    // console.log(bookings, "Booking");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment/${_id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookings)
    })
    const data = await res.json();
    // console.log(data, "Data"); 
    if (date) {
      router.refresh();
      toast.success("Update Successful")
    }
  }

  return (
    <div>
      <Modal>
        <Button variant='outline'> <LuSquarePen /> Update</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className='text-center'>Update</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text" variant="secondary">
                      <Label>Doctor Name:</Label>
                      <Input placeholder="Enter Doctor Name"
                        value={doctorName}
                        disabled
                      />
                    </TextField>
                    <TextField
                      defaultValue={patientName}
                      className="w-full" name="email" type="email" variant="secondary">
                      <Label>Patient Name:</Label>
                      <Input placeholder="Enter your Name"
                        type="text"
                        name="patientName"
                      />
                    </TextField>
                    <TextField
                      defaultValue={date}
                      className="w-full" name="phone" type="tel" variant="secondary">
                      <Label>Date:</Label>
                      <Input placeholder="Enter your phone number"
                        type="date"
                        name="date"
                      />
                    </TextField>
                    <TextField
                      defaultValue={time}
                      className="w-full" name="company" variant="secondary">
                      <Label>Time:</Label>
                      <Input placeholder="Enter your company name"
                        type="time"
                        name="time"
                      />
                    </TextField>
                    <Modal.Footer>
                      <Button type="submit" slot="close" className={' w-full bg-gradient-to-r from-sky-500 to-teal-400 text-black'}>Save Changes</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdataModal;