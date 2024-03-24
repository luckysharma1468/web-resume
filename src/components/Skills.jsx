import ReactSVG from "../assets/react.svg";
import JS from "../assets/javascript.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";

export default function Skills() {
    const svgArray = [ReactSVG, JS, HTML, CSS];
    return (
        <div className="mb-20">
            <div className="bg-[#DAAD86] h-20 grid place-content-center">
                <h1 className="text-lg text-white font-serif font-bold">
                    Skills 💻
                </h1>
            </div>
            <div className="mt-10 grid grid-cols-2 justify-items-center md:flex md:flex-row items-center md:justify-evenly">
                {svgArray.map((svg, index) => {
                    return (
                        <img
                            key={index}
                            src={svg}
                            alt="icon svg"
                            className={`h-20 w-20 md:mt-0 ${index > 1 ? 'mt-10' : ''}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
