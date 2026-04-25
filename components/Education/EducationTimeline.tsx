"use client";

import { EDUCATION_DATA } from "@/utils/app_constant";
import EducationCard from "./EducationCard";

const EducationTimeline = () => {
    return (
        <div className="w-full relative px-2">
            <div className="flex flex-col w-full mx-auto max-w-4xl">
                {EDUCATION_DATA.map((education, index) => (
                    <EducationCard 
                        key={index} 
                        education={education} 
                        index={index} 
                        isLast={index === EDUCATION_DATA.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;
