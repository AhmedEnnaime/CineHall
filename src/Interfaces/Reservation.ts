interface IReservation {
  id: number;
  user_key: string;
  film_id: number;
  film_title?: string;
  reservation_date?: string;
  reservation_time?: string;
  hall_name?: string;
  first_name?: string;
  last_name?: string;
}

export default IReservation;
