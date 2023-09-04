import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllContact = () => {
  const contacts = useSelector((state: any) => state.contactReducer.contacts);
  // console.log(contacts);

  const navigate = useNavigate();

  const handleCreateContact = () => {
    navigate("/addcontact");
  };

  return (
    <div className="">
      <div className="flex items-center justify-center py-20">
        <button
          className={`flex items-center gap-2 border px-8 py-3 bs_common bg-[#212529] text-white font-semibold transition-all hover:bg-[#212529c9] active:bg-[#212529a8]`}
          onClick={handleCreateContact}
        >
          Create Contact
        </button>
      </div>

      {/* All contacts */}
      <div className="flex flex-wrap gap-5 justify-center">
        {contacts.map((el: any, indx: number) => (
          <div
            className="bs_common flex flex-wrap flex-col gap-5 border p-9 w-[350px]"
            key={indx}
          >
            <div className="flex flex-col gap-5">
              <p className="flex justify-between">
                <span className="text-xl font-semibold">Firstname</span>{" "}
                <span>{el.firstName}</span>
              </p>

              <p className="flex justify-between">
                <span className="text-xl font-semibold">LastName</span>{" "}
                <span>{el.lastName}</span>
              </p>

              <p className="flex justify-between">
                <span className="text-xl font-semibold">status</span>{" "}
                <span>{el.status}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                className={`flex flex-grow justify-center items-center gap-2 border px-8 py-2 bs_common bg-[#212922] text-white font-semibold transition-all hover:bg-[#212529c9] active:bg-[#212529a8]`}
              >
                Edit
              </button>
              <button
                className={`flex flex-grow justify-center items-center gap-2 border px-8 py-2 bs_common bg-[#a54646] text-white font-semibold transition-all hover:bg-[#a54646c9] active:bg-[#a54646a8]`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContact;
