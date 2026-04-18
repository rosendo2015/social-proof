import StarIcon from '../assets/icon-star.svg';
type Props = {
    message: string;
}
export function StarCard({ message }: Props) {
    return (
        <div className="hover:shadow-lg lg:w-[25.5rem] bg-[var(--LightGrayishMagenta)] flex items-center justify-center flex-col gap-3 py-3 rounded-lg mb-4 lg:flex-row lg:fit-content lg:justify-start lg:gap-6 lg:py-4 lg:px-6 transition-all duration-300">
            <div className='flex gap-2'>
                <img src={StarIcon} alt="star icon" />
                <img src={StarIcon} alt="star icon" />
                <img src={StarIcon} alt="star icon" />
                <img src={StarIcon} alt="star icon" />
                <img src={StarIcon} alt="star icon" />
            </div>
            <h4 className='text-[var(--VeryDarkMagenta)] font-medium'>{message}</h4>
        </div>
    );
}