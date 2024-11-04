type Customer ={
    firstName: string;
    lastName: string;
  }
  export const ReservationStatus = [
    {name: "CHECKED_OUT", value : "CHECKED OT"},
    {name: "NOT_CONFIRMED", value : "NOT CONFIRMED"},
    {name: "SEATED", value : "SEATED"},
    {name: "CONFIRMED", value : "CONFIRMED"},
  ]

  export const ReservationShifts = [
    { name: "BREAKFAST", value: "BREAKFAST" },
    { name: "LUNCH", value: "LUNCH" },
    { name: "DINNER", value: "DINNER" },
  ]
  
  export const ReservationArea = [
    { name: "BAR", value: "BAR" },
    { name: "MAIN_ROOM", value: "MAIN ROOM" },
  ]
  type Reservation ={
    id: number;
    businessDate: string;
    status: string;
    shift: string;
    start: string;
    end: string;
    quantity: number;
    customer: Customer;
    area: string
    guestNotes: string;
  }
  
  type ReservationData = {
    reservations: Reservation[];
  }
  
  export type { Customer, Reservation, ReservationData };