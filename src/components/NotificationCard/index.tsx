import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface NotificationCardProps {
  title: string;
  description: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 sm:p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-2 sm:mb-4">
        <FontAwesomeIcon icon={faBell} className="text-yellow-500" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ml-2">
          Exciting Updates Coming Soon!
        </h3>
      </div>
      <p className="text-gray-600 text-sm sm:text-base">
        We currently have few career choices available as of now. Stay tuned for
        more options that will be added in the future!
      </p>
    </div>
  );
};

export default NotificationCard;
