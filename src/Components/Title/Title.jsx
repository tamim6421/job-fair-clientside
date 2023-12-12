/* eslint-disable react/prop-types */


const Title = ({children}) => {
    return (
        <div className="relative  border-green-400 ps-3 ">
            <h2 className=" text-green-500 text-5xl drop-shadow-xl font-bold">{children}</h2>
            <p className="absolute left-[10%] bottom-0 text-5xl md:text-6xl -z-10 opacity-5">{children}</p>
        </div>
    );
};

export default Title;