import React, { useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { getTicket } from "../../../redux/reducers/eventSlice";
import { useDispatch, useSelector } from "react-redux";

const Ticket = ({ onClose, ticket }) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user)
  const tickets = useSelector((state) => state.events.ticket)
  // const ticketType = event && event?.ticketTypes[0];
  console.log({ticket});
  console.log({tickets});
  console.log({user});

  useEffect(() => {
    if(user) {
      dispatch(getTicket(ticket?._id))
    }
  })

  console.log((ticket?._id))

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-end px-4 py-8">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-orange-500 dark:text-zinc-400"
        >
          <IoIosCloseCircle size={24} />
        </button>

        {/* Event Title */}
        <h2 className="font-merriweather text-xl sm:text-2xl font-bold text-slate-800 dark:text-zinc-100 mb-4">
          🎟️ Your Ticket to{" "}
          <span className="text-orange-500">{ticket?.eventId?.title}</span>
        </h2>

        {/* Event Details */}
        <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-zinc-300">
          {event?.startDate && (
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {new Date(ticket?.eventId?.startDate).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          )}
          {event?.startTime && (
            <p>
              <span className="font-semibold">Time:</span>{" "}
              {new Date(`1970-01-01T${ticket?.eventId?.startTime}`).toLocaleTimeString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </p>
          )}

            <p>
              <span className="font-semibold">Location:</span> {ticket?.eventId?.location}
            </p>
            <p>
              <span className="font-semibold">Meet Link:</span>{" "}
              <a
                href={ticket?.eventId?.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline"
              >
                {ticket?.eventId?.meetLink}
              </a>
            </p>
        </div>

        <hr className="my-5 border-slate-200 dark:border-zinc-700" />

        {/* Ticket Details */}
        <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-zinc-300">
          <p>
            <span className="font-semibold">Ticket Type:</span>{" "}
            {ticket?.ticketTypeId?.type}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${ticket?.ticketTypeId?.price}
          </p>
          <p>
            <span className="font-semibold">Ticket ID:</span> #{ticket?.ticketTypeId?._id}
          </p>
          <p>
            <span className="font-semibold">Purchase Date:</span>{" "}
            {ticket?.purchaseDate}
          </p>
        </div>

        {/* QR Code or Badge */}
        <div className="flex justify-center mt-6">
          <img
            src={ticket?.qrCodeUrl || "/sample-qr.png"}
            alt="Ticket QR Code"
            className="w-32 h-32 border rounded-lg shadow-sm"
          />
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
          Keep this ticket safe. It will be scanned at the event entrance.
        </div>
      </div>
    </div>
  );
};

export default Ticket;
