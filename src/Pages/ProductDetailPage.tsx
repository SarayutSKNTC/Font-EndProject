import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipes = {
    1: { 
      title: 'ต้มยำกุ้ง', 
      description: 'ต้มยำกุ้งรสแซ่บ หอมสมุนไพรไทยแท้',
      image: Tomyam,
      ingredients: [
        'กุ้งสด 200 กรัม',
        'ตะไคร้ 2 ต้น',
        'ใบมะกรูด 5 ใบ',
        'เห็ดฟาง 100 กรัม',
        'น้ำปลา 2 ช้อนโต๊ะ',
        'น้ำมะนาว 2 ช้อนโต๊ะ',
        'พริกขี้หนูบุบ 5 เม็ด'
      ],
      steps: [
        'ต้มน้ำให้เดือด ใส่ตะไคร้ ใบมะกรูด และเห็ด',
        'ใส่กุ้งสด ปรุงรสด้วยน้ำปลา พริกขี้หนูบุบ',
        'ปิดไฟ แล้วใส่น้ำมะนาว คนให้เข้ากัน',
        'ตักเสิร์ฟร้อน ๆ'
      ]
    },
    2: { 
      title: 'ผัดไทย', 
      description: 'ผัดไทยเส้นเหนียวนุ่ม หอมกุ้งแห้ง',
      image: Padthai,
      ingredients: [
        'เส้นจันท์ 200 กรัม',
        'กุ้งสด 100 กรัม',
        'ถั่วงอก 100 กรัม',
        'ไข่ไก่ 1 ฟอง',
        'น้ำมะขามเปียก 2 ช้อนโต๊ะ'
      ],
      steps: [
        'แช่เส้นจันท์ให้นิ่ม',
        'ผัดกุ้งกับน้ำมัน ใส่ไข่ตาม',
        'ใส่เส้นลงไป ปรุงด้วยน้ำมะขาม',
        'เติมถั่วงอก คลุกให้เข้ากัน'
      ]
    },
    3: { 
      title: 'แกงเขียวหวาน', 
      description: 'แกงเขียวหวานเข้มข้น หอมกะทิ',
      image: Keawwan,
      ingredients: [
        'เนื้อไก่ 200 กรัม',
        'น้ำพริกแกงเขียวหวาน 2 ช้อนโต๊ะ',
        'มะเขือเปราะ 100 กรัม',
        'กะทิ 200 มล.',
        'ใบโหระพา'
      ],
      steps: [
        'ตั้งกะทิให้แตกมัน',
        'ใส่น้ำพริกแกงลงไปผัด',
        'ใส่ไก่ มะเขือ เติมกะทิที่เหลือ',
        'เคี่ยวจนไก่สุก ใส่ใบโหระพาแล้วปิดไฟ'
      ]
    },
    4: { 
      title: 'แกงส้มชะอมกุ้ง', 
      description: 'แกงส้มรสจัดจ้าน หอมชะอมไข่',
      image: Kangsom,
      ingredients: [
        'กุ้งสด 200 กรัม',
        'ไข่เจียวชะอม 1 ฟอง',
        'น้ำพริกแกงส้ม 2 ช้อนโต๊ะ',
        'น้ำมะขามเปียก 3 ช้อนโต๊ะ'
      ],
      steps: [
        'ตั้งน้ำให้เดือด ใส่น้ำพริกแกงส้ม',
        'ปรุงรสด้วยน้ำมะขาม',
        'ใส่กุ้งและชะอมไข่ลงไป',
        'เคี่ยวสักครู่แล้วยกเสิร์ฟ'
      ]
    },
    5: { 
      title: 'ข้าวผัดกุ้ง', 
      description: 'ข้าวผัดหอมมันกุ้ง โรยต้นหอม',
      image: Khaopad,
      ingredients: [
        'ข้าวสวย 2 ถ้วย',
        'กุ้งสด 150 กรัม',
        'ไข่ไก่ 1 ฟอง',
        'ซอสปรุงรส 1 ช้อนโต๊ะ'
      ],
      steps: [
        'ผัดไข่กับน้ำมัน',
        'ใส่กุ้ง ผัดจนสุก',
        'ใส่ข้าวสวยลงไป ปรุงรส',
        'โรยต้นหอมแล้วเสิร์ฟ'
      ]
    },
    6: { 
      title: 'ไก่ทอดกระเทียม', 
      description: 'กรอบนอกนุ่มใน หอมกระเทียมเจียว',
      image: Kaitodkratiam,
      ingredients: [
        'เนื้อไก่ 300 กรัม',
        'กระเทียมสับ 3 ช้อนโต๊ะ',
        'ซีอิ๊วขาว 1 ช้อนโต๊ะ'
      ],
      steps: [
        'หมักไก่กับซีอิ๊วขาว',
        'ทอดกระเทียมจนหอม',
        'ทอดไก่จนสุก',
        'คลุกกับกระเทียมเจียว'
      ]
    },
    7: { 
      title: 'ส้มตำไทย', 
      description: 'ส้มตำรสจัด เปรี้ยว เผ็ด หวาน',
      image: Somtam,
      ingredients: [
        'มะละกอสับ 200 กรัม',
        'ถั่วฝักยาว 50 กรัม',
        'มะเขือเทศ 2 ลูก',
        'น้ำปลา น้ำมะนาว น้ำตาลปี๊บ'
      ],
      steps: [
        'โขลกพริกกับกระเทียม',
        'ใส่มะเขือเทศ ถั่วฝักยาว',
        'ปรุงรสตามชอบ',
        'ใส่มะละกอ คลุกให้เข้ากัน'
      ]
    },
    8: { 
      title: 'ลาบหมู', 
      description: 'ลาบหมูรสแซ่บ หอมข้าวคั่ว',
      image: Labmu,
      ingredients: [
        'หมูสับ 200 กรัม',
        'พริกป่น 1 ช้อนโต๊ะ',
        'น้ำปลา น้ำมะนาว',
        'ข้าวคั่ว 1 ช้อนโต๊ะ',
        'หอมแดงซอย ใบสะระแหน่'
      ],
      steps: [
        'ลวกหมูสับให้สุก',
        'ปรุงรสด้วยน้ำปลา น้ำมะนาว พริกป่น',
        'ใส่ข้าวคั่ว หอมแดง',
        'คลุกให้เข้ากัน โรยสะระแหน่'
      ]
    },
    9: { 
      title: 'ผัดกะเพรา', 
      description: 'กะเพรารสเด็ด กินคู่กับไข่ดาว',
      image: Kaprao,
      ingredients: [
        'หมูสับ 200 กรัม',
        'พริก กระเทียมสับ',
        'ซอสปรุงรส 1 ช้อนโต๊ะ',
        'ใบกะเพรา 1 กำ'
      ],
      steps: [
        'โขลกพริกกระเทียม ผัดกับน้ำมัน',
        'ใส่หมูสับ ผัดจนสุก',
        'ปรุงรสตามชอบ',
        'ใส่ใบกะเพราผัดให้หอม'
      ]
    },
    10: { 
      title: 'แกงป่า', 
      description: 'แกงป่าเผ็ดจัดจ้าน สมุนไพรแน่น',
      image: Gangpa,
      ingredients: [
        'เนื้อไก่หรือหมู 200 กรัม',
        'น้ำพริกแกงป่า 2 ช้อนโต๊ะ',
        'มะเขือเปราะ 100 กรัม',
        'ถั่วฝักยาว 50 กรัม',
        'ใบกะเพรา'
      ],
      steps: [
        'ตั้งหม้อ ใส่น้ำพริกแกงป่าผัดกับน้ำมัน',
        'ใส่เนื้อสัตว์ ผัดให้เข้ากัน',
        'เติมน้ำ ใส่ผักต่าง ๆ',
        'ปรุงรส แล้วใส่ใบกะเพราก่อนปิดไฟ'
      ]
    }
  }

  const recipe = recipes[id]

  if (!recipe) {
    return <h1 className="p-6 text-error">ไม่พบสูตรอาหาร</h1>
  }

  return (
    <div className="w-full">
     
      <div className="relative w-full h-[70vh]">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-base-100 drop-shadow-xl animate-fade-up text-white">
            {recipe.title}
          </h1>
        </div>
      </div>

     
      <div className="w-full bg-base-100 py-16 px-6 md:px-20 lg:px-40">
        <p className="text-lg md:text-xl text-base-content/80 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
          {recipe.description}
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
         
          <div className="bg-base-200 rounded-2xl shadow-xl p-8 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6">🥗 ส่วนผสม</h2>
            <ul className="list-disc list-inside space-y-3 text-base-content/80">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

         
          <div className="bg-base-200 rounded-2xl shadow-xl p-8 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6">👩‍🍳 วิธีทำ</h2>
            <ol className="list-decimal list-inside space-y-4 text-base-content/80">
              {recipe.steps.map((step, index) => (
                <li key={index} className="text-lg">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/products')}
            className="btn btn-lg btn-primary shadow-lg"
          >
            ⬅ กลับไปหน้าสูตรอาหารทั้งหมด
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
