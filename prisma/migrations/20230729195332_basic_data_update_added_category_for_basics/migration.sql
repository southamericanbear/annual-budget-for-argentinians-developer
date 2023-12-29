/*
  Warnings:

  - The `category` column on the `Budget` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `value` on the `BasicData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BudgetCategory" AS ENUM ('salary', 'rent', 'food', 'entertainment', 'transportation', 'utilities', 'travel', 'health', 'other');

-- CreateEnum
CREATE TYPE "ExpensesCategory" AS ENUM ('salary', 'rent', 'food', 'other');

-- CreateEnum
CREATE TYPE "BasicDataCategory" AS ENUM ('rent', 'salary', 'dollar', 'other');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('income', 'expense');

-- AlterTable
ALTER TABLE "BasicData" ADD COLUMN     "category" "BasicDataCategory" NOT NULL DEFAULT 'other',
DROP COLUMN "value",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "category",
ADD COLUMN     "category" "BudgetCategory" NOT NULL DEFAULT 'other';

-- DropEnum
DROP TYPE "Category";
