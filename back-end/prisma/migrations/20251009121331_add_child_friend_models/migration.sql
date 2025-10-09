-- CreateTable
CREATE TABLE `Child` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `hairColor` VARCHAR(191) NOT NULL,
    `eyeColor` VARCHAR(191) NOT NULL,
    `comfortObject` VARCHAR(191) NOT NULL,
    `mainAbility` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvisibleFriend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `hairColor` VARCHAR(191) NOT NULL,
    `eyeColor` VARCHAR(191) NOT NULL,
    `comfortObject` VARCHAR(191) NOT NULL,
    `mainAbility` VARCHAR(191) NOT NULL,
    `childId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InvisibleFriend` ADD CONSTRAINT `InvisibleFriend_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `Child`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
