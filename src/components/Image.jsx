/* eslint-disable react/prop-types */

export default function Image({ url, isCenter }) {
    return (
        <img
            src={url}
            alt="image here"
            className={`rounded-full border-2 hover:border-4 border-gray-600 hover:border-orange-400 z-10 ${
                isCenter ? "size-80" : "size-40 my-20 animate-bounce"
            }`}
        />
    );
}
