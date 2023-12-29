-- CreateEnum
CREATE TYPE "Category" AS ENUM ('salary', 'rent', 'food', 'entertainment', 'transportation', 'utilities', 'travel', 'health', 'other');

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'other';
