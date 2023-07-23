/*
  Warnings:

  - You are about to drop the column `budgetDetails` on the `Budgets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Budgets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Budgets" DROP COLUMN "budgetDetails",
DROP COLUMN "name";

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "budgetDetails" JSONB NOT NULL,
    "budgetsId" TEXT,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_budgetsId_fkey" FOREIGN KEY ("budgetsId") REFERENCES "Budgets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
