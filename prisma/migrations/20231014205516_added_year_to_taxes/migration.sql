/*
  Warnings:

  - Added the required column `invoicesAmount` to the `Taxes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Taxes" ADD COLUMN     "invoicesAmount" INTEGER NOT NULL;
