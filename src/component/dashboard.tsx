import { useEffect, useState } from "react";
import "../App.css";

import { motion } from "framer-motion";
import Header from "./header";
import PrayerTimes from "./prays-time";
import Hadith from "./hadith";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get Hijri date
    const getHijriDate = () => {
      try {
        // Using Intl.DateTimeFormat for Hijri calendar if supported
        const hijri = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
        }).format(currentTime);
        setHijriDate(hijri);
      } catch (error) {
        console.error("Error getting Hijri date:", error);
        setHijriDate("");
      }
    };

    getHijriDate();

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [currentTime]);

  // Format current time as HH:MM:SS
  //for arabic time ar-SA-u-ca-islamic
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <div className="min-h-screen  bg-amber-100/50  select-none pointer-events-none  ">
      <div className="p-[calc(2vw+1rem)]">
        <Header />
        <motion.div
          className="text-center my-[calc(0.4vw+2em)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <motion.div
            className="text-[calc(1.5vw+2.5rem)] text-amber-700 font-bold"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}>
            {formattedTime}
          </motion.div>

          {/* Hijri Date Display */}
          <motion.div
            className="md:text-[calc(1vw+0.5rem)] rounded-md bg-amber-700/10 border border-amber-600/30 text-amber-600 font-bold mt-[calc(0.3vw+0.2rem)] px-3 py-1 shadow-sm"
            whileHover={{
              backgroundColor: "rgba(180, 83, 9, 0.15)",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}>
            {hijriDate}
          </motion.div>
        </motion.div>

        <PrayerTimes />
      </div>
      <div className="px-[calc(1vw)]">
        <Hadith />
      </div>
    </div>
  );
}

export default Dashboard;
