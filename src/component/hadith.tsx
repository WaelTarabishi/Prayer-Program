import { useEffect, useState } from 'react';

const Hadith = () => {
    const [currentHadith, setCurrentHadith] = useState<number>(0);

    // Collection of hadiths with their narrators
    const hadiths = [
        {
            text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه",
            narrator: "متفق عليه"
        },
        {
            text: "من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة",
            narrator: "رواه مسلم"
        },
        {
            text: "المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه",
            narrator: "رواه البخاري"
        },
        {
            text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
            narrator: "متفق عليه"
        },
        {
            text: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه",
            narrator: "متفق عليه"
        },
        {
            text: "الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن -أو تملأ- ما بين السماوات والأرض",
            narrator: "رواه مسلم"
        },
        {
            text: "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن",
            narrator: "رواه الترمذي"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHadith((prev) => (prev + 1) % hadiths.length);
        }, 5000); // Change hadith every 20 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-row  justify-center items-center gap-10   '>
            <img src='./star.png' className='w-[calc(9vw)] h-[calc(9vw)]' />
            <div className="relative flex justify-center my-[calc(2vw+1rem)] bg-gradient-to-br from-amber-50 to-amber-100/90 border-[calc(0.2vw+1px)] border-amber-600/80 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform ">
                <div className="hadith-content min-w-[calc(20vw)] px-[calc(1vw)] py-4" dir="rtl">
                    <p className="text-[calc(1vw+2rem)] mb-4 leading-relaxed font-arabic text-center">
                        {hadiths[currentHadith].text}
                    </p>
                    <p className="text-[calc(0.8vw+0.9rem)] text-amber-600 text-right">
                        {hadiths[currentHadith].narrator}
                    </p>
                </div>
            </div>
            <img src='./star.png' className='w-[calc(9vw)] h-[calc(9vw)]' />
        </div>
    );
};

export default Hadith;
