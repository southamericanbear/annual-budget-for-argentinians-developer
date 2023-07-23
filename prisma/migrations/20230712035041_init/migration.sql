-- CreateTable
CREATE TABLE "TripBudget" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tripDetails" JSONB NOT NULL,

    CONSTRAINT "TripBudget_pkey" PRIMARY KEY ("id")
);
