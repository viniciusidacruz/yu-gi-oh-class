import { useRef, type MouseEvent } from "react";

import type { ModalProps } from "./types";

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-[#2D3331BF] bg-opacity-50 flex justify-center items-center px-8"
    >
      <div className="bg-white w-[514px] rounded-[20px] flex flex-col items-center p-10">
        {children}
      </div>
    </div>
  );
};
