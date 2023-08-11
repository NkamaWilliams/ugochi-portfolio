import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState(0)

  const contactInfo = [['/images/phone.png', 'Phone Number', '+234 818 644 0990'], ['/images/mail.png', 'Email', 'moyinoluwa.nkama@gmail.com'], ['/images/linkedin.png', 'Linkedin', 'https://www.linkedin.com/in/ugochi-nkama-aat-aca']]

  const galleryImages = ["img-1.jpg", "img-3.jpg", "img-2.jpg", "img-4.jpg"]

  const toggleMenu = () => {
    const dropdown = document.querySelector(".dropdown")
    const menu = document.querySelector(".menu")

    dropdown?.classList.toggle("hidden")
    if (dropdown?.classList.contains("hidden")){
      menu?.setAttribute("src", "/images/icon-hamburger.svg")
    }
    else{
      menu?.setAttribute("src", "/images/icon-close.svg")
    }
  }

  const changeImage = (amnt:number) => {
    let gallery = document.querySelector(".gallery")
    setState((state + amnt) >= 0? (state + amnt) % galleryImages.length : 2)
    console.log(state)
    gallery?.setAttribute('src', '/images/'+galleryImages[state])
  }

  const contact = (info: string[]) =>{
    if (info[1] == 'Phone Number'){
      return info[2]
    }
    else if (info[1] == 'Email'){
      return <a className='text-white block w-full break-words' href='mailto:moyinoluwa.nkama@gmail.com'>{info[2]}</a>
    }
    else{
      return <a className='text-white block w-full break-words' href={info[2]}>{info[2]}</a>
    }
  }

  return (
    <main className="bg-white">

      <nav className='sticky top-0 z-10 p-2 bg-white sm:relative sm:bg-transparent sm:top-4 w-full max-w-5xl lg:left-1/2 lg:-translate-x-1/2 flex justify-between items-center'>
          <a className='w-16 mx-4 pt-[0.4rem] box-border block border-4 border-light-blue rounded-full aspect-square text-center font-semibold text-4xl text-light-blue' href="#">N</a>

          <div className='h-max mx-4 flex flex-col sm:block sm:w-1/2 sm:box-border'>
            <div onClick={toggleMenu} className='ml-auto sm:hidden'>
              <Image src='/images/icon-hamburger.svg' alt='menu-toggle' width={34} height={64} className='menu'/>
            </div>
            
            <div onClick={toggleMenu} className='hidden dropdown absolute w-full h-screen sm:h-full p-5 bg-transparent-black top-full left-1/2 -translate-x-1/2 shadow-xl sm:relative sm:flex sm:justify-end sm:max-w-3xl sm:left-0 sm:top-0 sm:-translate-x-0 sm:w-full sm:shadow-none sm:bg-transparent'>
              <div className='bg-white max-w-[375px] w-[90%] m-auto sm:flex sm:bg-transparent'>
                <a href='#' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-black sm:hover:bg-transparent'>Home</a>
                <a href='#about' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-black sm:hover:bg-transparent'>About Me</a>
                <a href='#gallery' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-black sm:hover:bg-transparent'>Gallery</a>
                <a href='#contact' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-black sm:hover:bg-transparent'>Contact</a>
              </div>
            </div>
          </div>
      </nav>

      <header className='min-h-screen min-w-full relative sm:bottom-32 lg:bottom-[85px]'>
        <div className='absolute top-0 w-full sm:w-1/2 min-h-full z-0 bg-dark-blue'>
          <div className='absolute h-max z-10 top-1/2 -translate-y-1/2 w-full sm:w-[98vw] box-border text-center'>
            <div className='hidden md:block w-[500px] absolute z-0 -top-48 left-1/2 -translate-x-1/2 aspect-square'>
              <div className='w-full aspect-square rounded-full border-b-8 border-cyan animate-spin'></div>
            </div>
            <h2 className='text-4xl font-semibold w-full'>Hi! I am</h2>
            <h1 className='text-6xl w-full'><b className='text-white'>Nkama</b> Ugochi</h1>
          </div>
        </div>
      </header>

      <section id='about' className='flex flex-col sm:flex-row justify-around mt-10 text-light-blue sm:p-10'>
        <div className='w-full sm:w-[48%] px-5 flex items-center'>
          <div>
            <h1 className='text-4xl font-semibold text-dark-blue'>About Me</h1>
            <p className='text-xl leading-loose mt-8'>I am Nkama Ugochi, an ICAN certified accountant and Audit Associate at BDO. I aspire to become a leading professional in my field in the next 5 years, and I am currently working hard to reach that goal.</p>

            <p className='text-xl leading-loose mt-8'>When I am not working, reading, or learning new things, I like to make cards for various occasions, like birthdays, the New Year, or to wish someone well, all as a way to challenge my creativity. You can check out some of my work below:</p>
          </div>
        </div>

        <div className='w-full sm:w-[48%] sm:max-w-lg sm:aspect-square flex justify-center'>
          {/* <Image src='/@/public/images/girl.jpg' alt='ugo' width={450} height={400}/> */}
          <img className='object-cover w-full object-top' alt='ugo' src='/images/girl.jpg'/>
        </div>
      </section>

      <section id='gallery' className='my-16 max-w-6xl mx-auto'>
        <h1 className='m-4 text-4xl font-semibold text-dark-blue text-center'>Gallery</h1>
        <div className='flex items-center justify-center relative sm:max-w-4xl sm:m-auto'>
          <div className='w-96 aspect-square'>
            <img className='w-full object-contain gallery' alt='picture' src='/images/img-1.jpg'/>
          </div>

          <p onClick={() => changeImage(-1)} className='aspect-square opacity-30 hover:opacity-70 hover:cursor-pointer w-24 font-bold text-7xl bg-indigo-700 text-white rounded-full pb-4 flex items-center justify-center absolute left-0'>&larr;</p>

          <p onClick={() => changeImage(1)} className='aspect-square opacity-30 hover:opacity-70 hover:cursor-pointer w-24 font-bold text-7xl bg-indigo-700 text-white rounded-full pb-4 flex items-center justify-center absolute right-0'>&rarr;</p>
        </div>
      </section>

      <section id='contact' className='my-10 max-w-6xl mx-auto'>
        <h2 className='text-4xl text-center font-semibold my-6'>Contact Me</h2>
        
        <div className='flex flex-wrap h-[400px] items-center justify-around w-full'>
          {contactInfo.map(info => <div key={info[1]} className='w-80 aspect-[0.75]'>
            <div className='text-white w-11/12 aspect-[0.75] pt-3 mx-3 my-5 shadow-lg shadow-gray-500 bg-slate-800 hover:bg-slate-700'>
              <div className='bg-white w-40 h-40 rounded-full my-8 mx-auto flex justify-center items-center'>
                <Image alt='contact-method' src={info[0]} height={90} width={90}/>
              </div>
              <h1 className='font-semibold text-3xl text-center'>{info[1]}</h1>
              <p className='text-center text-xl m-auto w-10/12'>{contact(info)}</p>
              
            </div>
          </div>)}
        </div>
      </section>
    </main>
  )
}
