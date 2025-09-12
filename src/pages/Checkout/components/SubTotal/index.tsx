import { formatCurrency } from "@/shared/utils";

interface SubTotalProps {
  total: number;
}

export const SubTotal = ({ total }: SubTotalProps) => {
  return (
    <div className="mt-6 lg:mt-0 border-b border-quaternary pb-[30px] w-full flex flex-col items-end">
      <h4 className="font-bold">Subtotal</h4>

      <span className="font-bold text-2xl text-secondary">
        {formatCurrency(total)}
      </span>
    </div>
  );
};
