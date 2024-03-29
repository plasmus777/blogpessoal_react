import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
      <>
          <div className="bg-gradient-to-r from-green-900 to-lime-800 flex justify-center text-white">
            <div className="container flex flex-col items-center py-2">
              <p className='text-xl font-bold'>Blog Pessoal</p>
              <p className='text-lg'>Fernando Lopes</p>
              <div className='flex gap-6 m-5'>
                <a href='https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/'>
                  <LinkedinLogo size={48} weight='bold' color='lightgreen'/>
                </a>
                <a href='https://github.com/plasmus777'>
                  <GithubLogo size={48} weight='bold' color='lightgreen'/>
                </a>
                <a href='mailto'>
                  <Envelope size={48} weight='bold' color='lightgreen'/>
                </a>
              </div>
            </div>
          </div>
        </>
    )
}
  
  export default Footer