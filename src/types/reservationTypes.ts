type Customer ={
    firstName: string;
    lastName: string;
  }
  export enum ReservationStatus {
  CHECKED_OUT = "CHECKED OUT",
  NOT_CONFIRMED = "NOT CONFIRMED",
  SEATED = "SEATED",
  CONFIRMED = "CONFIRMED",
}
export enum ReservationShifts {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
}
export enum ReservationArea {
  BAR = "BAR",
  MAIN_ROOM = "MAIN ROOM",
}
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