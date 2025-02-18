import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
  // useTheme,
  // useMediaQuery,
} from "@mui/material";
import PageTitle from "../../features/common/PageTitleDiv";
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407691.jpg";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import FlagIcon from "@mui/icons-material/Flag";
import HistoryIcon from "@mui/icons-material/History";
import themeColor from "../common/common";
import Management from "./Management";
import BoardDirectorsSection from "./BoardDirectorsSection";
import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import BusinessRoadmap from "./BusinessRoadmap";
import VisionMissionValues from "./VisionMissionValues";
import "../home/home.css";
import useScrollEffect from "../hooks/useScrollEffect";

const AboutUs: React.FC = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const sections = {
    companyOverview: {
      title: "Company Overview",
      content: `RBM Infracon Limited, founded in 1993, is a distinguished leader in the realm of mechanical and civil engineering services. As an ISO 9001:2015 accredited organization, we specialize in delivering comprehensive Construction, Maintenance, and Turnaround solutions across a broad array of industries, including Oil & Gas, Petrochemicals, Fertilizers, Power, Cement, and cement coke oven.

Our expertise spans a wide range of sophisticated services, including the fabrication and erection of structural works, Plate Works, intricate piping systems (CS, SS, Alloy Steel), tankage, electrical and instrumentation solutions, and the meticulous execution of shutdowns and maintenance turnarounds. We operate on an EPC basis also, ensuring seamless integration of design, procurement, and construction with the highest levels of precision and efficiency.

With over 30 years of experience, we have earned the trust of renowned global clients such as Reliance Industries, Nayara Energy, Afcons Infrastructure, and TATA Projects, Mundra Petrochem Limited, Technip Energies, Yara Fertilizers India Pvt. Ltd., Thyssenkrupp Uhde India Limited, Chambal Fertilizers Chemicals Limited etc. delivering solutions that surpass expectations. Our unwavering commitment to safety and quality is reflected in our rigorous adherence to project-specific safety plans and best practices, ensuring the protection of both personnel and the environment.

Our workforce, comprised of highly skilled professionals, is supported by state-of-the-art equipment and technology, enabling us to tackle even the most complex projects with confidence and expertise. At RBM Infracon, we are not merely service providers; we are partners in the success of the Project, continually pushing the boundaries of innovation to deliver exceptional value and forge enduring relationships.

Driven by a philosophy of integrity, innovation, and excellence, RBM Infracon remains steadfast in its mission to redefine industry standards, delivering transformative solutions that shape the future of engineering and construction.`,
    },
  };

  const SectionTitle = ({
    icon: Icon,
    title,
  }: {
    icon: any;
    title: string;
  }) => (
    <Box sx={{ marginTop: "50px", marginBottom: "30px" }}>
      <Typography
        variant="h4"
        sx={{
          color: themeColor,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Icon sx={{ color: themeColor, fontSize: 40 }} />
        {title}
      </Typography>
      <Divider
        sx={{
          mt: 2,
          backgroundColor: themeColor,
          height: 3,
          width: "30%",
        }}
      />
    </Box>
  );
  useScrollEffect("hidden");

  return (
    <>
      <PageTitle imageUrl={BANNER_IMAGE} tileContent="About Us" />
      <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
        {/* Business Roadmap Section */}
        <Box className="hidden">
          <SectionTitle icon={HistoryIcon} title="Business Roadmap" />
          <BusinessRoadmap />
        </Box>

        {/* Chairman's Message */}
        <Box className="hidden">
          <SectionTitle icon={PersonIcon} title="Chairman's Message" />
          <Card
            sx={{
              backgroundColor: "#f8f9fa",
              "&:hover": {
                boxShadow: 3,
                borderColor: themeColor,
                borderWidth: 1,
                borderStyle: "solid",
              },
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
                p: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: 2,
                    border: `3px solid ${themeColor}`,
                  }}
                >
                  <img
                    src={jaybajrang_ramaishish_photo}
                    alt="Mr. Jai Bajrang Mani"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: themeColor,
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Mr. Jai Bajrang Mani
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: themeColor,
                    fontStyle: "italic",
                  }}
                >
                  Managing Director
                </Typography>
              </Box>
              <CardContent
                sx={{
                  flex: 1,
                  p: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: themeColor,
                    mb: 3,
                    fontWeight: "bold",
                  }}
                >
                  Welcome to the official website of RBM Infracon Limited!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-line",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                    color: "#333",
                    textAlign: "justify",
                  }}
                >
                  {`As we stand on the threshold of a new era in infrastructure development, I am filled with immense pride in the journey we've undertaken and the milestones we've achieved. Since our inception, RBM Infracon has been committed to delivering excellence, innovation, and sustainability in every project we undertake. We have built a reputation for quality and reliability, and it is this unwavering dedication that continues to drive our success.

In a rapidly evolving industry, our ability to adapt, embrace new technologies, and ensure the highest standards has positioned us as a trusted partner for infrastructure solutions. Our diverse portfolio of completed and ongoing projects across various sectors is a testament to our expertise and our commitment to shaping the future of our communities with precision and care.

At RBM Infracon, we understand that every project carries with it a responsibility—not just to our clients, but to society at large. Our team is our greatest strength, and we remain focused on fostering a culture of innovation, integrity, and collaboration. We believe that the value of any infrastructure lies not just in its design or completion, but in the positive impact it leaves on the environment and the lives it touches.

Looking ahead, we are excited about the future and the opportunities with the newly added business verticals in Oil & Gas and Renewable Energy (Solar & Green Hydrogen) sectors. With a strong foundation and a visionary outlook, RBM Infracon is poised to continue its journey of excellence, delivering projects that meet the needs of today while addressing the challenges of tomorrow.

Thank you for your continued trust and support.`}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>

        {/* Company Overview Section */}
        <Box className="hidden">
          <SectionTitle icon={BusinessIcon} title="Company Overview" />
          <Card
            sx={{
              backgroundColor: "#f8f9fa",
              "&:hover": {
                boxShadow: 3,
                borderColor: themeColor,
                borderWidth: 1,
                borderStyle: "solid",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  color: "#333",
                  textAlign: "justify",
                  "& strong": {
                    color: themeColor,
                    fontWeight: "bold",
                  },
                }}
              >
                {sections.companyOverview.content}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Vission Mission and Values */}
        <Box className="hidden">
          <SectionTitle icon={FlagIcon} title="Vision, Mission & Values" />
          <VisionMissionValues />
        </Box>

        {/* Board of Directors Section */}
        <Box className="hidden">
          <SectionTitle icon={GroupsIcon} title="Board of Directors" />
          <BoardDirectorsSection />
        </Box>

        {/* Executive Management Section */}
        <Box className="hidden">
          <SectionTitle icon={GroupsIcon} title="Executive Management" />
          <Management />
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
