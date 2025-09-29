/*
  Warnings:

  - You are about to drop the column `roles` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `roles`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
