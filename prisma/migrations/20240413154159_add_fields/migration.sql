/*
  Warnings:

  - Made the column `user_id` on table `accounts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `basic_data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `budgets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `expenses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `taxes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "basic_data" DROP CONSTRAINT "basic_data_user_id_fkey";

-- DropForeignKey
ALTER TABLE "budgets" DROP CONSTRAINT "budgets_user_id_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_user_id_fkey";

-- DropForeignKey
ALTER TABLE "taxes" DROP CONSTRAINT "taxes_user_id_fkey";

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "basic_data" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "budgets" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "expenses" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "taxes" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "basic_data" ADD CONSTRAINT "basic_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "taxes" ADD CONSTRAINT "taxes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
