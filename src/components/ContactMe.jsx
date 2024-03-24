
export default function ContactMe() {
  return (
    <div className="mb-10 font-serif bg-purple-700 rounded-2xl shadow-lg z-10 h-48 w-96 flex flex-col text-center justify-evenly border-4 border-white font-bold text-white">
        <span className="cursor-pointer">✉ prashant.sharma.delhi.cse@gmail.com</span>
        <span>📞 +91-7837846227</span>
        <a
            className="animate-pulse underline cursor-pointer"
            href="https://drive.google.com/file/d/10I6VRcrNmmGy6EmU4GywPnd0614IGimy/view?usp=sharing"
            target="_blank"
            download="Prashant Sharma Resume"
        >
            Download CV
        </a>
    </div>
  )
}
