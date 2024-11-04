'use client';

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Reservation } from '@/types/reservationTypes';
import mockData from '@/lib/mock_data.json';
import { toast } from 'sonner';
import type { SectionName } from '@/lib/types';

type TActiveSectionContext = {
  data: Reservation[],
  activeSection?: SectionName;
  setActiveSection?: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<Reservation[]>>;
  updateRowRecord: (updatedRow: Reservation) => void;
  createRowRecord: (newRow: Reservation) => void;
  deleteRowRecord: (row: any) => void;
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
  null
);

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [data, setData] = useState<Reservation[]>(mockData?.reservations);
  const createRowRecord = async (newRow: Reservation) => {
    await setData([...data, newRow]);
    toast.success('Invoice created successfully');
  };

  const updateRowRecord = (updatedRow: Reservation) => {
    const updatedData = data.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    toast.success('Invoice updated successfully');
    setData(updatedData);
  };

  const deleteRowRecord = (row: any) => {
    const updatedData = data.filter((r) => r.id !== row.id);
    setData(updatedData);
    toast.success('Invoice deleted successfully');
  };
  return (
    <ActiveSectionContext.Provider
      value={{
        timeOfLastClick,
        data,
        setTimeOfLastClick,
        setData,
        createRowRecord,
        updateRowRecord,
        deleteRowRecord,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );
  }

  return context;
};
