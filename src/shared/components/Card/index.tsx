import { Fragment, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store";
import { formatCurrency } from "@/shared/utils";

import { Modal } from "../Modal";
import { Button } from "../Button";

import type { CardProps, VisibleModalType } from "./types";

export const Card = ({ card }: CardProps) => {
  const [visibleModal, setVisibleModal] = useState<VisibleModalType | null>(
    null
  );

  const { addItem, items } = useAppStore(
    useShallow((state) => ({
      addItem: state.addItem,
      items: state.items,
    }))
  );

  const handleOpenModal = () => {
    const alreadyAdded = items.some((item) => item.id === card.id);

    if (alreadyAdded) {
      setVisibleModal("already-added");
      return;
    }

    setVisibleModal("add");
    addItem(card);
  };

  const handleCloseModal = () => setVisibleModal(null);

  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <img src={card.card_images[0].image_url} alt={card.name} />

        <h3 className="text-center font-bold mt-[15px] line-clamp-2 h-[42px]">
          {card.name}
        </h3>

        <span className="text-center mt-2 text-primary font-bold">
          {formatCurrency(Number(card.card_prices[0].ebay_price ?? 0))}
        </span>

        <Button variant="primary" className="w-full" onClick={handleOpenModal}>
          Comprar
        </Button>
      </div>

      <Modal isOpen={visibleModal === "add"} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold text-center">
          Produto <strong className="text-secondary">{card.name}</strong>{" "}
          adicionado ao carrinho com sucesso!
        </h2>

        <Button variant="primary" className="w-full" onClick={handleCloseModal}>
          Fechar
        </Button>
      </Modal>

      <Modal
        isOpen={visibleModal === "already-added"}
        onClose={handleCloseModal}
      >
        <h2 className="text-xl font-bold text-center">
          Produto <strong className="text-secondary">{card.name}</strong> já foi
          adicionado ao carrinho!
        </h2>

        <Button variant="primary" className="w-full" onClick={handleCloseModal}>
          Fechar
        </Button>
      </Modal>
    </Fragment>
  );
};
