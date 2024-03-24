/* eslint-disable react/prop-types */
export default function SummarySection(props) {
    const {work, handleClose} = props;
  return (
    <div
        className="mb-10 w-3/4 shadow-xl text-xs bg-[#DAAD86] text-white border-2 border-black font-bold font-serif rounded-lg z-10">
        <span
            onClick={() => handleClose()}
            className="animate-pulse flex flex-row-reverse px-6 pt-2 text-base cursor-pointer">
                ❌
        </span>
        <ol className="list-disc p-6">
            {work.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ol>
    </div>
  )
}
