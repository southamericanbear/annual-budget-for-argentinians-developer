/*
  Warnings:

  - The primary key for the `BasicData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `baseSalary` on the `BasicData` table. All the data in the column will be lost.
  - You are about to drop the column `dollarBlue` on the `BasicData` table. All the data in the column will be lost.
  - Added the required column `name` to the `BasicData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `BasicData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicData" DROP CONSTRAINT "BasicData_pkey",
DROP COLUMN "baseSalary",
DROP COLUMN "dollarBlue",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "value" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BasicData_id_seq";
