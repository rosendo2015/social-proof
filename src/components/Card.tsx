type Props = {
    img: string;
    name: string;
    position: string;
    message?: string;
};
export function Card({ img, name, position, message }: Props) {
    return (
        <div className="flex flex-col justify-start w-full  text-white bg-[var(--VeryDarkMagenta)]/95 rounded-lg mb-4 p-8 lg:h-[13rem] lg:px-4 lg:hover:mt-[0.5rem] lg:hover:shadow-lg transition-all duration-300">
            <div className='flex gap-4 mb-6 lg:mb-2'>
                <img className='rounded-full w-12 h-12 lg:w-10 lg:h-10' src={img} alt="photo user" />
                <div className='flex flex-col items-start justify-start'>
                    <h3 className="text-xl font-bold text-[var(--LightGrayishMagenta)] mb-[-0.5rem]">{name}</h3>
                    <p className="text-[var(--SoftPink)]/70 text-xl">{position}</p>
                </div>
            </div>

            <p className='px-2 font-semibold text-[var(--LightGrayishMagenta)] lg:leading-[1.15rem] lg:text-sm'>
                " {message} "
            </p>

        </div>
    );
}