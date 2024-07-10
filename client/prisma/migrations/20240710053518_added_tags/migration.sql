/*
  Warnings:

  - A unique constraint covering the columns `[nodeID]` on the table `Data` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Data_nodeID_key" ON "Data"("nodeID");
