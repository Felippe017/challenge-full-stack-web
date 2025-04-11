/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "cpf" CHAR(15) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Students_cpf_key" ON "Students"("cpf");
