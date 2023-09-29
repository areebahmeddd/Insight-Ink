import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
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
  margin: "0px 20px",
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
  description = "Welcome to the PIB Automated Feedback System, a transformative solution for media monitoring in the Government of India. Our advanced AI and machine learning solution diligently scans and evaluates regional news stories, e-papers, and YouTube videos across various languages. It categorizes content by government departments and sentiment, delivering instant notifications for negative news. Equipped with an intuitive interface and rapid alerts, our platform equips government officials with actionable intelligence, ensuring prompt responses to media feedback.",
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

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Format the date value to adjust to wht is needed by the API
    const formattedDate = dateValue
      ? `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1)
          .toString()
          .padStart(2, "0")}`
      : "";
    // Navigate to the dashboard page
    navigate("/dashboard", { state: { dropdownValue, formattedDate } });
    // Submit the data here
  };
  const { cursorChangeHandler } = useContext(MouseContext);
  // Render the main page
  return (
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
            <NavRow style={{ color: "#000" }}>
              {/* Render the logo and site title */}
              <LogoLink href="/" style={{color:"black"}}>
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
                    style={{ backgroundColor: "#5e5e5e" }}
                  >
                    {primaryButtonText}
                  </PrimaryButton>

                  <SecondaryButton
                    role="link"
                    onClick={() => {
                      window.open(
                        "https://github.com/areebahmeddd/Insight-Ink",
                        "_blank",
                        "noreferrer"
                      );
                    }}
                  >
                    {secondaryButtonText}
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
                Enter the details
              </SectionHeading>
              <div style={centerFlex}>
                <SectionDescription>
                  Select the source for gathering information. Use the date
                  picker to search for the particular date. Must enter all the
                  fields. It takes time while we get the information for you
                </SectionDescription>
              </div>
              <div
                onMouseOver={() => cursorChangeHandler("hovered")}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                <div className="form">
                  {/* Render the form for entering details */}
                  <form onSubmit={handleSubmit}>
                    <div style={centerFlex}>
                      <select
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                        style={buttonStyle2}
                      >
                        <option value="">Select News</option>
                        <option value="ndtv">NDTV (English)</option>
                        <option value="hindustan">Hindustan (Hindi)</option>
                        <option value="prajavani">Prajavani (Kannada)</option>
                        <option value="dinamalar">Dinamalar (Tamil)</option>
                        <option value="mathrubhumi">
                          Mathrubhumi (Malayalam)
                        </option>
                        <option value="eenadu">Eenadu (Telugu)</option>
                      </select>
                      <div style={datePickerStyle}>
                        <div style={textWhite}>Select Date</div>
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
                        `}</style>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="button-74"
                          style={buttonStyle}
                        >
                          <img
                            src="https://imagizer.imageshack.com/img924/2614/Lkco5F.png"
                            alt=""
                            width={60}
                            height={60}
                          ></img>
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
                  </form>
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
