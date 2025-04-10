
const PrayerTimesSentence = () => {
   

    return (
        <div className="relative flex justify-center   my-[calc(2vw+1rem)] bg-gradient-to-br from-amber-50 to-amber-100/90 border-[calc(0.2vw+1px)] border-amber-600/80">
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23b45309' stroke-width='1'/%3E%3C/svg%3E\")",
                    backgroundSize: "calc(2vw + 20px) calc(2vw + 20px)"
                }}>
            </div>
            <div className="relative  px-[calc(3vw+1rem)] py-[calc(0.5vw)] shadow-lg   w-full overflow-hidden">
                {/* Islamic pattern top and bottom borders */}
                
                {/* Decorative Islamic elements */}
                {/* <div className="absolute top-1/2 left-[calc(1vw+0.5rem)] transform -translate-y-1/2 text-amber-300 opacity-20 text-[calc(2vw+1.5rem)]">
                    ☪
                </div>
                <div className="absolute top-1/2 right-[calc(1vw+0.5rem)] transform -translate-y-1/2 text-amber-300 opacity-20 text-[calc(2vw+1.5rem)]">
                    ☪
                </div> */}
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-t-[calc(0.2vw+1px)] border-l-[calc(0.2vw+1px)] border-amber-600"></div>
                <div className="absolute  top-0 right-0  w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-t-[calc(0.2vw+1px)] border-r-[calc(0.2vw+1px)] border-amber-600 "></div>
                <div className="absolute bottom-0 left-0    w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-b-[calc(0.2vw+1px)] border-l-[calc(0.2vw+1px)] border-amber-600 "></div>
                <div className="absolute bottom-0 right-0  w-[calc(1.5vw+0.75rem)] h-[calc(1.5vw+0.75rem)] border-b-[calc(0.2vw+1px)] border-r-[calc(0.2vw+1px)] border-amber-600 "></div>
                
                {/* Arabic text for "Prayer Times" with decorative elements */}
                <div className="relative z-10 px-[calc(1vw+1rem)]">
                    <h2 className="text-[calc(2vw+2rem)] font-bold text-amber-800 text-center font-arabic py-[calc(0.5vw+0.5rem)]">
                        <span className="inline-block mx-[calc(0.5vw+0.25rem)] text-amber-600">❖</span>
                        مواقيت الصلاة
                        <span className="inline-block mx-[calc(0.5vw+0.25rem)] text-amber-600">❖</span>
                    </h2>
                    

                     <div className="absolute left-[calc(0.5vw)] top-1/2 transform -translate-y-1/2 text-amber-600/10 text-[calc(2vw+6rem)] rotate-45">
                    ۩
                </div>
                <div className="absolute right-[calc(0.5vw)] top-1/2 transform -translate-y-1/2 text-amber-600/10 text-[calc(2vw+6rem)] -rotate-45">
                    ۩
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PrayerTimesSentence;
