import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header';
import PrayerTimes from './component/prays-time';
import IslamicBox from './component/text-box';
import Hadith from './component/hadith';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hijriDate, setHijriDate] = useState('');

  useEffect(() => {
      // Update time every second
      const timer = setInterval(() => {
          setCurrentTime(new Date());
      }, 1000);

      // Get Hijri date
      const getHijriDate = () => {
          try {
              // Using Intl.DateTimeFormat for Hijri calendar if supported
              const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  weekday: 'long'
              }).format(currentTime);
              setHijriDate(hijri);
          } catch (error) {
              console.error('Error getting Hijri date:', error);
              setHijriDate('');
          }
      };

      getHijriDate();

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
  }, [currentTime]);

  // Format current time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
  });
  return (
    <div className="min-h-screen  bg-amber-100/50  select-none pointer-events-none  ">
          <div className='p-[calc(2vw+1rem)]'>
              
      <Header />
      <div className="text-center   ">
                        <div className="text-[calc(1.5vw+2rem)] font-bold text-amber-700">
                            {formattedTime}
                        </div>
                        
                        {/* Hijri Date Display */}
                        <div className="text-[calc(1vw+0.5rem)] text-amber-600 font-arabic mt-[calc(0.3vw+0.2rem)]">
                            {hijriDate}
                        </div>  
                    </div>

      <PrayerTimes />
   </div>
          <div className='px-[calc(1vw)]'>
              
          <Hadith/>
        </div>

    </div>
  )
}

export default App
