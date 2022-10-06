import styled from 'styled-components';

function Header() {
    return ( 
        <Nav>
            <Logo src="images/logo.svg" alt="" />
            <NavMenu>
                <a href="/">
                    <img src="images/home-icon.svg" alt="" />
                    <span>home</span>
                </a>
                <a href="/">
                    <img src="images/search-icon.svg" alt="" />
                    <span>search</span>
                </a>
                <a href="/">
                    <img src="images/watchlist-icon.svg" alt="" />
                    <span>watchlist</span>
                </a>
                <a href="/">
                    <img src="images/original-icon.svg" alt="" />
                    <span>original</span>
                </a>
                <a href="/">
                    <img src="images/movie-icon.svg" alt="" />
                    <span>movies</span>
                </a>
                <a href="/">
                    <img src="images/series-icon.svg" alt="" />
                    <span>series</span>
                </a>
            </NavMenu>  
            <UserImg src="https://avatars.githubusercontent.com/u/90492685?s=400&u=69607f09e7069e239b53dd3b7900e76addaa2d12&v=4" />
        </Nav>
     );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content:"";
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
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`