import { Mail, MapPin, PhoneCallIcon } from "lucide-react";

const Banner = () => {
  return (
    <div className="hidden md:flex sm:flex-row fixed w-full py-2.5 font-medium text-sm text-slate-300 bg-linear-to-r from-[#070707] to-[#373070d4] z-30">
      <p className="mx-4">Free Consultation Available</p>
      <ul>
        <li className="inline-flex items-center mx-4">
          <PhoneCallIcon size={17} className="mr-2" />
          +234 803 733 3930
        </li>
        <li className="inline-flex items-center mx-4">
          <Mail size={17} className="mr-2" />
          info@lawzra.com
        </li>
        <li className="inline-flex items-center mx-4">
          <MapPin size={15} className="mr-2" />
          No 23 obalande, lekki Phase 1, Lagos State
        </li>
      </ul>
    </div>
  );
};

export default Banner;
