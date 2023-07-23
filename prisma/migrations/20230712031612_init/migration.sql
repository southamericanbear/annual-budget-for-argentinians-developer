/*
  Warnings:

  - The `dolarBlue` column on the `BasicData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BasicData" DROP COLUMN "dolarBlue",
ADD COLUMN     "dolarBlue" INTEGER DEFAULT 0;
