-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "registration" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_registration_key" ON "Students"("registration");
