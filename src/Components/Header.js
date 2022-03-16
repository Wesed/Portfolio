import React from 'react';


const Header = () => {

  console.log(); 

  return <>
    <header className='container'>
        <div className='profileContainer'>

          <div className='profileText'>
            <h2>Olá, meu nome é <span className='themeColor'>Weslley Eduardo</span></h2>
            {/* efeito digitacao (web / react / js) */}
            <h3>Eu sou <span className='themeColor'>Desenvolvedor Web</span></h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          </div>

          <div className='profileImg'>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="profile" />
          </div>

        </div>
    </header>
    </>
}

export default Header;