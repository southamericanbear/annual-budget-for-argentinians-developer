/*
  Warnings:

  - You are about to drop the column `budgetsId` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the `Budgets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_budgetsId_fkey";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "budgetsId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Budgets";
