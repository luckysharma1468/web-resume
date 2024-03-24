/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Title({ introductionArray }) {

    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    useEffect(() => {
        let timer;
        const interval = setInterval(() => {
            const currentString = introductionArray[index];
            if(currentCharacterIndex < currentString.length) {
                setTitle(prevString => prevString + currentString[currentCharacterIndex]);
                setCurrentCharacterIndex(prevIndex => prevIndex + 1);
            } else {
                timer = setTimeout(() => {
                    const val = (index + 1) % introductionArray.length;
                    setIndex(val);
                    setCurrentCharacterIndex(0);
                    setTitle("");
                }, 200);
            }
        }, 150);

    return () => {
        clearInterval(interval);
        clearTimeout(timer);
    };
    }, [index, currentCharacterIndex, introductionArray]);

    return (
        <div className="h-20 grid content-center font-serif bg-[#659DBD]">
            <h1 className="text-center text-white font-bold">{title}{'|'}</h1>
        </div>
    );
}
