/*
  Warnings:

  - You are about to drop the column `user_id` on the `account_transactions` table. All the data in the column will be lost.
  - Added the required column `userId` to the `account_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "account_transactions" DROP CONSTRAINT "account_transactions_user_id_fkey";

-- AlterTable
ALTER TABLE "account_transactions" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT NOT NULL;
