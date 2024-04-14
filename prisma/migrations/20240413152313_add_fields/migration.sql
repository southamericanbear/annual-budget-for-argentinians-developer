/*
  Warnings:

  - You are about to drop the column `userId` on the `basic_data` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `taxes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "basic_data" DROP CONSTRAINT "basic_data_userId_fkey";

-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_userId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_userId_fkey";

-- DropForeignKey
ALTER TABLE "taxes" DROP CONSTRAINT "taxes_userId_fkey";

-- AlterTable
ALTER TABLE "basic_data" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "userId",
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "userId",
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "taxes" DROP COLUMN "userId",
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "basic_data" ADD CONSTRAINT "basic_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxes" ADD CONSTRAINT "taxes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
