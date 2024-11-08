/*
  Warnings:

  - You are about to drop the column `userID` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "userID",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);
