import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>NomadGearHub</title>
          <meta property="og:title" content="NomadGearHub" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">nomadGearHub</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            ></nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials"></div>
            <a href="#subscribe-section" className="home-view button">
              Interested?
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <span className="home-logo1">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">
              <span>
                Unlock a World of Hassle-Free
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Remote Work</span>
            </h1>
            <p className="home-caption">
              Rent high-quality work equipment anywhere in the world and turn
              every destination into your office.
            </p>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
          <div className="home-container3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxvZmZpY2UlMjBjaGFpcnxlbnwwfHx8fDE3MDYwMzM3NzB8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300"
              className="home-image"
            />
            <div className="home-description1">
              <div className="home-content">
                <p className="home-paragraph">
                  Welcome to nomadGearHub, the ultimate solution for digital
                  nomads seeking a seamless remote work experience. Imagine a
                  world where you can travel light, without the burden of
                  carrying bulky work equipment. Our platform is here to make
                  that vision a reality.
                </p>
              </div>
              <div className="home-links">
                <button
                  id="subscribe-section"
                  className="home-button1 button-link button"
                >
                  <span className="home-text08">
                    subscribe to a mailing list!
                  </span>
                </button>
                <input
                  type="text"
                  placeholder="your email"
                  className="home-input input"
                />
                <img
                  alt="image"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6060b1e5-1319-4e13-b42b-2e477f89ffb2/d9e7e22d-5b77-427e-9548-3051460d7128?org_if_sml=1338&amp;force_format=original"
                  className="home-arrow"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-cards">
          <div className="home-row">
            <div className="home-card">
              <div className="home-avatar">
                <img
                  alt="image"
                  src="/Avatars/avatar.svg"
                  className="home-avatar1"
                />
              </div>
              <div className="home-main">
                <div className="home-content1">
                  <h2 className="home-header01">Lily the Laptop Lugger</h2>
                  <p className="home-description2">
                    &quot;Every time I move to a new spot, it feels like
                    I&apos;m in a circus act. Someone hand me a solution to this
                    juggling madness!&quot;
                  </p>
                </div>
                <button className="home-learn button">
                  <span className="home-text09">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image01"
                  />
                </button>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-avatar2">
                <img
                  alt="image"
                  src="/Avatars/default-avatar.svg"
                  className="home-avatar3"
                />
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image02"
                />
              </div>
              <div className="home-main1">
                <div className="home-content2">
                  <h2 className="home-header02">Sam the Struggling Nomad</h2>
                  <p className="home-description3">
                    &quot;Ouch! My back! Carrying all this gear from one place
                    to another is a literal pain. Can someone please invent a
                    teleportation device for my office equipment?&quot;
                  </p>
                </div>
                <button className="home-learn1 button">
                  <span className="home-text10">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image03"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-container4">
              <div className="home-row1">
                <div className="home-main2">
                  <div className="home-content3">
                    <h2 className="home-header03">Exchange of goods</h2>
                    <p className="home-description4">
                      The equipment is there for you, either in private
                      basements or second hand stores... why not to make use of
                      it?
                    </p>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image04"
                />
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-kw77-300h.png"
                  className="home-pasted-image"
                />
              </div>
              <img
                alt="image"
                src="/Characters/character-5.svg"
                className="home-image05"
              />
            </div>
          </div>
        </section>
        <section className="home-roadmap">
          <div className="home-heading1">
            <h2 className="home-header04">Roadmap</h2>
            <p className="home-header05">2024 -&gt;</p>
          </div>
          <div className="home-list">
            <div className="home-step">
              <span className="home-caption1">01</span>
              <div className="home-heading2">
                <h2 className="home-header06">
                  <span>Collect the feedback</span>
                  <br></br>
                </h2>
                <p className="home-header07">
                  We are here now, let&apos;s wait until the end of Q1
                </p>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-caption2">02</span>
              <div className="home-heading3">
                <h2 className="home-header08">Building</h2>
                <p className="home-header09">
                  <span>
                    We know no-code solution, so can deliver it faster than you
                    think! 
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-caption3">03</span>
              <div className="home-heading4">
                <h2 className="home-header10">
                  <span>Use the beta version</span>
                  <br></br>
                </h2>
                <p className="home-header11">
                  <span>Here we will test it in the real life! </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-caption4">04</span>
              <div className="home-heading5">
                <h2 className="home-header12"> Community</h2>
                <p className="home-header13">
                  <span>We expect that the community will evolve around. </span>
                  <br></br>
                  <span>
                    What if you could get the equipment from someone who
                  </span>
                  <br></br>
                  <span>is just leaving the place you arrived to!</span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-join-us">
          <div className="home-content4">
            <div className="home-main3">
              <div className="home-heading6">
                <h2 className="home-header14">
                  <span>
                    Create your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>own space</span>
                </h2>
              </div>
            </div>
            <div className="home-container5">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
                className="home-image06"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
                className="home-image07"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
                className="home-image08"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
                className="home-image09"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
                className="home-image10"
              />
            </div>
          </div>
        </section>
        <div>
          <div className="home-container7">
            <Script
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-view {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-container3 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-image {
            top: 80px;
            left: 51px;
            width: 261px;
            height: 275px;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-description1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            color: rgb(255, 255, 255);
            font-size: 40px;
            line-height: 60px;
          }
          .home-links {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
          .home-button1 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffcf77;
            border-top-width: 0px;
          }
          .home-text08 {
            color: rgb(0, 0, 0);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            margin-left: 12px;
            margin-right: 12px;
            background-color: rgba(0, 0, 0, 0);
          }
          .home-input {
            color: #ffffff;
            height: 63px;
            background-color: var(--dl-color-gray-black);
          }
          .home-arrow {
            right: 22px;
            width: 25px;
            bottom: 28px;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #000000;
          }
          .home-avatar {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #fdea6b;
          }
          .home-avatar1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn {
            gap: var(--dl-space-space-unit);
            color: white;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text09 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image01 {
            width: 16px;
            object-fit: cover;
          }
          .home-card1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #ffcf77;
          }
          .home-avatar2 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-avatar3 {
            width: 28px;
            object-fit: cover;
          }
          .home-image02 {
            width: 89px;
            height: 144px;
            object-fit: cover;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn1 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image03 {
            width: 16px;
            object-fit: cover;
          }
          .home-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #8fa7df;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description4 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-image04 {
            width: 137px;
            height: 330px;
            object-fit: cover;
          }
          .home-pasted-image {
            width: 114px;
            height: 250px;
            align-self: center;
            padding-bottom: 56px;
          }
          .home-image05 {
            object-fit: cover;
          }
          .home-roadmap {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: column;
          }
          .home-header04 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 500;
            line-height: 108px;
          }
          .home-header05 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            text-align: center;
            line-height: 36px;
          }
          .home-list {
            gap: 106px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-left-width: 1px;
          }
          .home-step {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption2 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption3 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption4 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header13 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-join-us {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-main3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header14 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-image06 {
            width: 200px;
            height: 146px;
            align-self: flex-start;
            object-fit: cover;
            margin-right: 10px;
          }
          .home-image07 {
            width: 200px;
            height: 146px;
            object-fit: cover;
            margin-right: 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-image08 {
            width: 200px;
            height: 145px;
            object-fit: cover;
            margin-right: 10px;
          }
          .home-image09 {
            width: 200px;
            height: 147px;
            object-fit: cover;
            margin-right: 10px;
          }
          .home-image10 {
            width: 200px;
            height: 146px;
            object-fit: cover;
            margin-right: 10px;
          }
          .home-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo1 {
              color: #000000;
            }
            .home-row {
              flex-direction: column;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-heading6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 20px;
              line-height: 30px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header01 {
              font-size: 24px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card1 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header02 {
              font-size: 24px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card2 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-main2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header03 {
              font-size: 24px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-roadmap {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header04 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-header05 {
              width: 80%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-list {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header06 {
              font-size: 32px;
            }
            .home-header07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header08 {
              font-size: 32px;
            }
            .home-header09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-header10 {
              font-size: 32px;
            }
            .home-header11 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header12 {
              font-size: 32px;
            }
            .home-header13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-join-us {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content4 {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-main3 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
            }
            .home-header14 {
              font-size: 36px;
              line-height: 43px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
