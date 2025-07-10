import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { MdNotificationsOff } from "react-icons/md";
import Header from "../../Reusables/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllNotifications,
  deleteNotification,
  fetchNotifications,
} from "../../../redux/reducers/eventSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const NotificationModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useSelector((state) => state.user);
  const { notifications } = useSelector((state) => state.events);

  useEffect(() => {
    if ((user, notifications)) {
      dispatch(fetchNotifications());
    }
  }, [user, dispatch, notifications]);

  const handleDelete = async (notificationId) => {
    if (user) {
      try {
        await dispatch(deleteNotification(notificationId)).unwrap();
        toast.success("Notification deleted successfully");
      } catch (error) {
        toast.error(error || "Failed to delete notification");
      }
    } else {
      toast.error("Unable to delete notification");
    }
  };

  const handleDeleteAll = async () => {
    if (user) {
      try {
        await dispatch(deleteAllNotifications()).unwrap();
        toast.success("All notifications deleted successfully");
        navigate("/dashboard");
      } catch (error) {
        toast.error(error || "Failed to delete notifications");
      }
    } else {
      toast.error("Unable to delete notifications");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-end z-50 font-inter">
      <div className="w-[95%] max-w-[360px] my-6 mr-6 flex flex-col rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-all">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Notifications
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
          >
            <IoClose size={22} className="text-zinc-700 dark:text-zinc-300" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-3 space-y-3 max-h-[70vh]">
          {Array.isArray(notifications) && notifications.length > 0 ? (
            notifications.map((note) => (
              <div
                key={note._id}
                className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl cursor-pointer shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
              >
                <div className="flex-1">
                  <p className="text-sm text-zinc-800 dark:text-zinc-200">
                    {note.message}
                  </p>
                  <span className="text-xs text-zinc-500 ml-2">
                    {new Date(note.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 active:bg-orange-100 transition"
                >
                  <IoClose
                    size={18}
                    className="text-zinc-600 dark:text-zinc-300"
                  />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-zinc-600 dark:text-zinc-400 py-12">
              <MdNotificationsOff
                size={64}
                className="text-zinc-300 dark:text-zinc-600 mb-4"
              />
              <p className="font-medium">No notifications</p>
              <p className="text-sm mt-1">You're all caught up!</p>
            </div>
          )}
        </div>

        {Array.isArray(notifications) && notifications.length > 0 && (
          <div className="sticky bottom-0 px-5 py-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 flex justify-center">
            <button
              onClick={handleDeleteAll}
              className="py-2 px-6 bg-slate-600 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Hidden Header used for side effects or rerenders if needed */}
      <div className="hidden">
        <Header notification={notifications} />
      </div>
    </div>
  );
};

export default NotificationModal;
