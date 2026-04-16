import Smith from '../assets/image-colton.jpg';
export function Card() {
    return (
        <div className="flex flex-col items-center justify-start w-full  text-white bg-[var(--VeryDarkMagenta)]/90 rounded-sm mb-4 p-4 ">
            <div className='flex items-center justify-start gap-4 py-6'>
                <img className='rounded-full w-12 h-12' src={Smith} alt="photo user" />
                <div className='flex flex-col items-start justify-start'>
                    <h3 className="text-lg font-bold text-[var(--LightGrayishMagenta)]">Colton Smith</h3>
                    <p className="text-[var(--SoftPink)]/40 text-lg">Verified Buyer</p>
                </div>
            </div>

            <p className='px-2 font-semibold text-[var(--LightGrayishMagenta)]'>
                " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "
            </p>

        </div>
    );
}