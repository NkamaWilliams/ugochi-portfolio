import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const contactInfo = [['/images/phone.png', 'Phone Number', '+234 839 2388 1290'], ['/images/mail.png', 'Email', 'ugo@gmail.com'], ['/images/linkedin.png', 'Linkedin', 'https://ugo.lnkd.com']]

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

  return (
    <main className="bg-white">
      <header className='min-h-screen min-w-full relative'>
        <nav className='absolute z-10 p-2 bg-white sm:bg-transparent sm:top-4 w-full max-w-5xl lg:left-1/2 lg:-translate-x-1/2 flex justify-between items-center'>
          <a className='w-16 mx-4 pt-[0.4rem] box-border block border-4 border-light-blue rounded-full aspect-square text-center font-semibold text-4xl text-light-blue' href="#">N</a>

          <div className='h-max mx-4 flex flex-col sm:block sm:w-1/2 sm:box-border'>
            <div onClick={toggleMenu} className='ml-auto sm:hidden'>
              <Image src='/images/icon-hamburger.svg' alt='menu-toggle' width={34} height={64} className='menu'/>
            </div>
            
            <div className='hidden dropdown absolute max-w-[375px] my-4 top-full left-1/2 -translate-x-1/2 w-[90%] bg-white shadow-xl sm:relative sm:flex sm:justify-end sm:max-w-3xl sm:left-0 sm:top-0 sm:-translate-x-0 sm:w-full sm:shadow-none sm:bg-transparent'>
              <a href='#' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-light-blue'>Home</a>
              <a href='#' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-light-blue'>About Me</a>
              <a href='#' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-light-blue'>Gallery</a>
              <a href='#' className='block px-8 py-4 font-semibold text-lg text-dark-blue hover:text-cyan hover:bg-dark-blue sm:inline sm:p-0 sm:mx-2 sm:text-light-blue'>Contact</a>
            </div>
          </div>
        </nav>

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

      <section className='flex flex-col sm:flex-row justify-around mt-10 text-light-blue'>
        <div className='w-full sm:w-[48%] px-5'>
          <h1 className='text-4xl font-semibold text-dark-blue'>About Me</h1>
          <ul className='list-disc mx-5'>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
            <li className='text-xl py-3'>Lorem ipsum dolor sit amet, consecteur adipisci elit, sed eiusmod</li>
          </ul>
        </div>

        <div className='w-full sm:w-[48%] flex justify-center'>
          <Image src='/images/girl.jpg' alt='ugo' width={450} height={400}/>
        </div>
      </section>

      <section className='my-10 max-w-6xl mx-auto'>
        <h2 className='text-4xl text-center font-semibold my-6'>Contact Me</h2>
        
        <div className='flex flex-wrap justify-around w-full'>
          {contactInfo.map(info => <div key={info[1]} className='bg-dark-blue text-white w-72 h-96 mx-3 my-5'>
            <div className='bg-white w-40 h-40 rounded-full my-8 mx-auto flex justify-center items-center'>
              <Image alt='contact-method' src={info[0]} height={90} width={90}/>
            </div>
            <h1 className='font-semibold text-3xl text-center'>{info[1]}</h1>
            <p className='text-center text-xl'>{info[2]}</p>
          </div>)}
        </div>
      </section>
    </main>
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">pages/index.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Discover and deploy boilerplate example Next.js&nbsp;projects.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
