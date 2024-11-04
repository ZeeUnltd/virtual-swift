'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input-newyork';
import {
  ReservationStatus,
  ReservationShifts,
  ReservationArea,
  Reservation,
} from '@/types/reservationTypes';
import { Button } from './button';

import { useActiveSection } from '../active-section-provider';

interface DataTableAddNewProps<TData> {
  handleCloseDialog: () => void;
}

export function DataTableAddNew<TData>({
  handleCloseDialog,
}: DataTableAddNewProps<TData>) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const {
    activeSection,
    setActiveSection,
    data,
    setData,
    createRowRecord,
    updateRowRecord,
    deleteRowRecord,
  } = useActiveSection();

  const handleInputChange = (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    setFormData((prev: any) => {
      return { ...prev, [e?.target.id]: e?.target.value };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idT = data.length + 100;
    if (formData) {
      const {
        id,
        businessDate,
        status,
        shift,
        start,
        end,
        quantity,
        area,
        firstName,
        lastName,
        guestNotes,
      } = formData;
      const newReservation: Reservation = {
        id: idT,
        businessDate,
        status,
        shift,
        start,
        end,
        quantity,
        area,
        customer: { firstName, lastName },
        guestNotes,
      };
      await createRowRecord(newReservation);
      setFormData(null);
      handleCloseDialog();
    }

    setOpen(false);
  };
  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between gap-3">
            <div className="w-full">
              <label htmlFor="firstName" />
              First Name
              <Input
                onChange={(e) => handleInputChange(e)}
                id="firstName"
                placeholder="Yuri"
              />
            </div>

            <div className="w-full">
              <label htmlFor="lastName" />
              Last Name
              <Input
                onChange={(e) => handleInputChange(e)}
                id="lastName"
                placeholder="Burchell"
              />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="w-full gap-2">
              <label htmlFor="businessDate" />
              Business Date
              <Input
                onChange={(e) => handleInputChange(e)}
                id="businessDate"
                type="date"
                placeholder="DD.MM.YYYY"
              />
            </div>
            <div className="w-full gap-2">
              <label htmlFor="end" />
              Shift
              <select
                className="block w-full p-2"
                onChange={(e) => handleInputChange(e)}
                id="shift"
              >
                <option value="" selected disabled>
                  Select
                </option>
                {ReservationShifts.map((status) => (
                  <option key={status.name} value={status.value}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="w-full gap-2">
              <label htmlFor="start" />
              Start Time
              <Input
                onChange={(e) => handleInputChange(e)}
                id="start"
                type="datetime-local"
              />
            </div>
            <div className="w-full gap-2">
              <label htmlFor="end" />
              End Time
              <Input
                onChange={(e) => handleInputChange(e)}
                id="end"
                type="datetime-local"
              />
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="w-full gap-2">
              <label htmlFor="status" />
              Status
              <select
                className="block w-full p-2"
                onChange={(e) => handleInputChange(e)}
                id="status"
              >
                <option value="" selected disabled>
                  Select
                </option>
                {ReservationStatus.map((status) => (
                  <option key={status.name} value={status.value}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full gap-2">
              <label htmlFor="area" />
              Area
              <select
                className="block w-full p-2"
                onChange={(e) => handleInputChange(e)}
                id="area"
              >
                <option value="" selected disabled>
                  Select
                </option>
                {ReservationArea.map((status) => (
                  <option key={status.name} value={status.value}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="quantity" />
            Quantity
            <Input
              onChange={(e) => handleInputChange(e)}
              id="quantity"
              type="number"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="guestNotes" />
            Guest Notes
            <textarea
              onChange={(e) => handleInputChange(e)}
              id="guestNotes"
              className="p-5"
              placeholder="Likes the blue cheese burger"
            />
          </div>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}
