'use client'
import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const ProfileModal = ({ user, onSubmit }) => {
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
                      <Input name="name"
                        // defaultValue={user?.name}
                        placeholder="Enter user name"
                      />
                    </TextField>
                    <TextField defaultValue={user?.image}
                      className="w-full"
                      variant="secondary">
                      <Label>Image</Label>
                      <Input name="image"
                        // defaultValue={user?.image}
                        placeholder="Enter image url"
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

export default ProfileModal;