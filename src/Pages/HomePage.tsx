
import { useNavigate } from 'react-router-dom'
import Tomyam from '../assets/Tomyamkung.webp'
import Padthai from '../assets/padthai.jpg'
import Keawwan from '../assets/keawwan.webp'
import Hero from '../assets/hero.png'

function HomePage() {
  const navigate = useNavigate()

  

  const handleViewAllRecipes = () => {
    navigate('/products')
  }

  

  const recipes = [
    {
      id: 1,
      title: 'ต้มยำกุ้ง',
      image: Tomyam,
      description: 'ต้มยำกุ้งรสจัดจ้าน เผ็ดแซ่บแบบไทยแท้'
    },
    {
      id: 2,
      title: 'ผัดไทย',
      image: Padthai,
      description: 'ผัดไทยเส้นเหนียวนุ่ม หอมกลิ่นกุ้งแห้ง'
    },
    {
      id: 3,
      title: 'แกงเขียวหวาน',
      image: Keawwan,
      description: 'แกงเขียวหวานเข้มข้น หอมมันกะทิ'
    }
  ]

  return (
    <>
<div
        className="hero h-100"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex justify-end text-right text-neutral-content w-full">
          <div className="max-w-lg">
            <h1 className="text-7xl mb-5 font-bold">cooking recipe</h1>
            <p className="mb-5 text-xl">
              ศูนย์รวมสูตรอาหาร ซึ่งคุณเองก็ทำได้ที่บ้านโดยที่คุณไม่จำเป็นต้องมีแม้แต่ลูกมือ แบบ ขั้นตอน ต่อ ขั้นตอน ขอให้สนุก!
            </p>
          </div>
        </div>
      </div>

    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">สูตรอาหารแนะนำ 🍳</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className=" rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 ">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className=" text-sm mb-4">{recipe.description}</p>
              <button
                onClick={() => navigate(`/products/${recipe.id}`)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition-all"
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
      

      

      
        <div className="text-center mt-10">
          <button 
            onClick={handleViewAllRecipes}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            ดูสูตรทั้งหมด
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage