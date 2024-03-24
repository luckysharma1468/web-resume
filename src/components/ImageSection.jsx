import Image from "./Image";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import { useEffect, useState } from "react";

export default function ImageSection() {
    const [imageArray, setImageArray] = useState([Image1, Image2, Image3]);

    useEffect(() => {
        const interval = setInterval(() => {
            const arr = [...imageArray];
            let item = arr.pop();
            arr.unshift(item);
            setImageArray(arr);
        }, 3000);

        return () => clearInterval(interval);
    }, [imageArray]);

    return (
        <div className="flex flex-col md:flex-row py-10 items-center md:justify-around bg-blue-50 ">
            {imageArray.map((image, index) => {
                if (index === 1) {
                    return (
                        <Image
                            key={index}
                            url={image}
                            isCenter={true}
                        />
                    );
                } else {
                    return (
                        <Image
                            key={index}
                            url={image}
                        />
                    );
                }
            })}
        </div>
    );
}
