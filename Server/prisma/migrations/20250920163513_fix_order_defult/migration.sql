/*
  Warnings:

  - You are about to drop the column `currentcy` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `currentcy`,
    ADD COLUMN `currency` VARCHAR(191) NOT NULL DEFAULT 'THB',
    MODIFY `amount` INTEGER NOT NULL DEFAULT 0,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    MODIFY `stripePaymentId` VARCHAR(191) NOT NULL DEFAULT '';
