import React, { useState, useEffect } from 'react';

interface Prayer {
  name: string;
  arabicName: string;
  time: string;
  isNext: boolean;
  remainingTime?: string;
}

const PrayerTimes: React.FC = () => {
  const [prayers, setPrayers] = useState<Prayer[]>([
    { name: 'Fajr', arabicName: 'الفجر', time: '', isNext: false },
    { name: 'Sunrise', arabicName: 'الشروق', time: '', isNext: false },
    { name: 'Dhuhr', arabicName: 'الظهر', time: '', isNext: false },
    { name: 'Asr', arabicName: 'العصر', time: '', isNext: false },
    { name: 'Maghrib', arabicName: 'المغرب', time: '', isNext: false },
    { name: 'Isha', arabicName: 'العشاء', time: '', isNext: false },
  ]);
  const [currentDate, setCurrentDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(true);

  // Update current time every second
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set current Gregorian date
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));

    // Simulate fetching prayer times
    // In a real app, you would fetch from an API like Aladhan API
    const mockPrayerTimes = {
      Fajr: '04:30',
      Sunrise: '06:15',
      Dhuhr: '12:30',
      Asr: '15:45',
      Maghrib: '18:20',
      Isha: '19:45'
    };

    // Simulate Hijri date
    setHijriDate('١٥ رمضان ١٤٤٥');

    // Update prayer times and determine next prayer
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const updatedPrayers = prayers.map(prayer => {
      const [hour, minute] = mockPrayerTimes[prayer.name as keyof typeof mockPrayerTimes].split(':').map(Number);
      const prayerTimeInMinutes = hour * 60 + minute;
      
      return {
        ...prayer,
        time: mockPrayerTimes[prayer.name as keyof typeof mockPrayerTimes],
        isNext: prayerTimeInMinutes > currentTimeInMinutes
      };
    });

    // Find the next prayer
    const nextPrayerIndex = updatedPrayers.findIndex(prayer => prayer.isNext);
    if (nextPrayerIndex !== -1) {
      updatedPrayers[nextPrayerIndex].isNext = true;
      
      // Calculate remaining time until next prayer
      const [nextHour, nextMinute] = updatedPrayers[nextPrayerIndex].time.split(':').map(Number);
      const nextPrayerTimeInMinutes = nextHour * 60 + nextMinute;
      const remainingMinutes = nextPrayerTimeInMinutes - currentTimeInMinutes;
      
      const hours = Math.floor(remainingMinutes / 60);
      const minutes = remainingMinutes % 60;
      
      updatedPrayers[nextPrayerIndex].remainingTime = `${hours} ساعة و ${minutes} دقيقة`;
      
      // Reset any other prayers that might be marked as next
      for (let i = 0; i < updatedPrayers.length; i++) {
        if (i !== nextPrayerIndex) {
          updatedPrayers[i].isNext = false;
        }
      }
    }

    setPrayers(updatedPrayers);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex  relative z-10 flex-col items-center justify-center h-[calc(30vh)]">
        <div className="w-[calc(5vw+2.5rem)] h-[calc(5vw+2.5rem)] border-[calc(0.4vw+2px)] border-t-transparent border-amber-600 rounded-full animate-spin"></div>
        <div className="mt-[calc(1vw+0.5rem)]" style={{ fontSize: 'calc(1.5vw + 1rem)' }}>جاري تحميل مواقيت الصلاة...</div>
      </div>
    );
  }

  return (
    <div className="text-right relative  mt-[calc(4vw)]" dir="rtl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[calc(1.2vw+0.8rem)]">
        {prayers.map((prayer, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-gradient-to-br from-amber-50 to-amber-100/90 border-[calc(0.2vw+1px)] border-amber-600/80`}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-t-[calc(0.2vw+1px)] border-r-[calc(0.2vw+1px)] border-amber-600 "></div>
            <div className="absolute top-0 left-0 w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-t-[calc(0.2vw+1px)] border-l-[calc(0.2vw+1px)] border-amber-600 "></div>
            <div className="absolute bottom-0 right-0 w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-b-[calc(0.2vw+1px)] border-r-[calc(0.2vw+1px)] border-amber-600 "></div>
            <div className="absolute bottom-0 left-0 w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-b-[calc(0.2vw+1px)] border-l-[calc(0.2vw+1px)] border-amber-600 "></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                 style={{
                   backgroundImage: prayer.isNext
                     ? "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23065f46' stroke-width='1'/%3E%3C/svg%3E\")"
                     : "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23b45309' stroke-width='1'/%3E%3C/svg%3E\")",
                   backgroundSize: "calc(2vw + 20px) calc(2vw + 20px)"
                 }}>
            </div>
            
            {/* Content with padding */}
            <div className="p-[calc(1.2vw+0.8rem)]">
              <div className="flex justify-between items-center">
                {/* Prayer name with decorative elements */}
                <div className="flex items-center">
                  <div className={`w-[calc(0.6vw+0.3rem)] h-[calc(0.6vw+0.3rem)] rounded-full mr-[calc(0.5vw+0.25rem)] bg-amber-600 
                    // prayer.isNext ? 'bg-emerald-600' : 'bg-amber-600'
                `}></div>
                  <span
                    style={{ fontSize: 'calc(1.6vw + 1rem)' }}
                    className={`font-bold text-amber-800`}
                  >
                    {prayer.arabicName}
                  </span>
                </div>
                
                {/* Prayer time with decorative frame */}
                <div className={`relative px-[calc(0.8vw+0.4rem)] py-[calc(0.4vw+0.2rem)] rounded-md bg-amber-700/10 border border-amber-600/30`}>
                  <span 
                    style={{ fontSize: 'calc(1.4vw + 0.9rem)' }} 
                    className={`font-arabic text-amber-800 font-bold`}
                  >
                    {prayer.time}
                  </span>
                </div>
              </div>
              
              {/* Next prayer indicator with enhanced styling */}
             
              
              {/* Decorative bottom element for all prayer cards */}
              {/* <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(3vw+1.5rem)] h-[calc(0.3vw+0.15rem)] rounded-t-full ${
                prayer.isNext ? 'bg-emerald-600/40' : 'bg-amber-600/40'
              }`}></div> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative footer */}
      {/* <div className="mt-[calc(2vw+1rem)] h-[calc(0.5vw+0.25rem)] bg-repeat-x"
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='15' viewBox='0 0 60 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 7.5L7.5 0L15 7.5L22.5 0L30 7.5L37.5 0L45 7.5L52.5 0L60 7.5L52.5 15L45 7.5L37.5 15L30 7.5L22.5 15L15 7.5L7.5 15Z' fill='%23065f46' /%3E%3C/svg%3E\")",
             backgroundSize: "auto 100%" 
           }}>
      </div> */}
    </div>
  );
};

export default PrayerTimes;
