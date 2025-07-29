import poke1 from '../assets/001.png'
import poke2 from '../assets/002.png'
import poke3 from '../assets/003.png'
import poke4 from '../assets/004.png'
import poke5 from '../assets/005.png'

const Body = () => {
    return (
    <section className='min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-5 flex flex-col justify-center items-center'>
        
            <h1 className='text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-12 drop-shadow-md'>
                Pokédex K5
            </h1>

                <div className='flex gap-8 justify-center items-center flex-wrap max-w-6xl mx-auto '>

                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 p-4 hover:scale-105 cursor-pointer'>
                    <img src={poke1} alt="Bulbizarre" className='w-full h-40 object-contain mb-3' />
                    <h5 className='text-gray-400 font-semibold text-sm justify-center'>N°0001</h5>
                    <h4 className='font-semibold text-gray-700 text-2xl justify-center'>Bulbizarre</h4>
                    <div className='flex gap-2 mt-2'>
                        <span className='bg-green-400 text-white px-2 py-1 rounded text-xs justify-center'>Plante</span>
                        <span className='bg-purple-400 text-white px-2 py-1 rounded text-xs justify-center'>Poison</span>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 p-4 hover:scale-105 cursor-pointer'>
                    <img src={poke2} alt="Herbizarre" className='w-full h-40 object-contain mb-3' />
                    <h5 className='text-gray-400 font-semibold text-sm'>N°0002</h5>
                    <h4 className='font-semibold text-gray-700 text-2xl'>Herbizarre</h4>
                    <div className='flex gap-2 mt-2'>
                        <span className='bg-green-400 text-white px-2 py-1 rounded text-xs'>Plante</span>
                        <span className='bg-purple-400 text-white px-2 py-1 rounded text-xs'>Poison</span>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 p-4 hover:scale-105 cursor-pointer'>
                    <img src={poke3} alt="Florizarre" className='w-full h-40 object-contain mb-3' />
                    <h5 className='text-gray-400 font-semibold text-sm'>N°0003</h5>
                    <h4 className='font-semibold text-gray-700 text-2xl'>Florizarre</h4>
                    <div className='flex gap-2 mt-2'>
                        <span className='bg-green-400 text-white px-2 py-1 rounded text-xs'>Plante</span>
                        <span className='bg-purple-400 text-white px-2 py-1 rounded text-xs'>Poison</span>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 p-4 hover:scale-105 cursor-pointer'>
                    <img src={poke4} alt="Salamèche" className='w-full h-40 object-contain mb-3' />
                    <h5 className='text-gray-400 font-semibold text-sm'>N°0004</h5>
                    <h4 className='font-semibold text-gray-700 text-2xl'>Salamèche</h4>
                    <div className='flex gap-2 mt-2'>
                        <span className='bg-red-400 text-white px-2 py-1 rounded text-xs'>Feu</span>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-64 p-4 hover:scale-105 cursor-pointer'>
                    <img src={poke5} alt="Reptincel" className='w-full h-40 object-contain mb-3' />
                    <h5 className='text-gray-400 font-semibold text-sm'>N°0005</h5>
                    <h4 className='font-semibold text-gray-700 text-2xl'>Reptincel</h4>
                    <div className='flex gap-2 mt-2'>
                        <span className='bg-red-400 text-white px-2 py-1 rounded text-xs'>Feu</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Body;