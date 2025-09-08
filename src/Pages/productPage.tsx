import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../assets/hero.png'
import Tomyam from '../assets/Tomyamkung.webp'
import Padthai from '../assets/padthai.jpg'
import Keawwan from '../assets/keawwan.webp'
import Kangsom from '../assets/Tomyamchaohm.jpg'
import Khaopad from '../assets/Kaopad.jpg'
import Kaitodkratiam from '../assets/kaikratiam.jpg'
import Somtam from '../assets/Tamthai.jpg'
import Labmu from '../assets/Labb.webp'
import Kaprao from '../assets/Krapraw.avif'
import Gangpa from '../assets/kangpa.jpg'

function ProductsPage() {
  const navigate = useNavigate()

  
  const recipes = [
    { id: 1, title: 'ต้มยำกุ้ง', description: 'ต้มยำรสแซ่บ จัดจ้านแบบไทยแท้', image: Tomyam },
    { id: 2, title: 'ผัดไทย', description: 'เส้นเหนียวนุ่ม หอมกุ้งแห้งและถั่วงอก', image: Padthai },
    { id: 3, title: 'แกงเขียวหวาน', description: 'แกงเข้มข้น หอมกะทิและเครื่องแกง', image: Keawwan },
    { id: 4, title: 'แกงส้มชะอมกุ้ง', description: 'เปรี้ยว เผ็ด หอมชะอม ไข่ทอดกรอบ', image: Kangsom },
    { id: 5, title: 'ข้าวผัดกุ้ง', description: 'ข้าวผัดหอมมันกุ้ง โรยต้นหอมพริกไทย', image: Khaopad },
    { id: 6, title: 'ไก่ทอดกระเทียม', description: 'กรอบนอกนุ่มใน หอมกลิ่นกระเทียมเจียว', image: Kaitodkratiam },
    { id: 7, title: 'ส้มตำไทย', description: 'เผ็ด เปรี้ยว หวาน เค็ม ครบรส', image: Somtam },
    { id: 8, title: 'ลาบหมู', description: 'หมูสับรสจัด หอมข้าวคั่ว พริกป่น', image: Labmu },
    { id: 9, title: 'ผัดกะเพรา', description: 'กะเพราหอมฟุ้ง เผ็ดร้อน กินกับไข่ดาว', image: Kaprao },
    { id: 10, title: 'แกงป่า', description: 'แกงรสจัดจ้าน เครื่องสมุนไพรแน่น', image: Gangpa },
  ]

  return (
    <div className="w-full bg-base-100 py-12 px-6 md:px-12 lg:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        🍲 สูตรอาหารทั้งหมด
      </h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            onClick={() => navigate(`/products/${recipe.id}`)}
            className="bg-base-200 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-[1.03] transition duration-300"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-base-content/70 mb-4">{recipe.description}</p>
              <button className="btn btn-primary w-full">ดูรายละเอียด</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
