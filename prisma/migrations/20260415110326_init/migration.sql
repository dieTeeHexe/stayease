-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "pricePerNight" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
