import { useEffect } from "react";

const useAnimationOnScroll = (className: string) => {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${className}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, [className]);
};

export default useAnimationOnScroll;