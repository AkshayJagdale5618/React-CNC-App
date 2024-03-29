import React from 'react'
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json api/menu.json'
import company from '../../Company Details/company.json'


// // Internal Components 
//  function SubHeader() {
//   return (
//     <div>
//       <h1>Sub Header</h1>
//     </div>
//   )
// }

function Mainmenu({ demo }) {
  return (
    <>
      <Link to={demo.link} className={demo.isButton ? "btn btn-primary" : "nav-link"}>
          {demo.label}
      </Link>
    </>
  );
}

function DropdownMenu({demo}) {
  // console.log(demo)
  return (
    <>
      <NavDropdown title={demo.label} id="basic-nav-dropdown">
        {
          // console.log(demo)
          demo.dropdownMenu.map((data,index)=>{
            return <Mainmenu demo={data} key={index} />
          })
        }
      </NavDropdown>
    </>
  );
}

function Header() {

  // console.log(menu);
  // console.log(company);
  return (
    <div>

      {/* // Internal Components  */}
      {/* <SubHeader /> */}

      {/* animate.css used */}
      {/* <h1 className='animate__animated animate__tada animate__slower 3s'>Header</h1>  */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>

          <Link to="/" className='navbar-brand'>
            <Image src="logo192.png" alt="logo" width={50} className='me-2' />
            {company.name}
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              {/* <Link to="/" className='nav-link '>Learn </Link>
              <Link to="/references" className='nav-link '>References</Link>
              <Link to="/community" className='nav-link '>Community</Link>
              <Link to="/blog" className='nav-link '>Blog</Link> */}

              {/* or */}

              {
                menu.map((item, index) => {
                  // console.log(item,index)
                  // return <Link to={item.link} key={index} className='nav-link'>{item.label}</Link>
                  if(item.isDropDown){
                    return <DropdownMenu demo={item} key={index}/>
                  }
                  return <Mainmenu demo={item} key={index} />
                })

              }

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header