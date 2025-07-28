import poke1 from '../assets/002.png'

const Body = () => {
    return <section className='w-full p-25 flex justify-center items-center'>
        <div className='flex gap-5 w-3/4 flex-wrap'>
            <div className='w-50 hover:cursor-pointer'>
                <img
                    src={poke1}
                    alt=""
                    className='bg-gray-100 w-50 rounded'
                />
                <h5 className='text-gray-400 font-semibold text-sm'>N°0001</h5>
                <h4 className='font-semibold text-gray-700 text-2xl'>Herbizarre</h4>
                <div className='w-full flex gap-2.5'>
                    <button className='bg-green-400 w-12 rounded text-sm'>Plante</button>
                    <button className='bg-purple-400 w-12 rounded text-sm'>Poison</button>
                </div>
            </div>
           
        </div>
    </section>
}

export default Body;