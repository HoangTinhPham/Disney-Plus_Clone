import styled from 'styled-components';

function Login() {
    return ( 
        <Container>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg"/>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="images/cta-logo-two.png"/>
            </CTA>
        </Container>
     );
}

export default Login;

const Container = styled.div`
    position: relative;
    margin-top: 70px;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content:"";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url("images/login-background.jpg");
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.8;
        z-index: -1;
    }

    
`

const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.div`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
    margin-top: 5px;
`