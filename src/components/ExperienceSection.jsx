import { useState } from "react";
import Experience from "./Experience";
import SummarySection from "./SummarySection";

export default function ExperienceSection() {

    const [showSummary, setShowSummary] = useState(false);
    const [work, setWork] = useState("");

    const experiences = [
        {
            id: "amdocs",
            companyName: "Amdocs Development Center, Gurgaon",
            start: "11th April 2022",
            end: "-",
            isCurrent: true,
        },
        {
            id: "nagarro",
            companyName: "Nagarro, Remote",
            start: "1 Oct 2020",
            end: "7th April 2022",
            isCurrent: false
        }
    ]

    const experienceSummary = [
        {
            id: "amdocs",
            summary: [
                "Architected a react storybook from scratch and integrated in a legacy project, achieving a 40% reduction in development time by streamlining UI component design and tracking changes according to user stories.",
                "Revitalized the mobile application in the current project by introducing 5 new screens, resulting in optimized user experience and enhanced functionality.",
                "Executing comprehensive end-to-end testing for each task, guaranteeing the seamless delivery of code to production with 0 defects.",
                "Deployed defect resolution processes, reducing user-reported issues by 30%, elevating product quality.",
                "Redesigned customer dashboard by 100%, implementing new templates aligned with Figma designs, resulting in a 25% increase in user engagement.",
                "Added a new smartwatch journey by developing new widgets from the ground up within the micro-frontend architecture.",
                "Resolving application issues promptly to guarantee seamless functionality, ensuring uninterrupted user experience and overall system stability through effective support and troubleshooting",
                "Streamlining task delivery in agile environment and achieving timely completion within 2-week sprint cycles for enhanced productivity."
            ]
        },
        {
            id: "nagarro",
            summary: [
                "Led a feature for real-time error filtering in user-provided Excel inputs, reduced human errors by 90%, and enhanced system accuracy for improved user experience.",
                "Addressed client needs by integrating 2 new user journeys, enhancing the monolithic single-page app functionality.",
                "Optimized Python-based Machine Learning algorithms, reducing processing time by 35% for enhanced efficiency.",
                "Solved codebase complexity by introducing Higher Order Components (HOCs), improving reusability, and simplifying debugging.",
                "Direct communication with client, gathering requirements, providing updates, and addressing their queries and concerns daily.",
                "Implemented AWS Lambda logging to distinguish user types, reducing backend algorithm debugging time by 50% for enhanced efficiency."
            ]
        }
    ]

    const getSummary = (id) => {
        return experienceSummary.filter(summary => summary.id === id)[0].summary;
    }

    const handleClick = (id) => {
        const summary = getSummary(id);
        setWork(summary);
        setShowSummary(true);
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 100,
            behavior: "smooth",
        });
    }

    const handleClose = () => {
        setShowSummary(false);
    }

    return (
        <div className="bg-blue-50">
            <div className="bg-[#DAAD86] h-20 grid place-content-center">
                <h1 className="text-lg text-white font-serif font-bold">
                    Corporate Experience 👩‍💻
                </h1>
            </div>
            <div className="pt-10 md:py-10 flex flex-col md:flex-row items-center justify-around">
                {experiences.map((company, index) => {
                    return <Experience key={index} handleClick={handleClick} {...company} />
                })}
            </div>
            {showSummary ?
                <div id="mySummary" className="flex justify-center">
                    <SummarySection work={work} handleClose={handleClose}/>
                </div>
                : null
            }
        </div>
    );
}
