"use client";
import React, { createContext, useState } from 'react';
import { PropsWithChildren } from 'react';
import { Reservation } from '@/types/reservationTypes';
import mockData from '@/lib/mock_data.json';

interface MockDataContextState {
  data: Reservation[];
  setData: React.Dispatch<React.SetStateAction<Reservation[]>>;
  updateRowRecord: (updatedRow: Reservation) => void;
  createRowRecord: (newRow: Reservation) => void;
  deleteRowRecord: (row: any) => void;
}

const MockDataContext = createContext<MockDataContextState>({
  data: [],
  setData: () => {},
  updateRowRecord: () => {},
  createRowRecord: () => {},
  deleteRowRecord: () => {},
});

export const MockDataProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Reservation[]>(mockData?.reservations);
  const createRowRecord = (newRow: Reservation) => {
    setData([...data, newRow]);
  };

  const updateRowRecord = (updatedRow: Reservation) => {
    const updatedData = data.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    setData(updatedData);
  };

  const deleteRowRecord = (row: any) => {
    const updatedData = data.filter((r) => r.id !== row.id);
    setData(updatedData);
  };
  const value: MockDataContextState = {
    data,
    setData,
    updateRowRecord,
    createRowRecord,
    deleteRowRecord
  };

  return (
    <MockDataContext.Provider value={value}>{children} </MockDataContext.Provider>
  );
};

export const useMockData = () => React.useContext(MockDataContext);