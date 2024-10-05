"use client";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/components/sass/page.scss";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextProps = {
    text: string | undefined;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textRef.current && typeof text === "string") {
            const chars = textRef.current.querySelectorAll(".char");

            gsap.fromTo(
                chars,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [text]);

    if (!text || typeof text !== "string") {
        return <div>No text available</div>;
    }

    return (
        <div ref={textRef} className="text-item">
            {text.split("").map((char, index) => (
                <span key={index} className="char">
                    {char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;