/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "BasicData" (
    "id" SERIAL NOT NULL,
    "dolarBlue" INTEGER NOT NULL,

    CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id")
);
