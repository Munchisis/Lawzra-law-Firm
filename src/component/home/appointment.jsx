import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import { m } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import OperatingHours from "../OperatingHours";

const Appointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Added 'async' here to fix your 'await' error
  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute Google reCAPTCHA
      const token = await executeRecaptcha("appointment_submit");

      const emailData = {
        ...data,
        "g-recaptcha-response": token,
      };

      await emailjs.send(
        "service_3d4222d",
        "template_ayi170l",
        emailData,
        "YOUR_PUBLIC_KEY", // Make sure to replace this!
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col lg:flex-row">
      {/* Left Side Content */}
      <m.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex w-2/5 bg-slate-900 p-16 flex-col justify-between relative overflow-hidden"
      >
        <div className="z-10">
          <h2 className="text-green-500 font-bold tracking-widest text-sm uppercase mb-4">
            Private Counsel
          </h2>
          <h1 className="text-5xl font-serif text-white leading-tight">
            Expert Legal <br />
            <span className="italic text-slate-400">Advocacy.</span>
          </h1>
        </div>

        <div className="w-full">
          <OperatingHours />
        </div>

        <div className="z-10 space-y-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-green-500" size={24} />
            <div>
              <h4 className="text-white font-semibold">
                Attorney-Client Privilege
              </h4>
              <p className="text-slate-400 text-sm">
                All consultations are strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </m.div>

      {/* Right Side Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-12">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800"
        >
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-serif text-slate-800 dark:text-white">
              Book a Consultation
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Lawzra Partnership Legal Services
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-5"
          >
            {/* Full Name */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase mb-1">
                Full Legal Name
              </label>
              <input
                {...register("fullName", { required: true })}
                type="text"
                placeholder="e.g. Chidi Okechukwu"
                className={`w-full bg-slate-50 dark:bg-slate-800 dark:text-white border ${errors.fullName ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none`}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase mb-1">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-[10px] mt-1 font-semibold">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+]+$/, // Allows only numbers and the '+' sign
                      message:
                        "Please enter a valid phone number (digits only)",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                  })}
                  type="tel"
                  inputMode="numeric"
                  placeholder="+234..."
                  className={`w-full bg-slate-50 dark:bg-slate-800 border dark:text-white ${
                    errors.phone
                      ? "border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  } rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500`}
                />
                {/* Display Error Message */}
                {errors.phone && (
                  <p className="text-red-500 text-[10px] mt-1 font-semibold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Practice Area */}
            <div>
              <label className="block text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase mb-1">
                Area of Practice
              </label>
              <select
                {...register("practiceArea")}
                className="w-full bg-slate-50 dark:bg-slate-800 border dark:text-white/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none appearance-none"
              >
                <option>Corporate/Commercial Law</option>
                <option>Dispute Resolution</option>
                <option>Real Estate & Construction</option>
                <option>Family & Probate</option>
                <option>Not specified</option>
              </select>

              {/* Legal Matter Description */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase mb-1 mt-4">
                  Brief Description of Matter
                </label>
                <textarea
                  {...register("message", {
                    required: "Please provide a brief overview of your case",
                    minLength: {
                      value: 20,
                      message:
                        "Please provide a bit more detail (min 20 characters)",
                    },
                  })}
                  rows={4}
                  placeholder="Describe your legal situation..."
                  className={`w-full bg-slate-50 dark:bg-slate-800 border dark:text-white ${
                    errors.message
                      ? "border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  } rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500 resize-none transition-all`}
                />
                {errors.message && (
                  <p className="text-red-500 text-[10px] mt-1 font-semibold italic">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <m.button
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${isSuccess ? "bg-green-500 text-white" : "bg-slate-900 dark:bg-green-600 text-white"}`}
              >
                {isSubmitting ? (
                  "Verifying & Sending..."
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={18} /> Request Sent!
                  </>
                ) : (
                  <>
                    <Calendar size={18} /> Schedule Meeting
                  </>
                )}
              </m.button>

              {/* Mandatory Legal Text for Invisible reCAPTCHA */}
              <p className="text-center text-[9px] text-slate-400 mt-3 italic">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com" className="underline">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </form>
        </m.div>
      </div>
    </section>
  );
};

export default Appointment;
