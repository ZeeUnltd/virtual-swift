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
  edit: boolean;
  oldData: object | null;
}

export function DataTableAddNew<TData>({
  handleCloseDialog,
  edit,
  oldData,
}: any) {
  if (edit) {
    oldData.lastName = oldData?.customer?.lastName;
    oldData.firstName = oldData?.customer?.firstName;
    // oldData.businessDate = oldData?.businessDate.replace('.','/') ?? '';
    // oldData.start = oldData?.start.replace('.','/') ?? '';
    // oldData.end = oldData?.end.replace('.','/') ?? '';
  }
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(oldData ?? null);
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
  let newReservation: Reservation;
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

    const idT = !edit ? data.length + 1 : formData?.id;
    newReservation = {
      id: idT,
      businessDate: businessDate ?? '',
      status: status ?? '',
      shift: shift ?? '',
      start: start ?? '',
      end: end ?? '',
      quantity: quantity ?? 0,
      area: area ?? '',
      customer: { firstName: firstName ?? '', lastName: lastName ?? '' },
      guestNotes: guestNotes ?? '',
    };
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit) await updateRowRecord(newReservation);
    else await createRowRecord(newReservation);
    setFormData(null);
    handleCloseDialog();

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
                defaultValue={formData?.firstName}
                id="firstName"
                placeholder="Yuri"
              />
            </div>

            <div className="w-full">
              <label htmlFor="lastName" />
              Last Name
              <Input
                onChange={(e) => handleInputChange(e)}
                defaultValue={formData?.lastName}
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
                defaultValue={formData?.businessDate}
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
                value={formData?.shift}
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
                defaultValue={formData?.start}
                onChange={(e) => handleInputChange(e)}
                id="start"
                type="datetime-local"
              />
            </div>
            <div className="w-full gap-2">
              <label htmlFor="end" />
              End Time
              <Input
                defaultValue={formData?.end}
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
                value={formData?.status}
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
                value={formData?.area}
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
              defaultValue={formData?.quantity}
              onChange={(e) => handleInputChange(e)}
              id="quantity"
              type="number"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="guestNotes" />
            Guest Notes
            <textarea
              defaultValue={formData?.guestNotes}
              onChange={(e) => handleInputChange(e)}
              id="guestNotes"
              className="p-5"
              placeholder="Likes the blue cheese burger"
            />
          </div>

          <Button type="submit">{!edit ? 'Submit' : 'Update'}</Button>

          <Button onClick={handleCloseDialog} variant={'outline'} type="submit">
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}
