/*
  Warnings:

  - You are about to drop the column `dolarBlue` on the `BasicData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BasicData" DROP COLUMN "dolarBlue",
ADD COLUMN     "dollarBlue" INTEGER DEFAULT 0;
