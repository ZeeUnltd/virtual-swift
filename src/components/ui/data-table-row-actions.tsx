'use client';

import * as React from 'react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { DataTableAddNew } from './data-table-add-new';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import mockData from '@/lib/mock_data.json';
import { Reservation } from '@/types/reservationTypes';
import { useActiveSection } from '../active-section-provider';
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
import { Plus } from 'lucide-react';
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const currentData = row.original;
  const [showEditModal, setShowEditModal] = React.useState(false);
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowEditModal(!showEditModal)
  };
  const {
    activeSection,
    setActiveSection,
    data,
    setData,
    createRowRecord,
    updateRowRecord,
    deleteRowRecord,
  } = useActiveSection();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => setShowEditModal(true)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => deleteRowRecord(currentData)}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>

      {showEditModal && (
        <>
          <Dialog
            onOpenChange={() => setShowEditModal(!showEditModal)}
            open={showEditModal}
            defaultOpen={showEditModal}
          >
            <DialogTrigger >
              <Button size="sm" className="relative">
                <Plus className="h-4 w-4" />
                Edit Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Invoice</DialogTitle>
                <DialogDescription>Edit an invoice</DialogDescription>
              </DialogHeader>
              <DataTableAddNew handleCloseDialog={handleEdit} edit oldData={currentData}/>
            
            </DialogContent>
          </Dialog>
        </>
      )}
    </DropdownMenu>
  );
}
