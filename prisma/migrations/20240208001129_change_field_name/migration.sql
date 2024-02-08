/*
  Warnings:

  - You are about to drop the column `hassedPassword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hassedPassword`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;
