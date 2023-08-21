import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState(0)

  const volunteer = [1, 2, 3, 4, 5, 6].map(num => `/images/volunteer${num}.jpeg`)

  const certs = [{
    title: 'ATSWA Membership Certificate',
    logo: '/images/ican-logo.webp',
    document: '/documents/AAT CERTIFICATE -UGOCHI NKAMA.pdf'
  },
  {
    title: 'ICAN Membership Certificate',
    logo: '/images/ican-logo.webp',
    document: '/documents/ICAN CERTIFICATE -UGOCHI NKAMA.pdf'
  },
  {
    title: 'CFI & ALX - FMVA Certificate',
    logo: '/images/cfi.png',
    document: '/documents/FMVA Certificate.pdf'
  },
  {
    title: 'McKinsey Forward Program',
    logo: '/images/mckinsey.svg',
    document: '/documents/McKinsey_Forward_Program_Badge20221224-30-1omg358.pdf'
  },
  {
    title: 'Tekedia - Business Administration',
    logo: '/images/tekedia.png',
    document: '/documents/tekedia-cert.jpeg'
  },
]

  const contactInfo = [['/images/phone.png', 'Phone Number', '+234 818 644 0990'], ['/images/mail.png', 'Email', 'moyinoluwa.nkama@gmail.com'], ['/images/linkedin.png', 'Linkedin', 'https://www.linkedin.com/in/ugochi-nkama-aat-aca']]

  const galleryImages = ["/images/img-1.jpg", "/images/img-3.jpg", "/images/img-2.jpg", "/images/img-4.jpg", "/images/img-5(1).jpg"]

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
    // gallery?.setAttribute('src', '/images/'+galleryImages[state])
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

      <nav className='sticky top-0 z-10 p-2 bg-white sm:relative sm:bg-transparent sm:top-4 w-full max-w-5xl lg:left-1/2 lg:-translate-x-1/2 flex justify-between sm:justify-center items-center'>
          <a className='sm:hidden w-16 mx-4 pt-[0.4rem] box-border block rounded-full aspect-square text-center font-semibold text-4xl text-light-blue relative' href="#">
              {/* <Image className='rounded-full' alt='warrior' src='/images/warrior.jpeg' fill objectFit='contain'/> */}
            </a>

          <div className='h-max mx-4 flex flex-col sm:block sm:w-3/4 sm:box-border'>
            <div onClick={toggleMenu} className='ml-auto sm:hidden'>
              <Image src='/images/icon-hamburger.svg' alt='menu-toggle' width={34} height={64} className='menu'/>
            </div>
            
            <div onClick={toggleMenu} className='hidden dropdown absolute w-full h-screen sm:h-full p-5 bg-transparent-black top-full left-1/2 -translate-x-1/2 shadow-xl sm:relative sm:flex sm:justify-end sm:max-w-3xl sm:left-0 sm:top-0 sm:-translate-x-0 sm:w-full sm:shadow-none sm:bg-transparent'>
              <div className='bg-white max-w-[375px] w-[90%] m-auto sm:flex sm:bg-transparent'>
                <a href='#' className='block px-8 py-4 font-semibold text-lg text-white hover:text-cyan sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Home</a>
                <a href='#about' className='block px-8 py-4 font-semibold text-lg text-white hover:text-cyan sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>About Me</a>
                <a href='#gallery' className='block px-8 py-4 font-semibold text-lg text-white hover:text-cyan sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Gallery</a>
                <a href='#contact' className='block px-8 py-4 font-semibold text-lg text-white hover:text-cyan sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Contact</a>
              </div>
            </div>
          </div>
      </nav>

      <header className='min-h-screen min-w-full relative sm:bottom-32 lg:bottom-[85px] bg-[url("/images/gradienta.jpg")] bg-cover'>
        <div className='absolute top-0 w-full sm:w-1/2 min-h-full z-0'>
          <div className='absolute h-max z-10 top-1/2 -translate-y-1/2 w-full sm:w-[98vw] box-border text-center'>
            <div className='hidden md:block w-[500px] absolute z-0 -top-48 left-1/2 -translate-x-1/2 aspect-square'>
              <div className='w-full aspect-square rounded-full border-b-8 border-cyan animate-spin'></div>
            </div>
            <h2 className='text-4xl text-white font-semibold w-full'>Hi! I am</h2>
            <h1 className='text-6xl w-full text-white'><b className='text-white'>Nkama</b> Ugochi</h1>
          </div>
        </div>
      </header>

      <section id='about' className='flex flex-col sm:flex-row justify-around mt-10 text-light-blue sm:p-10'>
        <div className='w-full sm:w-[48%] px-5 flex items-center'>
          <div>
            <h2 className='text-4xl font-semibold text-dark-blue'>About Me</h2>
            <p className='text-xl leading-loose mt-8'>I am Nkama Ugochi, an ICAN certified accountant and Audit Associate at BDO. I aspire to become a leading professional in my field in the next 5 years, and I am currently working hard to reach that goal.</p>

            <p className='text-xl leading-loose mt-8'>When I am not working, reading, or learning new things, I like to make cards for various occasions, like birthdays, the New Year, or to wish someone well, all as a way to challenge my creativity. You can check out some of my work below:</p>
          </div>
        </div>

        <div className='w-full my-10 aspect-[0.6] relative sm:w-[48%] sm:max-w-lg sm:aspect-square flex justify-center'>
          <Image src='/images/girl.jpg' alt='ugo' fill style={{objectFit: 'cover', objectPosition: 'top'}}/>
        </div>
      </section>

      <section id='gallery' className='my-16 mx-2'>
        <h2 className='mx-auto my-4 w-max text-4xl font-semibold bg-gradient-rainbow text-transparent bg-clip-text text-center'>Featured Works!</h2>

        <div className=' max-w-6xl flex-grow mx-auto border-[20px] border-image bg-[#FFFDD0] bg-no-repeat bg-cover'>
          <div className=''>
            <div className='flex items-center justify-center relative sm:max-w-4xl sm:m-auto overflow-hidden py-10 min-h-[500px]'>
              <div className='w-96 aspect-square relative'>
                <Image alt='picture' src={galleryImages[state]} fill style={{objectFit:'contain'}} />
              </div>

              <p onClick={() => changeImage(-1)} className='aspect-square opacity-70 hover:opacity-100 hover:cursor-pointer w-24 font-bold text-7xl text-dark-blue rounded-full pb-4 flex items-center justify-center absolute -left-6'>&lt;</p>

              <p onClick={() => changeImage(1)} className='aspect-square opacity-70 hover:opacity-100 hover:cursor-pointer w-24 font-bold text-7xl text-dark-blue rounded-full pb-4 flex items-center justify-center absolute -right-6'>&gt;</p>
            </div>
          </div>
        </div>
      </section>

      <section id='certificates' className='my-10'>
        <h1 className='m-4 text-4xl font-semibold text-black text-center'>My Certificates</h1>

        <div className='max-w-7xl m-auto flex justify-center sm:justify-around flex-wrap'>
          {certs.map(cert => <div key={cert.title.split(" ")[0]} className='bg-new text-white w-11/12 sm:w-64 max-w-[290px] aspect-[0.75] border-2 py-5 px-4 mx-5 my-10 rounded-2xl'>
            <div className='aspect-square bg-white w-3/4 max-w-[56] m-auto border-2 border-black rounded-full flex justify-center items-center'>
              <div className='w-[70%] aspect-square relative'>
                <Image alt='certificate' src={cert.logo} fill style={{objectFit: 'contain'}}/>
              </div>
            </div>

            <p className='text-center my-2 p-2 font-bold text-xl'>{cert.title}</p>
            <a className='text-center my-5 p-2 font-bold bg-new3 rounded-lg block text-xl opacity-90 hover:opacity-100 active:bg-new2' target='_blank' href={cert.document}>Download Certificate</a>
          </div>)}
          
        </div>
      </section>

      <section id='volunteer' className='my-10'>
        <h1 className='m-4 text-4xl font-semibold text-black text-center'>Volunteer Work</h1>

        <div className='gallery flex justify-center flex-wrap'>
          {volunteer.map(pic => 
          <div className='relative w-11/12 sm:w-3/5 lg:w-1/3 max-w-[360px] my-5 mx-4 aspect-[0.6]' key={pic.slice(pic.length - 6)}>
            <Image alt={pic.split('/')[2]} src={pic} fill style={{objectFit: 'cover'}}/>
          </div>)}
        </div>
      </section>

      <section id='contact' className='my-10'>
        <h2 className='text-4xl text-center font-semibold my-6'>Contact Me</h2>
        
        <div className=' max-w-6xl mx-auto'>
          <div className='flex flex-wrap h-[400px] items-center justify-around w-full'>
            {contactInfo.map(info => <div key={info[1]} className='w-11/12 max-w-[320px] aspect-[0.75]'>
              <div className='text-white w-11/12 aspect-[0.75] py-3 mx-3 my-5 shadow-lg shadow-gray-500 bg-slate-800 hover:bg-slate-700'>
                <div className='bg-white w-40 aspect-square rounded-full my-8 mx-auto flex justify-center items-center'>
                  <div className='relative w-7/12 aspect-square'>
                    <Image alt='contact-method' src={info[0]} fill style={{objectFit: 'contain'}}/>
                  </div>
                </div>
                <h1 className='font-semibold text-3xl text-center'>{info[1]}</h1>
                <p className='text-center text-xl m-auto w-10/12'>{contact(info)}</p>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <footer className='py-5 text-center bg-dark-blue'>
        <div className='w-20 aspect-square relative m-auto border-4 border-dark-blue rounded-full'>
          <Image className='rounded-full' alt='crossed swords' src='/images/warrior.jpeg' fill style={{objectFit: 'contain'}}/>
        </div>
        <a href='https://github.com/NkamaWilliams' target='_blank' rel='noopener'><h2 className='my-4 text-2xl font-bold text-white'>Warrior!</h2></a>
      </footer>
    </main>
  )
}
