"use client";
import { CreateServerModel } from "@/components/modals/create-server-model";
import { EditServerModel } from "@/components/modals/edit-server-model";
import { InviteModel } from "@/components/modals/invite-model";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModel />
      <InviteModel />
      <EditServerModel />
    </>
  );
};

export default ModalProvider;
