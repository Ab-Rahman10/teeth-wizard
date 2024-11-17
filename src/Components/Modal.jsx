import React from "react";

const Modal = () => {
  //     First Name
  // Last Name
  // Email(Logged in user’s email)
  // Phone number.
  // Appointment date.
  // Address.
  // “Make Appointment” button.
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Book Appointment</h3>
          <form className="space-y-2 mt-7 text-center">
            <input
              type="text"
              placeholder="First Name"
              name="FName"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="LName"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="number"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="date"
              placeholder="Date"
              name="date"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <textarea
              type="text"
              placeholder="Address"
              name="address"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </form>
          <div className="text-center mt-3">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="py-1 px-4 rounded-md bg-violet-600 text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
