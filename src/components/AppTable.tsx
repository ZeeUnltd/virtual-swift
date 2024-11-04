'use client';
import * as React from 'react';
import { Ellipsis } from 'lucide-react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { statuses } from '@/lib/data';
import { DataTableToolbar } from '@/components/ui/DataToolBox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import mockData from '@/lib/mock_data.json';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import { Reservation } from '@/types/reservationTypes';
import { DataTableRowActions } from '@/components/ui/data-table-row-actions';
import { useActiveSection } from './active-section-provider';

// const data: Reservation[] = mockData.reservations;

export function AppTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  // const [data, setData] = React.useState<Reservation[]>(mockData.reservations);

  const { activeSection, setActiveSection, data, setData, createRowRecord, updateRowRecord, deleteRowRecord } = useActiveSection();
  const columns: ColumnDef<Reservation>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
    },
    {
      accessorKey: 'businessDate',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => {
        const dateValue = row.getValue('businessDate');
        if (typeof dateValue === 'string') {
          // Split the date string and rearrange it to year-month-day format
          const [day, month, year] = dateValue.split('.');
          const date = new Date(`${year}-${month}-${day}`);

          // Check if the date is valid
          if (!isNaN(date.getTime())) {
            return (
              <div>
                {date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            );
          }
        }
        return <div>Invalid Date</div>;
      },
    },
    {
      accessorKey: 'customer.firstName',
      id: 'firstName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="First Name" />
      ),
      filterFn: (row, id, value) => {
        id;
        return (
          row.original.customer.lastName
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          row.original.customer.firstName
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },
    },
    {
      accessorKey: 'customer.lastName',
      id: 'lastName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Name" />
      ),
      enableColumnFilter: true,
      filterFn: (row, id, value) => {
        id;
        return (
          // if array is flat, do below
          // row.getValue("firstName").toLowerCase().includes(value.toLowerCase()) ||
          // row.getValue("lastName").toLowerCase().includes(value.toLowerCase())
          row.original.customer?.lastName
            .toLowerCase()
            .includes(value?.toLowerCase()) ||
          row.original.customer?.firstName
            .toLowerCase()
            .includes(value?.toLowerCase())
        );
      },
    },
    {
      accessorKey: 'quantity',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Guests" />
      ),
      cell: ({ row }) => {
        return <div>{row.getValue('quantity')}</div>;
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'start',
      header: 'Start Time',
      cell: ({ row }) => {
        const date = new Date(row.getValue('start'));
        return (
          <div>
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        );
      },
    },
    // {
    //   accessorKey: "end",
    //   header: "End Time",
    //   cell: ({ row }) => {
    //     const date = new Date(row.getValue("end"));
    //     return (
    //       <div>
    //         {date.toLocaleDateString("en-US", {
    //           year: "numeric",
    //           month: "short",
    //           day: "numeric",
    //           hour: "2-digit",
    //           minute: "2-digit",
    //         })}
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: 'status',
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
      header: 'Status',
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue('status')
        );
        if (!status) {
          return null;
        }
        return <div className="capitalize">{row.getValue('status')}</div>;
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'shift',
      header: 'Shift',
    },
    {
      accessorKey: 'area',
      header: 'Area',
    },
    {
      accessorKey: 'guestNotes',
      header: 'Notes',
    },
    {
      accessorKey: 'action_button',
      header: 'Action',
      cell: ({ row }) => {
        return (
          <DataTableRowActions
            row={row}
          />
        );
      },
    },
    // ... you can keep or modify the actions column if needed
  ];
  // const createRowRecord = (newRow: Reservation) => {
  //   setData([...data, newRow]);
  // };

  // const updateRowRecord = (updatedRow: Reservation) => {
  //   const updatedData = data.map((row) =>
  //     row.id === updatedRow.id ? updatedRow : row
  //   );
  //   setData(updatedData);
  // };

  // const deleteRowRecord = (row: Reservation) => {
  //   const updatedData = data.filter((r) => r.id !== row.id);
  //   setData(updatedData);
  // };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <section className="w-full">
      <div className="flex items-center py-4">
        <DataTableToolbar table={table} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      
                    </TableCell>
                  ))}
                  <TableCell>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
