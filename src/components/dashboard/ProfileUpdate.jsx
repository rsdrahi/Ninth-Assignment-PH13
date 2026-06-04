import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { object } from 'better-auth';

const ProfileUpdate = ({ user }) => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const update = Object.fromEntries(formData.entries());
    console.log(update, "Update");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${user.email}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
    const data = await res.json();
    console.log(data, "Data");
  }

  return (
    <div>
      <Modal>
        <Button className='w-52'>Update</Button>
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
                    <TextField defaultValue={user?.name} className="w-full" name="name" type="text" variant="secondary">
                      <Label>User Name:</Label>
                      <Input placeholder="Enter user name"
                        name='name'
                        type='text'
                      />
                    </TextField>
                    <TextField defaultValue={user?.image}
                      className="w-full" name="email" type="email" variant="secondary">
                      <Label>Image</Label>
                      <Input placeholder="Enter image url"
                        type="url"
                        name="image"
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

export default ProfileUpdate;