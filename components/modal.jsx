"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function PopUpModal(props) {
  return (
    <>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setopenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-primary " />
            <h3 className="mb-5 text-lg font-Kalam text-primary  ">
              {props.message}
            </h3>
            <div className="flex justify-center gap-4">
              <div
                className="bg-primary flex items-center justify-center rounded-md cursor-pointer  hover:bg-purple-950"
                onClick={() => {
                  props.setopenModal(undefined);
                  window.open("https://link.zomato.com/xqzv/rshare?id=17236117864b9edd", "_blank");
                }}
              >
                <div className="text-white px-3 py-1 text-sm ">
                  {props.btnText}
                </div>
              </div>
              <Button
                color="gray"
                onClick={() => props.setopenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
