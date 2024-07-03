-- CreateTable
CREATE TABLE "Data" (
    "id" TEXT NOT NULL,
    "nodeID" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "time" TEXT NOT NULL,
    "temp" DECIMAL(65,30) NOT NULL,
    "humidity" INTEGER NOT NULL,
    "battery" INTEGER NOT NULL,
    "health" TEXT NOT NULL,
    "employeeId" TEXT,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
