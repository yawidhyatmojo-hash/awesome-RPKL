import { useEffect, useState } from "react";

import gamedevImage from "../assets/gamedev.png";
import webImage from "../assets/web.png";
import roboticImage from "../../../assets/images/robotic.png";

function Slider() {
    const [current, setCurrent] = useState(0);

    const slides = [
        gamedevImage,
        webImage,
        roboticImage,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => {
                if (prev === slides.length - 1) {
                    return 0;
                }

                return prev + 1;
            });
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length]);

    return (
        <div>
            <div className="overflow-hidden rounded-3xl">
                <img
                    src={slides[current]}
                    alt="RPKL"
                     className="h-[260px] w-full rounded-3xl object-cover md:h-[340px]"
                />
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all ${current === index
                                ? "w-8 bg-white"
                                : "w-2 bg-slate-500"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;