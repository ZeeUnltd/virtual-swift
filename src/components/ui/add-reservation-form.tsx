'use client';

import { useState } from 'react';
import {z} from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form';
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
    onClose: () => void;
    isOpen: boolean;
  }

  const reservationSchema = z.object({
    id: z.string().optional(),
    businessDate: z.string().optional(),
    status: z.string().optional(),
    shift: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional(),
    quantity: z.number().optional(),
    area: z.string().optional(),
    customer: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }).optional(),
    guestNotes: z.string().optional(),
  });
  
  type ReservationFormInputs = z.infer<typeof reservationSchema>;

export function DataTableAddNew<TData>() {
    const { register, handleSubmit, formState } = useForm<ReservationFormInputs>({
        defaultValues: {
          id: undefined,
          businessDate: '',
          status: '',
          shift: '',
          start: '',
          end: '',
          quantity: 0,
          area: '',
          customer: {
            firstName: '',
            lastName: '',
          },
          guestNotes: '',
        },
        mode: 'onBlur',
      });
      const handleFormSubmit: SubmitHandler<ReservationFormInputs> = (data) => {
        // Perform form validation and submission logic here
        console.log('Form data:', data);
      
        // Add the new reservation to the data array and update the state
        // setData((prev: Reservation[]) => [...prev, data]);
        // createRowRecord(data);
      
        // // Reset the form
        // reset();
      };

      return (
        <>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
  <div className="grid gap-4 py-4">
    <div className="flex justify-between gap-3">
      <div className="w-full">
        <label htmlFor="firstName" />
        First Name
        <Input
          {...register('customer.firstName')}
          id="firstName"
          placeholder="Yuri"
        />
      </div>

      <div className="w-full">
        <label htmlFor="lastName" />
        Last Name
        <Input
          {...register('customer.lastName')}
          id="lastName"
          placeholder="Burchell"
        />
      </div>
    </div>
    {/* ... */}
    <Button type="submit">Submit</Button>
  </div>
</form>
        </>
      )
}