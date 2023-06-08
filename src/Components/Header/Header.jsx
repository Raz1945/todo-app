import '../../Styles/Header.css';

export const Header = ({ theme, setTheme }) => {
  return (
    <>
      <header className={`header ${theme}`} >
        <div className='header-container'>
          <h1 className="header__h1">Todo</h1>
          <div className="header__btn">
            <button
              className="setThemeBtn"              
              onClick={setTheme}
            >
              <img
                src={`/assets/Icons/icon-${(theme === 'light-mode' ? 'moon' : 'sun')}.svg`}
                alt="Icono"
                className='setThemeBtn_img'
              />
            </button>
          </div>
        </div>

      </header>
    </>
  );
}
