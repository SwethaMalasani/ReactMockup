import React from "react"; 

function BookingForm() {
  return (
    <div className="booking-form">
      <label htmlFor="service">Choose a service:</label>
      <select id="service" name="service">
        <option value="consultation">Consultation</option>
        <option value="web-design">Web Design</option>
        <option value="seo"> HelpDesk</option>
      </select>
      
      <label htmlFor="date">Choose a date:</label>
      <input type="date" id="date" name="date" />
      
      <label htmlFor="time">Choose a time:</label>
      <input type="time" id="time" name="time" />
      
      <button>Book Now</button>
    </div>
  );
}

export default BookingForm;
