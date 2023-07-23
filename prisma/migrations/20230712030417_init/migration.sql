/*
  Warnings:

  - The `baseSalary` column on the `BasicData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BasicData" ALTER COLUMN "dolarBlue" DROP NOT NULL,
DROP COLUMN "baseSalary",
ADD COLUMN     "baseSalary" INTEGER DEFAULT 0;
