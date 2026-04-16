import Smith from '../assets/image-colton.jpg';
export function Card() {
    return (
        <div className="flex flex-col items-center justify-start w-full h-120 text-white bg-[var(--VeryDarkMagenta)]/90 rounded-sm p-8">
            <div className='flex items-center gap-8'>
                <img className='rounded-full w-14 h-14' src={Smith} alt="" />
                <div>
                    <h3 className="text-lg font-bold mb-2">Colton Smith</h3>
                    <p className="text-[var(--SoftPink)] opacity-50 text-lg">Verified Buyer</p>
                </div>
            </div>
            <div>
                <p>
                    " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "
                </p>
            </div>
        </div>
    );
}