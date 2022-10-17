import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../Firebase";
import styled from "styled-components";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { setUserLogin, setSignOut } from "../features/user/userSlice";

function Header() {
  const [Toggle, setToggle] = useState(false);
  const isPopupOpen = () => setToggle(!Toggle);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        navigate('/home')
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      const action = setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
      dispatch(action);
      navigate('/home');
    });
  };

  const signOut = () => {
    auth.signOut()
      .then(() => {
        const action = setSignOut()
        dispatch(action);
        navigate('/');
        isPopupOpen();
      })
  }

  const backToHomePage = () => {
    navigate('/home')
    isPopupOpen();
  }

  return (
    <Nav>
        <Logo>
          <Link to='/home'>
              <img src="images/logo.svg" alt="" />
          </Link>
        </Logo>
      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <NavLink to="/home">
              <li>
                <img src="images/home-icon.svg" alt="" />
                <span>home</span>
              </li>
            </NavLink>

            <NavLink to="#">
              <li>
                <img src="images/search-icon.svg" alt="" />
                <span>search</span>
              </li>
            </NavLink>
            <NavLink to="#">
              <li>
                <img src="images/watchlist-icon.svg" alt="" />
                <span>watchlist</span>
              </li>
            </NavLink>
            <NavLink to="#">
              <li>
                <img src="images/original-icon.svg" alt="" />
                <span>original</span>
              </li>
            </NavLink>
            <NavLink to="#">
              <li>
                <img src="images/movie-icon.svg" alt="" />
                <span>movies</span>
              </li>
            </NavLink>
            <NavLink to="#">
              <li>
                <img src="images/series-icon.svg" alt="" />
                <span>series</span>
              </li>
            </NavLink>
          </NavMenu>

          <UserImg>
            <img onClick={isPopupOpen} src={userPhoto}  alt="" />
            <PopupMenu activeState={Toggle}>
              <li onClick={backToHomePage}>
                <span>home</span>
              </li>
              <li onClick={signOut}>
                <span>LogOut</span>
              </li>
            </PopupMenu>
          </UserImg>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  min-height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  z-index: 1500;
`;

const Logo = styled.div`
   img {
    width: 80px;
   }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 25px;
  list-style: none;

  @media screen and (min-width: 280px) and (max-width: 991px){
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      margin-left: 3px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: -6px;
        right: 0;
        left: 0;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.div`
  position: relative;
  margin-left: auto;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  right: 50%;
  top: 80%;
  display: ${event => event.activeState ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1.3px solid rgba(151, 151, 151, 1);
  padding: 2px 10px 6px 10px;
  background: #040714;

  li {
    list-style: none;
    cursor: pointer;
    padding: 4px 0;
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(151, 151, 151, 1);

    span {
      margin-left: 3px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  transison: all 0.2 ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    font-weight: 500;
  }
`;
