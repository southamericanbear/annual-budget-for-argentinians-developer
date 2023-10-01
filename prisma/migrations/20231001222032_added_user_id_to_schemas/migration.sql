/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `BasicData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Expense` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Taxes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "BasicData" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "Taxes" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT 'undefined';

-- CreateIndex
CREATE UNIQUE INDEX "Account_user_id_key" ON "Account"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "BasicData_user_id_key" ON "BasicData"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_user_id_key" ON "Budget"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Expense_user_id_key" ON "Expense"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Taxes_user_id_key" ON "Taxes"("user_id");
