"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import { Button } from "@/components/ui/button-newyork";
import { Input } from "@/components/ui/input-newyork";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";

import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { statuses, areas, shifts } from "@/lib/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by name..."
          value={
            (table.getColumn("lastName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) => {
            table.getColumn("lastName")?.setFilterValue(event.target.value);
            table.getColumn("firstName")?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* <DatePickerWithRange /> */}
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("shift") && (
          <DataTableFacetedFilter
            column={table.getColumn("shift")}
            title="Shift"
            options={shifts}
          />
        )}
        {table.getColumn("area") && (
          <DataTableFacetedFilter
            column={table.getColumn("area")}
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
      <div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
