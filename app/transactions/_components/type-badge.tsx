import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary font-bold">
        <CircleIcon className="mr-1 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted text-destructive hover:bg-destructive font-bold">
        <CircleIcon className="mr-1 fill-destructive" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted text-secondary hover:bg-secondary font-bold">
      <CircleIcon className="mr-1 fill-secondary" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
