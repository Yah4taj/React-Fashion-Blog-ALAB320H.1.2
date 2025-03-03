
const NavBar = () => {
    return (
      <nav className='navbar' style= {{color: 'lightgrey'}}>
        <ul style={{ 
                  display: 'flex', 
                  listStyle: 'none', 
                  padding: 0,
                  gap: '20px' 
              }}>
          <li><a href="#women's">Women's</a></li>
          <li><a href="#men's">Men's</a></li>
          <li><a href="#onthestreet">On the Street</a></li>
          <li><a href="#thecatwalk">The Catwalk</a></li>
          <li><a href="#adwatch">Ad Watch</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;