'use client';

import { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { DatePickerWithRange } from '@/components/ui/dateRangePicker';
import { Button } from '@/components/ui/button-newyork';
import { Input } from '@/components/ui/input-newyork';
import { DataTableViewOptions } from '@/components/ui/data-table-view-options';
import { Plus } from 'lucide-react';
import { DataTableAddNew } from './data-table-add-new';

import {
  Dialog,
  DialogHeader,
  DialogDescription,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { DataTableFacetedFilter } from '@/components/ui/data-table-faceted-filter';
import { statuses, areas, shifts } from '@/lib/data';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCloseDialog = () => {
    setShowCreateModal(!showCreateModal)
  }
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by name..."
          value={
            (table.getColumn('lastName')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) => {
            table.getColumn('lastName')?.setFilterValue(event.target.value);
            table.getColumn('firstName')?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <DatePickerWithRange /> */}
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn('shift') && (
          <DataTableFacetedFilter
            column={table.getColumn('shift')}
            title="Shift"
            options={shifts}
          />
        )}
        {table.getColumn('area') && (
          <DataTableFacetedFilter
            column={table.getColumn('area')}
            title="Area"
            options={areas}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-3">
        <DataTableViewOptions table={table} />
        <Dialog
          onOpenChange={() => setShowCreateModal(!showCreateModal)}
          open={showCreateModal}
          defaultOpen={showCreateModal}
        >
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              <Plus className="h-4 w-4" />
              Add new Invoice
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Invoice</DialogTitle>
              <DialogDescription>Create a new invoice</DialogDescription>
            </DialogHeader>
            <DataTableAddNew handleCloseDialog={handleCloseDialog} />
            <DialogFooter>
              <Button onClick={() => setShowCreateModal(!showCreateModal)}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
