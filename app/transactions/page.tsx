import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
  // acessar as transações do meu banco de dados

  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        {/*TÍTULO E BOTÃO*/}
        <div className="flex w-full justify-between items-center p-6">
          <h1 className="font-bold text-2xl">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
