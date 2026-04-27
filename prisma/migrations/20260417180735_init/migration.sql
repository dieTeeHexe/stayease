/*
  Warnings:

  - Added the required column `maxGuests` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewPicture` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "pricePerNight" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "previewPicture" TEXT NOT NULL
);
INSERT INTO "new_Property" ("city", "description", "details", "id", "pricePerNight", "title") SELECT "city", "description", "details", "id", "pricePerNight", "title" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
