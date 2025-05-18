-- DropForeignKey
ALTER TABLE "SlotOrder" DROP CONSTRAINT "SlotOrder_slotCustomerId_fkey";

-- DropForeignKey
ALTER TABLE "SlotOrder" DROP CONSTRAINT "SlotOrder_slotId_fkey";

-- DropForeignKey
ALTER TABLE "SlotOrder" DROP CONSTRAINT "SlotOrder_slotVehicleId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleOwnerId_fkey";

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleOwnerId_fkey" FOREIGN KEY ("vehicleOwnerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlotOrder" ADD CONSTRAINT "SlotOrder_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "Slot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlotOrder" ADD CONSTRAINT "SlotOrder_slotCustomerId_fkey" FOREIGN KEY ("slotCustomerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlotOrder" ADD CONSTRAINT "SlotOrder_slotVehicleId_fkey" FOREIGN KEY ("slotVehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
