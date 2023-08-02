"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Link from "next/link";

export default function PopUpModalCake(props) {
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
            <div className="flex items-center justify-center">
          <img src={props.url} className="h-28 w-28 md:w-32 md:h32  "/></div>
            <h3 className="mb-5 text-lg font-Kalam text-primary  ">
              {props.message}
            </h3>
            <div className="flex justify-center gap-4">
              <div
                className="bg-green-800 flex items-center justify-center rounded-md cursor-pointer  hover:bg-red-950"
                onClick={() => {
                  props.setopenModal(undefined);
                  window.open(`https://wa.me/+9877211141?text=I%20want%20to%20Know%20About%20${props.url}`, "_blank");
                }}
              >
                <div className="text-white px-3 py-1 text-sm ">
                  {props.btnText}
                </div>
              </div>
              
              <div
                className="bg-primary flex items-center justify-center rounded-md cursor-pointer  hover:bg-purple-950"
                onClick={() => {
                  props.setopenModal(undefined);
                  
                }}
              >
              
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
