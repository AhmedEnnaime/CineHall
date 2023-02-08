interface IReservation {
  id: number;
  user_key: string;
  film_id: number;
  film_title?: string;
  reservation_date?: string;
  reservation_time?: string;
  hall_name?: string;
  fname?: string;
  lname?: string;
  email?: string;
  seat_num?: number;
}

export default IReservation;
