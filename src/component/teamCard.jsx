import { Linkedin, Mail, X } from "lucide-react";

const TeamCard = ({ image, name, email, position, }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-3xl pb-8 overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-72 md:w-80">
      {/* Image Wrapper with Zoom Effect */}
      <div className="relative overflow-hidden h-72">
        <img
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={name}
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col items-center px-6 text-center">
        {/* Name & Title */}
        <h3 className="font-bold text-lg mt-5 text-gray-900 dark:text-white leading-tight">
          {name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">
          {position || "Legal Consultant"}
        </p>

        {/* Email Display */}
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-3 truncate w-full px-4">
          {email}
        </p>

        {/* Social*/}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/"
            className="flex items-center mt-6 px-4 py-2.5 bg-gray-100 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all active:scale-95 shadow-md"
          >
            <Linkedin className="w- h-4 text-gray-950" />
          </a>
          <a
            href="https://www.x.com/"
            className="flex items-center mt-6 px-4 py-2.5 bg-gray-100 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all active:scale-95 shadow-md"
          >
            <X className="w-4 h-4 text-gray-950" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
