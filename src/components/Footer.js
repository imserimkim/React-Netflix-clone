import React from 'react'
import styled from 'styled-components'



const Footer = () => {

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterSnsLink>
            <a href="https://www.facebook.com/NetflixKR" target="blank">
              <img
                alt='facebook'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3WoQrCQBjA8dOqCFabYDIumbQYBAWr0ei7GE2+wsRqd0+x6nM4/MvA8Kk75/A7V74/fGkHP7jdwTlnWSUBTaArpuVCBiyAM5Dx3BUYhEK3fG4UAl2XoPow0AAudcDDL9BM/R8DUw92BPrBTjUw88BRqGsTPybxwPm3vZixBnygeru64FVdcE8Djiui6c9oHjARh+bkwRKxZu7+eJ026pjMYJFttW5AVPDUuQFLZeo9oP3yuOsULLMsdweoIQ31EfMTdgAAAABJRU5ErkJggg=="
                className='facebook sns'
              />
            </a>
            
            <a href="https://www.instagram.com/netflixkr/" target="blank">
              <img 
                alt='instagram'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nO2WwUrDQBCG8wSJ71HqwYBee/BojAo+hW/U1qvnin2relaw6CeDE1jZ7GSWxOKhHwRCszN/M/stbVEc+S8AFVADl85L1lZjAk+BF2BPPnutneeG3gHvjEd63Oa8aRf6CSyBJmPU18AK+NIeb8DME7wNQq+yRvVTfwE8APfaQ3geKjoJ9nTpEC4SCXjVeglf6/0HUFrB0qijcQr3SyTgCdgB5zr2jjMreBEsXGQKF4lk9Ss8Cw3hTJGmCN5awumXiEQaFYxfuEikscG1JVxQG4l0qOB26uBKxyesjNrHSUct6DlFBWoSY+7M3gSfjw6e61FBA9Y62lbf9G+OkwDcBOF9yLO2CMgJroOFfSOdyTkN9rzb003fL1CfcL1kiFRKI73KHOGSDInkJSVcEkMk7x8BUzgTh0heIuEGSYjkJSmcm0Ak76hN4Y4Uh+YbSkuwxy3xPUwAAAAASUVORK5CYII="
                className='instagram sns'
              />
            </a>

            <a href="https://twitter.com/netflixkr" target="blank">
              <img 
                alt='twitter'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO3WvUtXURjA8auWCBKZ4OYsKs3RUlIIgkaL/kAMGtqCgv6CSFtcRIK2phSHaFAkl4IWHcVFN116GSWIhqS3T1w4w0U994XfdZHfd7yc5/lynnOe89wkadGiBOjCFOYwi8n02ynrOmMJhtFTRpaJuYUvTvIJI+jFPbzHpViSJWxGF5xcfx0/xfmFP/iHGbTFEu2FgG30lxDvKCaVrmIBj2OJ9jMBh5jOkQ6pxlt0xJKtnRKQln78eJlwt4L0FdrzSpeX7DNeoBF2O1FB3Cg6s4tYVj8jReJdvA7nWycDReJ36udH9OHIiMfOQLyeK83In9csflhKHOT38bUG6beyr2CS9lvouw84alL8rPRuU/Ckht2mFbuSVAFteNmE9C9uV5JmwWh6KyNjL4/ZpFkwiK0K0sXo+CsC3aGn3+B3SeFRdOzlgRvYwEEY4FX4iKu5gjxwGY/Cj0AR37GCm0mdoA93Qmulr9k8nuIBruFCrcIW547/OjHT9ha3CWoAAAAASUVORK5CYII="
                className='twitter sns'
              />
            </a>

            <a href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured" target="blank">
              <img 
                alt='youtube'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO3WvytGURzH8YdJMXhYkE2SFAOLGK1iMLKJ/MiklIGV0lOYLAxmG/4EM2XyJxj8GkiGl24d9XS7dC/3PpbnvZ3O+fSuc/p+z7dUqlOn1qAdw5jBIjawiR1UcISDsN4O+yuYxRi60JBWNoJLPMuHN1xh+ifpcDhYFHPfiU8Vy9134hvFU04SP6UIvv5RPBqXtqQMLmMND7m8MzpTBhfC+XIoo/eM4vW4uCeLuCrXh/MM4t24ePA34qr8BG5T5I//S3yS51VfSE8lLu7IIkYb9vEhG1txcXONymk16Z3ua9BAJpPE0S9SNANJ4sOCpS9oShL3puzXv2U7qRS/5P04w2NOsqilXmM+yzTSiiFMRWUU9dkw3kQ9ei+MPodhvRX2lsLoM45uNKaS1alTypFP27NU6qAZ8jIAAAAASUVORK5CYII="
                className='youtube sns'
              />
            </a>
          </FooterSnsLink>
          <FooterLinkContent>
            <FooterLink href="https://jobs.netflix.com/">입사 정보</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">고객 센터</FooterLink>
            <FooterLink href="https://media.netflix.com/ko/">미디어 센터</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/termsofuse">이용약관</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/privacy">개인정보</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/corpinfo">회사정보</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/contactus">문의하기</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/notices">법적 고지</FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterDescContainer>
          <FooterDescRights>© Netflix RIGHTS RESERVED.</FooterDescRights>
        </FooterDescContainer>
      </FooterContent>
    </FooterContainer>
  )

}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    aligne-items: center;
    padding: 40px 0;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100; 

    @media (max-width: 768px){
        padding: 20px 20px;
        padding-bottom: 30px;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px) {
      width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterSnsLink = styled.div`
    margin: 30px 0 30px 0;
    display: flex;
    width: 200px;
    justify-content: space-between;
`
const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  margin-top: 35px;
  
  @media (max-width: 768px) {
    margin-top: 26px; 
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`; 

const FooterDescContainer = styled.div`
  margin-top: 30px;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
  font-weight: lighter;
`;





export default Footer