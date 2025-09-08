
import Profile from '../assets/aboutme.jpg'

function AboutPage() {
  return (
    <div className="w-full bg-base-100 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      
      <h1 className="text-9xl md:text-8xl font-extrabold text-center mb-12">
        เกี่ยวกับพวกเรา
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        
        <div className="flex justify-center">
          <img 
            src={Profile} 
            alt="about" 
            className="rounded-2xl shadow-xl w-80 h-80 object-cover"
          />
        </div>

        
        <div>
          <h2 className="text-6xl font-bold mb-6">สวัสดีครับ</h2>
          <p className="text-3xl text-base-content/80 leading-relaxed mb-6">
            พวกผมคือกลุ่มปวส.1/1 วิทยาลัยเทคนิคสมุทรสาคร สาขาเทคโนโลยีสารสนเทศ
          </p>
          <p className="text-2xl text-base-content/80 leading-relaxed mb-6">
            เว็บไซต์นี้ถูกสร้างขึ้นเพื่อรวบรวมสูตรอาหารและวิธีทำ 
            ให้ทุกคนสามารถทำตามได้ง่าย ๆ ที่บ้าน 
            ไม่ว่าคุณจะเป็นมือใหม่หรือเชฟมือโปรก็สามารถสนุกไปกับการทำอาหาร
          </p>

          
        </div>
      </div>
    </div>
  )
}

export default AboutPage
