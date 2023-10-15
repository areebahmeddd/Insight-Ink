import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
  Container,
  Content2Xl,
  ContentWithVerticalPadding,
} from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import {
  SectionDescription as DescriptionBase,
  SectionDescription,
} from "components/misc/Typography";
import logo from "images/logo.png";
import "./home.css";
import DotRing from "components/dotRing";
import { MouseContext } from "../components/context/mouse-context";
import YoutubeEmbed from "components/ytembed";
import Alert from "react-bootstrap/Alert";
import Loader from "components/loader/Loader";
/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const TextColumn = tw(
  Column
)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(
  HeadingBase
)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;

const ActionButton2 = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton2 = tw(ActionButton2)``;
const SecondaryButton = tw(
  ActionButton2
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;
const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;

// Define the styles for different UI elements
const sectionHighlight = {
  width: "auto",
  backgroundColor: "#242424",
  borderRadius: "30px",
};
const buttonStyle = {
  height: "77px",
  margin: "20px 10px 10px 10px",
  backgroundColor: "#5e5e5e",
  border: "2px solid #000000",
  borderRadius: "30px",
  color: "#F7FAFC",
  cursor: "pointer",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "18px",
  padding: "5px 5px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
};
const centerFlex = {
  display: "flex",
  justifyContent: "center",
};
const buttonStyle2 = {
  margin: "20px 10px 10px 10px",
  backgroundColor: "#5e5e5e",
  border: "0px",
  borderRadius: "10px",
  color: "#F7FAFC",
  cursor: "pointer",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "18px",
  padding: "20px 20px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
};
const datePickerStyle = {
  //display: "block",
  width: "auto",
  margin: "20px 10px 10px 10px",
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "#5e5e5e",
};
const textWhite = { color: "#fff" };

// Main component
export default ({
  features = null,
  primaryButtonUrl = "#details",
  primaryButtonText = "Get Started",
  secondaryButtonUrl = "#details",
  secondaryButtonText = "GitHub",
  buttonRoundedCss = "",
  heading = "Insight Ink",
  description = "Welcome to Press Information Bureau (PIB) automated feedback system, a transformative solution for media monitoring in the Government of India. Our advanced AI and machine learning platform analyzes national and regional news articles, e-papers, and YouTube videos in various languages, categorizing them by government departments and sentiment. It delivers real-time notifications for negative news and provides a user-friendly interface for government officials to take swift action in response to media feedback, strengthening government-public communication.",
}) => {
  // Set the document title and initialize Google Analytics
  useEffect(() => {
    document.title = "Insight Ink";
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, []);

  // Define the state variables
  const [dropdownValue, setDropdownValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const navigate = useNavigate(); // Initialize navigation function
  const [showAlert, setShowAlert] = useState(false); // State for showing/hiding alert
  const [isLoading, setLoading] = useState(false);
  // Handle the form submission
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    // Check if either the dropdownValue or dateValue is empty
    if (!dropdownValue || !dateValue) {
      // Show the alert and set a timer to hide it after 2 seconds
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return; // Prevent form submission
    }
    setLoading(true);
    // Format the date value to adjust to wht is needed by the API
    const formattedDate = dateValue
      ? `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1)
          .toString()
          .padStart(2, "0")}`
      : "";
      
      if (
        ["NDTV", "Dainik Jagran", "Prajavani", "Dinamalar", "Mathrubhumi", "Eenadu"].includes(dropdownValue)
      ) {
        const requestData = {
          news_source: dropdownValue,
          target_date: formattedDate,
        };
    
        const response = await Axios.post("http://127.0.0.1:5000/api", requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.data && !response.data.error) {
          navigate("/dashboard", {
            state: { tableData: response.data },
          });
        } else {
          console.error("Error: ", response.data.error);
          
        }
      }
      setLoading(false);
    };
  
    
    // Submit the data here

  const { cursorChangeHandler } = useContext(MouseContext);
  // Render the main page
  return isLoading?<Loader/>:(
    <div
      style={{
        backgroundImage:
          "url(https://imagizer.imageshack.com/img923/9411/ohe9vb.png)",
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AnimationRevealPage>
        <Container
          tw="-mx-8 -mt-8 pt-8 px-8"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <Content2Xl style={{ padding: "0px 0px" }}>
            <NavRow style={{ color: "#000",alignItems:"flex-start" }}>
              {/* Render the logo and site title */}
              <LogoLink href="/" style={{ color: "black" }}>
                <img src={logo} alt="" />
                Team Innov8
              </LogoLink>
              <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12"></div>
            </NavRow>
            <HeroRow style={{ maxWidth: "1300px" }}>
              {/* Render the hero section with title and description */}
              <TextColumn>
                <Heading as="h1" style={{ color: "#242424" }}>
                  {heading}
                </Heading>
                <Description>{description}</Description>

                {/* Render the primary and secondary buttons */}
                <Actions>
                  <PrimaryButton
                    href={primaryButtonUrl}
                    style={{ backgroundColor: "#242424" }}
                  >
                    {primaryButtonText}
                  </PrimaryButton>
                  <PrimaryButton2
                  className="downloadbtn"
                    onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps",
                        "_blank",
                        "noreferrer"
                      );
                    }}
                  >
                    Download
                  </PrimaryButton2>
                  <style jsx="true">{`
                    .downloadbtn {
                      background-color: #242424;
                      margin-left: 32px;
                      margin-top: 48px;
                    }
                    .downloadbtn:hover {
                      background-color: #3f3f3f;
                    }
                    @media (max-width: 640px) {
                      .downloadbtn {
                        margin-left: 0px;
                        margin-top: 24px;
                      }
                    }
                  `}</style>
                  <SecondaryButton
                    role="link"
                    style={{
                      ...centerFlex,
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      window.open(
                        "https://github.com/areebahmeddd/Insight-Ink",
                        "_blank",
                        "noreferrer"
                      );
                    }}
                  >
                    {secondaryButtonText}
                    <img
                      src="https://imagizer.imageshack.com/img922/6533/UFGckL.png"
                      alt=""
                      width={25}
                      height={25}
                      style={{ marginLeft: "10px" }}
                    ></img>
                  </SecondaryButton>
                </Actions>
              </TextColumn>
              <ImageColumn>
                {/* Render the image */}
                <ImageContainer>
                  <Image
                    src="https://64.media.tumblr.com/b83bb2c0ae680d02f3e732b8a789dcbd/tumblr_nydzs5zeHS1r2geqjo1_540.gif"
                    style={{ borderRadius: "50%" }}
                  />
                </ImageContainer>
              </ImageColumn>
            </HeroRow>
            <SectionContainer id="details" style={sectionHighlight}>
              {/* Render the section for entering details */}
              <SectionHeading style={{ color: "#ededed" }}>
                Build Your Search
              </SectionHeading>
              <div style={{ ...centerFlex, margin: "0px 20px" }}>
                <SectionDescription style={{ textAlign: "center" }}>
                  Select your preferred news source and fine-tune your search by
                  specifying the exact date
                </SectionDescription>
              </div>

              <div
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                <div className="form">
                  {/* Render the form for entering details */}
                  <form onSubmit={handleSubmit}>
                    <div style={{ ...centerFlex, margin: "0px 20px" }}>
                      <select
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                        style={{
                          ...buttonStyle2,
                          lineHeight: "30px",
                        }}
                      >
                        <option hidden value="">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;News Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </option>
                        <option value="ndtv">NDTV (English)</option>
                        <option value="dainikjagran">Dainik Jagran (Hindi)</option>
                        <option value="prajavani">Prajavani (Kannada)</option>
                        <option value="dinamalar">Dinamalar (Tamil)</option>
                        <option value="mathrubhumi">
                          Mathrubhumi (Malayalam)
                        </option>
                        <option value="eenadu">Eenadu (Telugu)</option>
                      </select>
                      <style jsx="true">{`
                        select {
                          -webkit-appearance: none;
                          -moz-appearance: none;
                          appearance: none;
                          line-height: 30px;
                          background-image: url("https://imagizer.imageshack.com/img923/5379/D5ArC0.png");
                          background-repeat: no-repeat;
                          background-position: calc(100% - 1rem) center !important;
                          background-size: 1em;
                        }
                      `}</style>
                      <div style={datePickerStyle}>
                        <div style={centerFlex}>
                          <div style={textWhite}>Select Date</div>
                        </div>
                        {/* Render the date picker */}
                        <DatePicker
                          className="datepicker"
                          selected={dateValue}
                          onChange={(date) => setDateValue(date)}
                          style={{ width: "100%" }}
                        />
                        <style jsx="true">{`
                          .datepicker {
                            background-color: #454444;
                            color: white;
                            border-radius: 8px;
                            padding: 2px 0px 2px 8px;
                            width: 250px;
                            box-sizing: border-box;
                          }

                          @media (max-width: 700px) {
                            .datepicker {
                              width: 65vw;
                            }
                          }

                          @media (max-width: 400px) {
                            .datepicker {
                              width: 60vw;
                            }
                          }
                        `}</style>
                      </div>
                      <div style={centerFlex}>
                        <button
                          type="submit"
                          className="button-74"
                          style={{
                            ...buttonStyle,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://imagizer.imageshack.com/img924/9773/V952F6.png"
                            display="inline-block"
                            alt=""
                            width={25}
                            height={25}
                            style={{ margin: 10 }}
                          ></img>
                          <div
                            style={{
                              fontSize: "20px",
                              marginRight: "10px",
                              fontWeight: "lighter",
                            }}
                          >
                            Search
                          </div>
                        </button>
                      </div>
                      <style jsx="true">{`
                        @media (max-width: 700px) {
                          .div {
                            leftpadding: 100%;
                          }
                        }
                      `}</style>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Alert
                        className="alert"
                        variant="danger"
                        show={showAlert}
                        onClose={() => setShowAlert(false)}
                        dismissible
                      >
                        <i className="fa fa-exclamation-circle" /> Please select
                        a news source and a valid date
                      </Alert>
                      <style jsx="true">{`
                        .alert {
                          background-color: #f8d7da;
                          color: #721c24;
                          border: 1px solid #f5c6cb;
                          border-radius: 4px;
                          padding: 15px;
                          margin: 15px 20px 0px 20px;
                          font-size: 16px;
                          font-weight: bold;
                          max-width: 800px;
                          position: fixed;
                          opacity: 0;
                          transition: opacity 0.5s ease-in-out;
                        }
                        .alert.show {
                          opacity: 1;
                        }

                        @media (max-width: 700px) {
                          .alert {
                            position: relative;
                          }
                        }
                      `}</style>
                    </div>
                    <div style={{ textAlign:"center" ,fontSize:"40px",color:"#fff",margin:"3% 0% 0% 0%",fontWeight:"bold"}}>
                        Project Demo
                    </div>
                    <div style={{ textAlign:"center" ,fontSize:"20px",color:"grey",}}>
                    <a href="https://github.com/areebahmeddd/Insight-Ink/blob/main/README.md">Insight Ink documentation is available here</a>
                    </div>
                    <div style={{ textAlign:"center" ,fontSize:"20px",color:"grey",marginBottom:"20px"}}>
                    <a href="https://github.com/areebahmeddd/Insight-Ink/blob/main/LICENSE">Insight Ink license is available here</a>
                    </div>
                    <div className="player">
                      <YoutubeEmbed embedId="dQw4w9WgXcQ" />
                    </div>
                    <style jsx="true">{`
                      .player {
                        margin: 0% 20% 0% 20%;
                      }
                      @media (max-width: 700px) {
                        .player {
                          margin: 1% 5%;
                        }
                      }
                    `}</style>
                  </form>
                  <div style={{padding:"32px 0px 0px 0px"}}>
                  
                  <div className="license glow" style={{...centerFlex,cursor:"pointer"}} onClick={() => {
                      window.open(
                        "https://github.com/areebahmeddd/Insight-Ink/blob/main/LICENSE",
                        "_self",
                        "noreferrer"
                      );
                    }}>©️ Insight Ink 2023</div>
                    <style jsx="true">{`
                      .license {
                        color:grey;cursor:pointer;
                        transition:color 0.3s ease-in-out;
                      }
                      .license:hover {
                        color:#fafafa;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
              <style jsx="true">{`
                @media (max-width: 700px) {
                  .form form div {
                    flex-direction: column;
                  }
                }
              `}</style>
            </SectionContainer>
          </Content2Xl>
        </Container>
      </AnimationRevealPage>
      {/* Render the dot ring cursor*/}
      <DotRing />
    </div>
  );
};
