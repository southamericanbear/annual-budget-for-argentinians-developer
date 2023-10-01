-- DropIndex
DROP INDEX "Account_user_id_key";

-- DropIndex
DROP INDEX "BasicData_user_id_key";

-- DropIndex
DROP INDEX "Budget_user_id_key";

-- DropIndex
DROP INDEX "Expense_user_id_key";

-- DropIndex
DROP INDEX "Taxes_user_id_key";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "user_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "BasicData" ALTER COLUMN "user_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Budget" ALTER COLUMN "user_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "user_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Taxes" ALTER COLUMN "user_id" DROP DEFAULT;
