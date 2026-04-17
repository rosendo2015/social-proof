type Props = {
    img: string;
    name: string;
    position: string;
    message?: string;
};
export function Card({ img, name, position, message }: Props) {
    return (
        <div className="flex flex-col justify-start w-full  text-white bg-[var(--VeryDarkMagenta)]/95 rounded-lg mb-4 p-8 ">
            <div className='flex gap-4 mb-6'>
                <img className='rounded-full w-12 h-12' src={img} alt="photo user" />
                <div className='flex flex-col items-start justify-start'>
                    <h3 className="text-xl font-bold text-[var(--LightGrayishMagenta)] mb-[-0.5rem]">{name}</h3>
                    <p className="text-[var(--SoftPink)]/70 text-xl">{position}</p>
                </div>
            </div>

            <p className='px-2 font-semibold text-[var(--LightGrayishMagenta)] leading-[1.4rem]'>
                " {message} "
            </p>

        </div>
    );
}