import {
  WebpAboutHeroPng,
  WebpAboutSidePicPng,
  WebpAboutValueBgPng,
  WebpPatternPng,
} from "../assets";

export default function About() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpAboutHeroPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">About Us</div>
          <div className="about__hero__content__text">
            Welcome to Advanced Flavors & Fragrances, a melting pot of
            creavtity, expertise, and innovation in the realm of sensory
            science. We are a team of dedicated professionals, with decades of
            experience in the flavor and fragrance industry, united by a shared
            vision - to transform ordinary experiences into extraordinary
            sensory journeys.
          </div>
        </div>
      </section>
      <section className="about__purpose">
        <div className="about__purpose__content">
          <div className="about__purpose__content__left">
            <div className="about__purpose__content__left__img">
              <img loading="lazy" src={WebpAboutSidePicPng} alt="Purpose Pic" />
            </div>
          </div>
          <div className="about__purpose__content__right">
            <div className="about__purpose__content__right__heading">
              Our Purpose
            </div>
            <div className="about__purpose__content__right__text">
              Our purpose at AFF extends beyond the creaon of flavors and
              fragrances. We believe in the transformave power of our cra - its
              ability to evoke emoons, spark memories, and even impact
              well-being. We understand that the right scent can transport one
              back in me, while the correct flavor can turn a meal into a
              cherished memory. More importantly, we recognize how flavors can
              enable healthier lifestyles, by reducing reliance on sugar and
              salt without compromising on taste. Every day, we dedicate
              ourselves to leveraging these extraordinary powers of flavors and
              fragrances to enrich lives and upli spirits.
            </div>
          </div>
        </div>
      </section>
      <section className="about__values">
        <div className="about__values__content">
          <div className="about__values__heading">Our Values</div>
          <div className="about__values__content__cards">
            <div className="about__values__content__card">
              <div className="about__values__content__card__img">
                <svg
                  width="63"
                  height="65"
                  viewBox="0 0 63 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.832 0.581312C30.6245 0.788628 30.6019 6.47078 30.8066 7.00381C30.8867 7.21232 31.2081 7.38297 31.5211 7.38297C32.2823 7.38297 32.3726 6.91753 32.2885 3.42838L32.219 0.552311L31.611 0.481368C31.2764 0.442302 30.9257 0.48736 30.832 0.581312ZM15.6867 4.74106C15.2186 5.25827 15.2864 5.42844 17.2927 8.77451C18.2629 10.3925 18.5829 10.7516 19.0013 10.6919C20.0803 10.5383 19.7992 9.59706 17.5726 5.9097C16.6365 4.35926 16.2494 4.11935 15.6867 4.74106ZM46.4359 4.5637C46.2247 4.73028 45.7878 5.29782 45.4647 5.8251C43.2967 9.36338 42.9419 10.5414 43.9987 10.6919C44.4171 10.7516 44.7371 10.3925 45.7073 8.77451C47.7522 5.36421 47.7996 5.24102 47.2709 4.7123C46.898 4.33937 46.7527 4.31349 46.4359 4.5637ZM28.0248 13.1389C26.1551 13.5833 25.4442 13.8196 24.0702 14.454C17.8535 17.3241 13.8841 23.5815 13.8841 30.5113C13.8841 35.1945 14.9538 37.911 18.6833 42.7001C22.2173 47.2376 23.1884 49.0315 24.184 52.8608L24.4488 53.8794H27.5564H30.6638L30.6027 33.4473L30.5413 13.0153L29.7025 12.9774C29.2411 12.9565 28.4861 13.0294 28.0248 13.1389ZM32.3389 18.4017V23.6685L33.0459 24.034C33.4349 24.235 33.9065 24.3997 34.094 24.3997C35.7336 24.3997 38.9749 27.1602 40.1443 29.5526C40.7859 30.8651 40.8472 31.2105 40.8472 33.5072C40.8472 35.8206 40.7899 36.1369 40.1378 37.4254C38.8181 40.0323 36.3632 42.1143 33.9761 42.6505C33.4155 42.7766 32.818 42.9949 32.6478 43.1361C32.4129 43.3312 32.3389 44.6482 32.3389 48.6358V53.8794H33.5185C34.6387 53.8794 34.7109 53.8401 34.9477 53.1004C35.0848 52.6719 35.2674 51.7659 35.3535 51.0872C35.5016 49.92 35.5639 49.8296 36.501 49.4275C37.046 49.1935 38.0586 48.7523 38.7515 48.4474L40.0115 47.8926L41.6901 48.9687C42.6134 49.5605 43.5097 50.0446 43.6823 50.0446C44.0174 50.0446 48.1572 45.9273 48.1572 45.5939C48.1572 45.4851 47.6719 44.6724 47.0787 43.7882C46.4855 42.9041 46.0002 42.0621 46.0002 41.9173C46.0002 41.7723 46.2621 41.1106 46.5826 40.4467C46.9028 39.7828 47.2347 38.921 47.3203 38.5317C47.454 37.9232 47.6498 37.776 48.7152 37.4827C49.397 37.295 50.355 37.0748 50.8444 36.993C51.6234 36.8629 51.753 36.7435 51.886 36.0339C52.0795 35.0026 51.9301 30.4881 51.6948 30.2535C51.597 30.1561 51.0038 29.9807 50.3766 29.8637C49.7491 29.7468 48.9364 29.5893 48.5707 29.5138C47.89 29.3734 47.1985 28.6287 47.1985 28.0362C47.1985 27.8539 46.9289 27.1682 46.5993 26.5119C46.2698 25.8559 46.0002 25.2076 46.0002 25.0713C46.0002 24.9351 46.4855 24.0936 47.0787 23.2013C47.6719 22.309 48.1572 21.4987 48.1572 21.4007C48.1572 21.0371 43.9819 16.9699 43.6087 16.9699C43.3957 16.9699 42.4945 17.4473 41.6058 18.0309L39.9904 19.0922L38.6211 18.5016C35.6444 17.2174 35.6008 17.1836 35.4112 16.0112C35.3151 15.418 35.1195 14.5283 34.9764 14.0339C34.721 13.1512 34.6953 13.1351 33.5276 13.1351H32.3389V18.4017ZM4.45707 15.6917C3.99114 16.1574 4.34586 16.9945 5.2511 17.5659C5.77574 17.8972 6.25916 18.1682 6.32555 18.1682C6.3917 18.1682 7.17087 18.6121 8.05718 19.1545C9.76077 20.1973 10.3305 20.2021 10.4839 19.1748C10.5385 18.8077 10.2979 18.5078 9.58989 18.0608C9.05685 17.7243 8.56673 17.4492 8.50034 17.4492C8.43419 17.4492 7.67514 17.0178 6.81376 16.4905C5.27051 15.546 4.77175 15.377 4.45707 15.6917ZM56.7854 16.1025C56.3241 16.4064 55.2994 17.0096 54.5085 17.4434C52.613 18.4824 52.4354 18.6397 52.5197 19.2012C52.6698 20.2011 53.2512 20.1899 54.9428 19.1545C55.8291 18.6121 56.6083 18.1682 56.6744 18.1682C56.7408 18.1682 57.2307 17.8931 57.7635 17.5568C58.5595 17.0542 58.7189 16.8299 58.6575 16.2985C58.56 15.4515 57.8817 15.3806 56.7854 16.1025ZM0.328472 31.2162C-0.0437385 31.4928 -0.0837637 31.6483 0.128586 31.9951C0.360109 32.3733 0.809734 32.4373 3.64553 32.4953C6.75552 32.5589 6.90388 32.5402 7.05487 32.0644C7.37411 31.0587 6.84804 30.8708 3.71456 30.8708C1.54601 30.8708 0.67384 30.9598 0.328472 31.2162ZM56.076 31.2188C55.9171 31.4103 55.8581 31.7907 55.9451 32.0644C56.0961 32.5402 56.2445 32.5589 59.3545 32.4953C62.1903 32.4373 62.6399 32.3733 62.8714 31.9951C63.0838 31.6483 63.0437 31.4928 62.6715 31.2162C62.0009 30.7184 56.4894 30.7206 56.076 31.2188ZM8.01212 44.2316C4.50907 46.3189 4.2972 46.4814 4.2972 47.0813C4.2972 47.9616 4.86738 48.0057 6.26635 47.2333C6.96284 46.8486 8.07204 46.235 8.73114 45.8695C9.39024 45.5043 10.121 44.9844 10.3552 44.7148C10.7542 44.2546 10.7557 44.1964 10.3779 43.7789C9.84945 43.195 9.70589 43.2224 8.01212 44.2316ZM52.6221 43.7789C52.2444 44.1964 52.2458 44.2546 52.6448 44.7148C52.879 44.9844 53.6098 45.5043 54.2689 45.8695C54.928 46.235 56.0372 46.8486 56.7337 47.2333C57.4304 47.6179 58.1583 47.8718 58.3514 47.7977C58.9264 47.5772 58.7697 46.5485 58.0938 46.1056C57.0042 45.3916 53.3658 43.3338 53.193 43.3338C53.1007 43.3338 52.8438 43.5342 52.6221 43.7789ZM17.2927 54.6449C16.096 56.6406 15.3221 58.07 15.3221 58.2843C15.3221 58.6024 16.0994 59.1148 16.4045 58.9976C16.7463 58.8665 18.9172 55.4976 18.9172 55.0986C18.9172 54.9876 19.0845 54.758 19.2889 54.5883C19.8531 54.12 19.652 52.8203 19.0013 52.7275C18.5829 52.6678 18.2629 53.0269 17.2927 54.6449ZM43.5236 52.8409C43.2284 53.1359 43.3602 54.2971 43.7233 54.5984C43.921 54.7626 44.0828 54.9876 44.0828 55.0986C44.0828 55.4976 46.2537 58.8665 46.5955 58.9976C46.9006 59.1148 47.6779 58.6024 47.6779 58.2843C47.6779 58.0703 46.9049 56.6423 45.7154 54.6583C44.607 52.8095 44.0317 52.3325 43.5236 52.8409ZM25.0521 56.4784C24.9833 56.5896 24.991 57.0749 25.0691 57.5569L25.2115 58.4331H31.5H37.7885L37.9309 57.5569C38.009 57.0749 38.0167 56.5896 37.9479 56.4784C37.8794 56.3672 34.9776 56.2761 31.5 56.2761C28.0224 56.2761 25.1206 56.3672 25.0521 56.4784ZM25.763 61.0451C25.5041 61.464 26.0662 62.435 27.0603 63.2858C28.227 64.2845 29.0877 64.5074 29.9858 64.0429C30.8514 63.5952 32.3202 63.6149 32.8352 64.0808C33.4938 64.6768 34.8154 64.2912 36.0638 63.1386C36.6978 62.5531 37.1601 61.9029 37.1944 61.5489L37.2521 60.9497L31.5767 60.8855C28.2436 60.8478 25.8442 60.9138 25.763 61.0451Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="about__values__content__card__heading">
                Innovation
              </div>
              <div className="about__values__content__card__text">
                Innovaon is the heartbeat of AFF. We're not just adapng to the
                future; we're shaping it. Through relentless exploraon and
                invenon, we stay at the forefront of the industry, charng the
                course in sensory science.
              </div>
            </div>
            <div className="about__values__content__card">
              <div className="about__values__content__card__img">
                <svg
                  width="63"
                  height="65"
                  viewBox="0 0 63 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.832 0.581312C30.6245 0.788628 30.6019 6.47078 30.8066 7.00381C30.8867 7.21232 31.2081 7.38297 31.5211 7.38297C32.2823 7.38297 32.3726 6.91753 32.2885 3.42838L32.219 0.552311L31.611 0.481368C31.2764 0.442302 30.9257 0.48736 30.832 0.581312ZM15.6867 4.74106C15.2186 5.25827 15.2864 5.42844 17.2927 8.77451C18.2629 10.3925 18.5829 10.7516 19.0013 10.6919C20.0803 10.5383 19.7992 9.59706 17.5726 5.9097C16.6365 4.35926 16.2494 4.11935 15.6867 4.74106ZM46.4359 4.5637C46.2247 4.73028 45.7878 5.29782 45.4647 5.8251C43.2967 9.36338 42.9419 10.5414 43.9987 10.6919C44.4171 10.7516 44.7371 10.3925 45.7073 8.77451C47.7522 5.36421 47.7996 5.24102 47.2709 4.7123C46.898 4.33937 46.7527 4.31349 46.4359 4.5637ZM28.0248 13.1389C26.1551 13.5833 25.4442 13.8196 24.0702 14.454C17.8535 17.3241 13.8841 23.5815 13.8841 30.5113C13.8841 35.1945 14.9538 37.911 18.6833 42.7001C22.2173 47.2376 23.1884 49.0315 24.184 52.8608L24.4488 53.8794H27.5564H30.6638L30.6027 33.4473L30.5413 13.0153L29.7025 12.9774C29.2411 12.9565 28.4861 13.0294 28.0248 13.1389ZM32.3389 18.4017V23.6685L33.0459 24.034C33.4349 24.235 33.9065 24.3997 34.094 24.3997C35.7336 24.3997 38.9749 27.1602 40.1443 29.5526C40.7859 30.8651 40.8472 31.2105 40.8472 33.5072C40.8472 35.8206 40.7899 36.1369 40.1378 37.4254C38.8181 40.0323 36.3632 42.1143 33.9761 42.6505C33.4155 42.7766 32.818 42.9949 32.6478 43.1361C32.4129 43.3312 32.3389 44.6482 32.3389 48.6358V53.8794H33.5185C34.6387 53.8794 34.7109 53.8401 34.9477 53.1004C35.0848 52.6719 35.2674 51.7659 35.3535 51.0872C35.5016 49.92 35.5639 49.8296 36.501 49.4275C37.046 49.1935 38.0586 48.7523 38.7515 48.4474L40.0115 47.8926L41.6901 48.9687C42.6134 49.5605 43.5097 50.0446 43.6823 50.0446C44.0174 50.0446 48.1572 45.9273 48.1572 45.5939C48.1572 45.4851 47.6719 44.6724 47.0787 43.7882C46.4855 42.9041 46.0002 42.0621 46.0002 41.9173C46.0002 41.7723 46.2621 41.1106 46.5826 40.4467C46.9028 39.7828 47.2347 38.921 47.3203 38.5317C47.454 37.9232 47.6498 37.776 48.7152 37.4827C49.397 37.295 50.355 37.0748 50.8444 36.993C51.6234 36.8629 51.753 36.7435 51.886 36.0339C52.0795 35.0026 51.9301 30.4881 51.6948 30.2535C51.597 30.1561 51.0038 29.9807 50.3766 29.8637C49.7491 29.7468 48.9364 29.5893 48.5707 29.5138C47.89 29.3734 47.1985 28.6287 47.1985 28.0362C47.1985 27.8539 46.9289 27.1682 46.5993 26.5119C46.2698 25.8559 46.0002 25.2076 46.0002 25.0713C46.0002 24.9351 46.4855 24.0936 47.0787 23.2013C47.6719 22.309 48.1572 21.4987 48.1572 21.4007C48.1572 21.0371 43.9819 16.9699 43.6087 16.9699C43.3957 16.9699 42.4945 17.4473 41.6058 18.0309L39.9904 19.0922L38.6211 18.5016C35.6444 17.2174 35.6008 17.1836 35.4112 16.0112C35.3151 15.418 35.1195 14.5283 34.9764 14.0339C34.721 13.1512 34.6953 13.1351 33.5276 13.1351H32.3389V18.4017ZM4.45707 15.6917C3.99114 16.1574 4.34586 16.9945 5.2511 17.5659C5.77574 17.8972 6.25916 18.1682 6.32555 18.1682C6.3917 18.1682 7.17087 18.6121 8.05718 19.1545C9.76077 20.1973 10.3305 20.2021 10.4839 19.1748C10.5385 18.8077 10.2979 18.5078 9.58989 18.0608C9.05685 17.7243 8.56673 17.4492 8.50034 17.4492C8.43419 17.4492 7.67514 17.0178 6.81376 16.4905C5.27051 15.546 4.77175 15.377 4.45707 15.6917ZM56.7854 16.1025C56.3241 16.4064 55.2994 17.0096 54.5085 17.4434C52.613 18.4824 52.4354 18.6397 52.5197 19.2012C52.6698 20.2011 53.2512 20.1899 54.9428 19.1545C55.8291 18.6121 56.6083 18.1682 56.6744 18.1682C56.7408 18.1682 57.2307 17.8931 57.7635 17.5568C58.5595 17.0542 58.7189 16.8299 58.6575 16.2985C58.56 15.4515 57.8817 15.3806 56.7854 16.1025ZM0.328472 31.2162C-0.0437385 31.4928 -0.0837637 31.6483 0.128586 31.9951C0.360109 32.3733 0.809734 32.4373 3.64553 32.4953C6.75552 32.5589 6.90388 32.5402 7.05487 32.0644C7.37411 31.0587 6.84804 30.8708 3.71456 30.8708C1.54601 30.8708 0.67384 30.9598 0.328472 31.2162ZM56.076 31.2188C55.9171 31.4103 55.8581 31.7907 55.9451 32.0644C56.0961 32.5402 56.2445 32.5589 59.3545 32.4953C62.1903 32.4373 62.6399 32.3733 62.8714 31.9951C63.0838 31.6483 63.0437 31.4928 62.6715 31.2162C62.0009 30.7184 56.4894 30.7206 56.076 31.2188ZM8.01212 44.2316C4.50907 46.3189 4.2972 46.4814 4.2972 47.0813C4.2972 47.9616 4.86738 48.0057 6.26635 47.2333C6.96284 46.8486 8.07204 46.235 8.73114 45.8695C9.39024 45.5043 10.121 44.9844 10.3552 44.7148C10.7542 44.2546 10.7557 44.1964 10.3779 43.7789C9.84945 43.195 9.70589 43.2224 8.01212 44.2316ZM52.6221 43.7789C52.2444 44.1964 52.2458 44.2546 52.6448 44.7148C52.879 44.9844 53.6098 45.5043 54.2689 45.8695C54.928 46.235 56.0372 46.8486 56.7337 47.2333C57.4304 47.6179 58.1583 47.8718 58.3514 47.7977C58.9264 47.5772 58.7697 46.5485 58.0938 46.1056C57.0042 45.3916 53.3658 43.3338 53.193 43.3338C53.1007 43.3338 52.8438 43.5342 52.6221 43.7789ZM17.2927 54.6449C16.096 56.6406 15.3221 58.07 15.3221 58.2843C15.3221 58.6024 16.0994 59.1148 16.4045 58.9976C16.7463 58.8665 18.9172 55.4976 18.9172 55.0986C18.9172 54.9876 19.0845 54.758 19.2889 54.5883C19.8531 54.12 19.652 52.8203 19.0013 52.7275C18.5829 52.6678 18.2629 53.0269 17.2927 54.6449ZM43.5236 52.8409C43.2284 53.1359 43.3602 54.2971 43.7233 54.5984C43.921 54.7626 44.0828 54.9876 44.0828 55.0986C44.0828 55.4976 46.2537 58.8665 46.5955 58.9976C46.9006 59.1148 47.6779 58.6024 47.6779 58.2843C47.6779 58.0703 46.9049 56.6423 45.7154 54.6583C44.607 52.8095 44.0317 52.3325 43.5236 52.8409ZM25.0521 56.4784C24.9833 56.5896 24.991 57.0749 25.0691 57.5569L25.2115 58.4331H31.5H37.7885L37.9309 57.5569C38.009 57.0749 38.0167 56.5896 37.9479 56.4784C37.8794 56.3672 34.9776 56.2761 31.5 56.2761C28.0224 56.2761 25.1206 56.3672 25.0521 56.4784ZM25.763 61.0451C25.5041 61.464 26.0662 62.435 27.0603 63.2858C28.227 64.2845 29.0877 64.5074 29.9858 64.0429C30.8514 63.5952 32.3202 63.6149 32.8352 64.0808C33.4938 64.6768 34.8154 64.2912 36.0638 63.1386C36.6978 62.5531 37.1601 61.9029 37.1944 61.5489L37.2521 60.9497L31.5767 60.8855C28.2436 60.8478 25.8442 60.9138 25.763 61.0451Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="about__values__content__card__heading">
                Innovation
              </div>
              <div className="about__values__content__card__text">
                Innovaon is the heartbeat of AFF. We're not just adapng to the
                future; we're shaping it. Through relentless exploraon and
                invenon, we stay at the forefront of the industry, charng the
                course in sensory science.
              </div>
            </div>
            <div className="about__values__content__card">
              <div className="about__values__content__card__img">
                <svg
                  width="63"
                  height="65"
                  viewBox="0 0 63 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.832 0.581312C30.6245 0.788628 30.6019 6.47078 30.8066 7.00381C30.8867 7.21232 31.2081 7.38297 31.5211 7.38297C32.2823 7.38297 32.3726 6.91753 32.2885 3.42838L32.219 0.552311L31.611 0.481368C31.2764 0.442302 30.9257 0.48736 30.832 0.581312ZM15.6867 4.74106C15.2186 5.25827 15.2864 5.42844 17.2927 8.77451C18.2629 10.3925 18.5829 10.7516 19.0013 10.6919C20.0803 10.5383 19.7992 9.59706 17.5726 5.9097C16.6365 4.35926 16.2494 4.11935 15.6867 4.74106ZM46.4359 4.5637C46.2247 4.73028 45.7878 5.29782 45.4647 5.8251C43.2967 9.36338 42.9419 10.5414 43.9987 10.6919C44.4171 10.7516 44.7371 10.3925 45.7073 8.77451C47.7522 5.36421 47.7996 5.24102 47.2709 4.7123C46.898 4.33937 46.7527 4.31349 46.4359 4.5637ZM28.0248 13.1389C26.1551 13.5833 25.4442 13.8196 24.0702 14.454C17.8535 17.3241 13.8841 23.5815 13.8841 30.5113C13.8841 35.1945 14.9538 37.911 18.6833 42.7001C22.2173 47.2376 23.1884 49.0315 24.184 52.8608L24.4488 53.8794H27.5564H30.6638L30.6027 33.4473L30.5413 13.0153L29.7025 12.9774C29.2411 12.9565 28.4861 13.0294 28.0248 13.1389ZM32.3389 18.4017V23.6685L33.0459 24.034C33.4349 24.235 33.9065 24.3997 34.094 24.3997C35.7336 24.3997 38.9749 27.1602 40.1443 29.5526C40.7859 30.8651 40.8472 31.2105 40.8472 33.5072C40.8472 35.8206 40.7899 36.1369 40.1378 37.4254C38.8181 40.0323 36.3632 42.1143 33.9761 42.6505C33.4155 42.7766 32.818 42.9949 32.6478 43.1361C32.4129 43.3312 32.3389 44.6482 32.3389 48.6358V53.8794H33.5185C34.6387 53.8794 34.7109 53.8401 34.9477 53.1004C35.0848 52.6719 35.2674 51.7659 35.3535 51.0872C35.5016 49.92 35.5639 49.8296 36.501 49.4275C37.046 49.1935 38.0586 48.7523 38.7515 48.4474L40.0115 47.8926L41.6901 48.9687C42.6134 49.5605 43.5097 50.0446 43.6823 50.0446C44.0174 50.0446 48.1572 45.9273 48.1572 45.5939C48.1572 45.4851 47.6719 44.6724 47.0787 43.7882C46.4855 42.9041 46.0002 42.0621 46.0002 41.9173C46.0002 41.7723 46.2621 41.1106 46.5826 40.4467C46.9028 39.7828 47.2347 38.921 47.3203 38.5317C47.454 37.9232 47.6498 37.776 48.7152 37.4827C49.397 37.295 50.355 37.0748 50.8444 36.993C51.6234 36.8629 51.753 36.7435 51.886 36.0339C52.0795 35.0026 51.9301 30.4881 51.6948 30.2535C51.597 30.1561 51.0038 29.9807 50.3766 29.8637C49.7491 29.7468 48.9364 29.5893 48.5707 29.5138C47.89 29.3734 47.1985 28.6287 47.1985 28.0362C47.1985 27.8539 46.9289 27.1682 46.5993 26.5119C46.2698 25.8559 46.0002 25.2076 46.0002 25.0713C46.0002 24.9351 46.4855 24.0936 47.0787 23.2013C47.6719 22.309 48.1572 21.4987 48.1572 21.4007C48.1572 21.0371 43.9819 16.9699 43.6087 16.9699C43.3957 16.9699 42.4945 17.4473 41.6058 18.0309L39.9904 19.0922L38.6211 18.5016C35.6444 17.2174 35.6008 17.1836 35.4112 16.0112C35.3151 15.418 35.1195 14.5283 34.9764 14.0339C34.721 13.1512 34.6953 13.1351 33.5276 13.1351H32.3389V18.4017ZM4.45707 15.6917C3.99114 16.1574 4.34586 16.9945 5.2511 17.5659C5.77574 17.8972 6.25916 18.1682 6.32555 18.1682C6.3917 18.1682 7.17087 18.6121 8.05718 19.1545C9.76077 20.1973 10.3305 20.2021 10.4839 19.1748C10.5385 18.8077 10.2979 18.5078 9.58989 18.0608C9.05685 17.7243 8.56673 17.4492 8.50034 17.4492C8.43419 17.4492 7.67514 17.0178 6.81376 16.4905C5.27051 15.546 4.77175 15.377 4.45707 15.6917ZM56.7854 16.1025C56.3241 16.4064 55.2994 17.0096 54.5085 17.4434C52.613 18.4824 52.4354 18.6397 52.5197 19.2012C52.6698 20.2011 53.2512 20.1899 54.9428 19.1545C55.8291 18.6121 56.6083 18.1682 56.6744 18.1682C56.7408 18.1682 57.2307 17.8931 57.7635 17.5568C58.5595 17.0542 58.7189 16.8299 58.6575 16.2985C58.56 15.4515 57.8817 15.3806 56.7854 16.1025ZM0.328472 31.2162C-0.0437385 31.4928 -0.0837637 31.6483 0.128586 31.9951C0.360109 32.3733 0.809734 32.4373 3.64553 32.4953C6.75552 32.5589 6.90388 32.5402 7.05487 32.0644C7.37411 31.0587 6.84804 30.8708 3.71456 30.8708C1.54601 30.8708 0.67384 30.9598 0.328472 31.2162ZM56.076 31.2188C55.9171 31.4103 55.8581 31.7907 55.9451 32.0644C56.0961 32.5402 56.2445 32.5589 59.3545 32.4953C62.1903 32.4373 62.6399 32.3733 62.8714 31.9951C63.0838 31.6483 63.0437 31.4928 62.6715 31.2162C62.0009 30.7184 56.4894 30.7206 56.076 31.2188ZM8.01212 44.2316C4.50907 46.3189 4.2972 46.4814 4.2972 47.0813C4.2972 47.9616 4.86738 48.0057 6.26635 47.2333C6.96284 46.8486 8.07204 46.235 8.73114 45.8695C9.39024 45.5043 10.121 44.9844 10.3552 44.7148C10.7542 44.2546 10.7557 44.1964 10.3779 43.7789C9.84945 43.195 9.70589 43.2224 8.01212 44.2316ZM52.6221 43.7789C52.2444 44.1964 52.2458 44.2546 52.6448 44.7148C52.879 44.9844 53.6098 45.5043 54.2689 45.8695C54.928 46.235 56.0372 46.8486 56.7337 47.2333C57.4304 47.6179 58.1583 47.8718 58.3514 47.7977C58.9264 47.5772 58.7697 46.5485 58.0938 46.1056C57.0042 45.3916 53.3658 43.3338 53.193 43.3338C53.1007 43.3338 52.8438 43.5342 52.6221 43.7789ZM17.2927 54.6449C16.096 56.6406 15.3221 58.07 15.3221 58.2843C15.3221 58.6024 16.0994 59.1148 16.4045 58.9976C16.7463 58.8665 18.9172 55.4976 18.9172 55.0986C18.9172 54.9876 19.0845 54.758 19.2889 54.5883C19.8531 54.12 19.652 52.8203 19.0013 52.7275C18.5829 52.6678 18.2629 53.0269 17.2927 54.6449ZM43.5236 52.8409C43.2284 53.1359 43.3602 54.2971 43.7233 54.5984C43.921 54.7626 44.0828 54.9876 44.0828 55.0986C44.0828 55.4976 46.2537 58.8665 46.5955 58.9976C46.9006 59.1148 47.6779 58.6024 47.6779 58.2843C47.6779 58.0703 46.9049 56.6423 45.7154 54.6583C44.607 52.8095 44.0317 52.3325 43.5236 52.8409ZM25.0521 56.4784C24.9833 56.5896 24.991 57.0749 25.0691 57.5569L25.2115 58.4331H31.5H37.7885L37.9309 57.5569C38.009 57.0749 38.0167 56.5896 37.9479 56.4784C37.8794 56.3672 34.9776 56.2761 31.5 56.2761C28.0224 56.2761 25.1206 56.3672 25.0521 56.4784ZM25.763 61.0451C25.5041 61.464 26.0662 62.435 27.0603 63.2858C28.227 64.2845 29.0877 64.5074 29.9858 64.0429C30.8514 63.5952 32.3202 63.6149 32.8352 64.0808C33.4938 64.6768 34.8154 64.2912 36.0638 63.1386C36.6978 62.5531 37.1601 61.9029 37.1944 61.5489L37.2521 60.9497L31.5767 60.8855C28.2436 60.8478 25.8442 60.9138 25.763 61.0451Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="about__values__content__card__heading">
                Innovation
              </div>
              <div className="about__values__content__card__text">
                Innovaon is the heartbeat of AFF. We're not just adapng to the
                future; we're shaping it. Through relentless exploraon and
                invenon, we stay at the forefront of the industry, charng the
                course in sensory science.
              </div>
            </div>
            <div className="about__values__content__card">
              <div className="about__values__content__card__img">
                <svg
                  width="63"
                  height="65"
                  viewBox="0 0 63 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.832 0.581312C30.6245 0.788628 30.6019 6.47078 30.8066 7.00381C30.8867 7.21232 31.2081 7.38297 31.5211 7.38297C32.2823 7.38297 32.3726 6.91753 32.2885 3.42838L32.219 0.552311L31.611 0.481368C31.2764 0.442302 30.9257 0.48736 30.832 0.581312ZM15.6867 4.74106C15.2186 5.25827 15.2864 5.42844 17.2927 8.77451C18.2629 10.3925 18.5829 10.7516 19.0013 10.6919C20.0803 10.5383 19.7992 9.59706 17.5726 5.9097C16.6365 4.35926 16.2494 4.11935 15.6867 4.74106ZM46.4359 4.5637C46.2247 4.73028 45.7878 5.29782 45.4647 5.8251C43.2967 9.36338 42.9419 10.5414 43.9987 10.6919C44.4171 10.7516 44.7371 10.3925 45.7073 8.77451C47.7522 5.36421 47.7996 5.24102 47.2709 4.7123C46.898 4.33937 46.7527 4.31349 46.4359 4.5637ZM28.0248 13.1389C26.1551 13.5833 25.4442 13.8196 24.0702 14.454C17.8535 17.3241 13.8841 23.5815 13.8841 30.5113C13.8841 35.1945 14.9538 37.911 18.6833 42.7001C22.2173 47.2376 23.1884 49.0315 24.184 52.8608L24.4488 53.8794H27.5564H30.6638L30.6027 33.4473L30.5413 13.0153L29.7025 12.9774C29.2411 12.9565 28.4861 13.0294 28.0248 13.1389ZM32.3389 18.4017V23.6685L33.0459 24.034C33.4349 24.235 33.9065 24.3997 34.094 24.3997C35.7336 24.3997 38.9749 27.1602 40.1443 29.5526C40.7859 30.8651 40.8472 31.2105 40.8472 33.5072C40.8472 35.8206 40.7899 36.1369 40.1378 37.4254C38.8181 40.0323 36.3632 42.1143 33.9761 42.6505C33.4155 42.7766 32.818 42.9949 32.6478 43.1361C32.4129 43.3312 32.3389 44.6482 32.3389 48.6358V53.8794H33.5185C34.6387 53.8794 34.7109 53.8401 34.9477 53.1004C35.0848 52.6719 35.2674 51.7659 35.3535 51.0872C35.5016 49.92 35.5639 49.8296 36.501 49.4275C37.046 49.1935 38.0586 48.7523 38.7515 48.4474L40.0115 47.8926L41.6901 48.9687C42.6134 49.5605 43.5097 50.0446 43.6823 50.0446C44.0174 50.0446 48.1572 45.9273 48.1572 45.5939C48.1572 45.4851 47.6719 44.6724 47.0787 43.7882C46.4855 42.9041 46.0002 42.0621 46.0002 41.9173C46.0002 41.7723 46.2621 41.1106 46.5826 40.4467C46.9028 39.7828 47.2347 38.921 47.3203 38.5317C47.454 37.9232 47.6498 37.776 48.7152 37.4827C49.397 37.295 50.355 37.0748 50.8444 36.993C51.6234 36.8629 51.753 36.7435 51.886 36.0339C52.0795 35.0026 51.9301 30.4881 51.6948 30.2535C51.597 30.1561 51.0038 29.9807 50.3766 29.8637C49.7491 29.7468 48.9364 29.5893 48.5707 29.5138C47.89 29.3734 47.1985 28.6287 47.1985 28.0362C47.1985 27.8539 46.9289 27.1682 46.5993 26.5119C46.2698 25.8559 46.0002 25.2076 46.0002 25.0713C46.0002 24.9351 46.4855 24.0936 47.0787 23.2013C47.6719 22.309 48.1572 21.4987 48.1572 21.4007C48.1572 21.0371 43.9819 16.9699 43.6087 16.9699C43.3957 16.9699 42.4945 17.4473 41.6058 18.0309L39.9904 19.0922L38.6211 18.5016C35.6444 17.2174 35.6008 17.1836 35.4112 16.0112C35.3151 15.418 35.1195 14.5283 34.9764 14.0339C34.721 13.1512 34.6953 13.1351 33.5276 13.1351H32.3389V18.4017ZM4.45707 15.6917C3.99114 16.1574 4.34586 16.9945 5.2511 17.5659C5.77574 17.8972 6.25916 18.1682 6.32555 18.1682C6.3917 18.1682 7.17087 18.6121 8.05718 19.1545C9.76077 20.1973 10.3305 20.2021 10.4839 19.1748C10.5385 18.8077 10.2979 18.5078 9.58989 18.0608C9.05685 17.7243 8.56673 17.4492 8.50034 17.4492C8.43419 17.4492 7.67514 17.0178 6.81376 16.4905C5.27051 15.546 4.77175 15.377 4.45707 15.6917ZM56.7854 16.1025C56.3241 16.4064 55.2994 17.0096 54.5085 17.4434C52.613 18.4824 52.4354 18.6397 52.5197 19.2012C52.6698 20.2011 53.2512 20.1899 54.9428 19.1545C55.8291 18.6121 56.6083 18.1682 56.6744 18.1682C56.7408 18.1682 57.2307 17.8931 57.7635 17.5568C58.5595 17.0542 58.7189 16.8299 58.6575 16.2985C58.56 15.4515 57.8817 15.3806 56.7854 16.1025ZM0.328472 31.2162C-0.0437385 31.4928 -0.0837637 31.6483 0.128586 31.9951C0.360109 32.3733 0.809734 32.4373 3.64553 32.4953C6.75552 32.5589 6.90388 32.5402 7.05487 32.0644C7.37411 31.0587 6.84804 30.8708 3.71456 30.8708C1.54601 30.8708 0.67384 30.9598 0.328472 31.2162ZM56.076 31.2188C55.9171 31.4103 55.8581 31.7907 55.9451 32.0644C56.0961 32.5402 56.2445 32.5589 59.3545 32.4953C62.1903 32.4373 62.6399 32.3733 62.8714 31.9951C63.0838 31.6483 63.0437 31.4928 62.6715 31.2162C62.0009 30.7184 56.4894 30.7206 56.076 31.2188ZM8.01212 44.2316C4.50907 46.3189 4.2972 46.4814 4.2972 47.0813C4.2972 47.9616 4.86738 48.0057 6.26635 47.2333C6.96284 46.8486 8.07204 46.235 8.73114 45.8695C9.39024 45.5043 10.121 44.9844 10.3552 44.7148C10.7542 44.2546 10.7557 44.1964 10.3779 43.7789C9.84945 43.195 9.70589 43.2224 8.01212 44.2316ZM52.6221 43.7789C52.2444 44.1964 52.2458 44.2546 52.6448 44.7148C52.879 44.9844 53.6098 45.5043 54.2689 45.8695C54.928 46.235 56.0372 46.8486 56.7337 47.2333C57.4304 47.6179 58.1583 47.8718 58.3514 47.7977C58.9264 47.5772 58.7697 46.5485 58.0938 46.1056C57.0042 45.3916 53.3658 43.3338 53.193 43.3338C53.1007 43.3338 52.8438 43.5342 52.6221 43.7789ZM17.2927 54.6449C16.096 56.6406 15.3221 58.07 15.3221 58.2843C15.3221 58.6024 16.0994 59.1148 16.4045 58.9976C16.7463 58.8665 18.9172 55.4976 18.9172 55.0986C18.9172 54.9876 19.0845 54.758 19.2889 54.5883C19.8531 54.12 19.652 52.8203 19.0013 52.7275C18.5829 52.6678 18.2629 53.0269 17.2927 54.6449ZM43.5236 52.8409C43.2284 53.1359 43.3602 54.2971 43.7233 54.5984C43.921 54.7626 44.0828 54.9876 44.0828 55.0986C44.0828 55.4976 46.2537 58.8665 46.5955 58.9976C46.9006 59.1148 47.6779 58.6024 47.6779 58.2843C47.6779 58.0703 46.9049 56.6423 45.7154 54.6583C44.607 52.8095 44.0317 52.3325 43.5236 52.8409ZM25.0521 56.4784C24.9833 56.5896 24.991 57.0749 25.0691 57.5569L25.2115 58.4331H31.5H37.7885L37.9309 57.5569C38.009 57.0749 38.0167 56.5896 37.9479 56.4784C37.8794 56.3672 34.9776 56.2761 31.5 56.2761C28.0224 56.2761 25.1206 56.3672 25.0521 56.4784ZM25.763 61.0451C25.5041 61.464 26.0662 62.435 27.0603 63.2858C28.227 64.2845 29.0877 64.5074 29.9858 64.0429C30.8514 63.5952 32.3202 63.6149 32.8352 64.0808C33.4938 64.6768 34.8154 64.2912 36.0638 63.1386C36.6978 62.5531 37.1601 61.9029 37.1944 61.5489L37.2521 60.9497L31.5767 60.8855C28.2436 60.8478 25.8442 60.9138 25.763 61.0451Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="about__values__content__card__heading">
                Innovation
              </div>
              <div className="about__values__content__card__text">
                Innovaon is the heartbeat of AFF. We're not just adapng to the
                future; we're shaping it. Through relentless exploraon and
                invenon, we stay at the forefront of the industry, charng the
                course in sensory science.
              </div>
            </div>
          </div>
          <div className="about__values__content__img">
            <img
              loading="lazy"
              src={WebpAboutValueBgPng}
              alt="Our Values BG "
            />
          </div>
        </div>
      </section>
      <section className="about__reach">
        <div className="about__reach__content">
          <div className="about__reach__content__img">
            <img loading="lazy" src={WebpPatternPng} alt="Pattern" />
          </div>
          <div className="about__reach__content__heading">Our Reach</div>
          <div className="about__reach__content__text">
            Our work at AFF impacts lives far beyond our immediate surroundings.
            Our flavors and fragrances are woven into the fabric of everyday
            life worldwide, invoking emotions, awakening memories, and promoting
            healthier lifestyles. We firmly believe in the power of our cra to
            transform lives, and as we progress, our commitment to crafting
            sensory masterpieces remains undimmed. With every aroma, every
            flavor, we strive to make a tangible difference - one sensory
            experience at a me.
          </div>
        </div>
      </section>
    </>
  );
}