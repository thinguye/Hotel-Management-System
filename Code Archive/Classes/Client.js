class Client extends User
{
   constructor(firstName, lastName, userName, password, email, phone, reservation, card, isCheckedIn)
   {
       super(firstName, lastName, userName, password, email, phone);
       this.reservation = new Reservation ();
       this.card = new Card();
       this.isCheckedIn = false;
   }

   checkIn()
   {
      this.reservation.room.isVacant = false;
      this.isCheckedIn = true;
   }

   checkOut()
   {
      this.reservation.room.isVacant = true;
      this.isCheckedIn = false;
      this.reservation.receipt.printReceipt();
      this.reservation.room.cleanRoom();
   }
}
