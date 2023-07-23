/*
  Warnings:

  - You are about to drop the `TripBudget` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TripBudget";

-- CreateTable
CREATE TABLE "Budgets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "budgetDetails" JSONB NOT NULL,

    CONSTRAINT "Budgets_pkey" PRIMARY KEY ("id")
);
