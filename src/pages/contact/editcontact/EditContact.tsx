import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editContact } from "../../../services/contact/ContactSlice";

const EditContact = () => {
  const location = useLocation();

  const id = location.state.id;
  const firstName = location.state.firstName;
  const lastName = location.state.lastName;
  const status = location.state.status;

  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const editContactHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const status = form.status.value;

    const dataObject = {
      id: id,
      firstName: first_name,
      lastName: last_name,
      status: status,
    };
    dispatch(editContact(dataObject));

    naviagte("/");
  };

  return (
    <div className="px-3 lg:px-10">
      <h3 className="font-bold text-center text-2xl py-10">Edit Contact</h3>
      <form onSubmit={editContactHandler}>
        <div className="bs_common flex flex-col gap-5 border p-9">
          <div className="flex flex-wrap gap-5 items-center">
            <p>First Name</p>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="bs_common border h-11 w-32 lg:w-56 px-3"
              defaultValue={firstName}
            />
          </div>
          <div className="flex flex-wrap gap-5 items-center">
            <p>Last Name</p>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="bs_common border h-11 w-32 lg:w-56 px-3"
              defaultValue={lastName}
            />
          </div>
          <div className="flex flex-wrap gap-5 items-center">
            <p>Status</p>

            <div>
              <div>
                {status === "active" ? (
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                    defaultChecked
                  />
                ) : (
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                  />
                )}
                <label htmlFor="active">Active</label>
              </div>
              <div>
                {status === "active" ? (
                  <input
                    type="radio"
                    id="inactive"
                    name="status"
                    value="inactive"
                  />
                ) : (
                  <input
                    type="radio"
                    id="inactive"
                    name="status"
                    value="inactive"
                    defaultChecked
                  />
                )}
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-5">
          <button
            className={`flex items-center gap-2 border px-8 py-3 bs_common bg-[#212529] text-white font-semibold transition-all hover:bg-[#212529c9] active:bg-[#212529a8]`}
          >
            Save Edited Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
