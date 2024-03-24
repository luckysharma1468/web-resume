/* eslint-disable react/prop-types */
export default function Experience(props) {
    const { companyName, start, end, isCurrent, id, handleClick  } = props;
    console.log(props);
    return (
        <div
            onClick={() => handleClick(id)}
            className="mb-5 md:mb-0 shadow-2xl cursor-pointer h-48 w-96 text-sm flex flex-col text-center justify-around bg-zinc-700 font-bold font-serif text-white rounded-xl z-10 border-2 border-amber-600">
            <h1 className="text-base">{companyName}</h1>
            <p>{start} - {isCurrent ? "Current" : end}</p>
            <p className="animate-pulse">Click to know more !</p>
        </div>
    );
}
