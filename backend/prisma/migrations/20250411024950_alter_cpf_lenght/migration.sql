/*
  Warnings:

  - You are about to alter the column `cpf` on the `Students` table. The data in that column could be lost. The data in that column will be cast from `Char(15)` to `Char(11)`.

*/
-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "cpf" SET DATA TYPE CHAR(11);
