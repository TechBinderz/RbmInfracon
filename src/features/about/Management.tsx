import { Grid, Typography, Card, CardContent } from "@mui/material";
// import aditya_jay_photo from "../../assets/features/rbm_management/Mr. Aditya Jay Bajrang Mani.jpg";
// import deepak_saxena_photo from "../../assets/features/rbm_management/Mr. Deepak Saxena.png";
// import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import narendra_sharma_photo from "../../assets/features/rbm_management/Mr. Narendra Sharma.png";
import pankaj_kumar_photo from "../../assets/features/rbm_management/Mr. Pankaj Kumar.png";
import ranjan_kumar_photo from "../../assets/features/rbm_management/Mr. Ranjan Kumar.png";
import ravi_pratap_photo from "../../assets/features/rbm_management/Mr. Ravi Pratap Singh.png";
import sanjay_singh_photo from "../../assets/features/rbm_management/Mr. Sanjay Singh.png";
import sreejith_pillai_photo from "../../assets/features/rbm_management/Mr. Sreejith Pillai.png";
// import sunil_srivastava_photo from "../../assets/features/rbm_management/Mr. Sunil Srivastava.png";
import sunil_kumar_photo from "../../assets/features/rbm_management/Sunil Kumar Singh.png";
import jina_kuttath_photo from "../../assets/features/rbm_management/Ms. Jina Kuttath.png";

// Management team data
const managementTeamList = [
  {
    image: narendra_sharma_photo,
    title: "Chief Financial Officer",
    name: "Mr. Narendra Sharma",
  },
  {
    image: jina_kuttath_photo,
    title: "Chief Human Resources Officer",
    name: "Ms. Jina Kuttath",
  },
  {
    image: pankaj_kumar_photo,
    title: "Corporate Projects & Operations Head",
    name: "Mr. Pankaj Kumar",
  },
  {
    image: sreejith_pillai_photo,
    title: "Chief Commercial Head",
    name: "Mr. Sreejith Pillai",
  },
  {
    image: ranjan_kumar_photo,
    title: "Projects Head",
    name: "Mr. Ranjan Kumar",
  },
  // {
  //   image: sunil_srivastava_photo,
  //   title: "Chief Human Resourses Officer",
  //   name: "Mr. Sunil Srivastava",
  // },
  {
    image: ravi_pratap_photo,
    title: "Non-Executive Director of Oil & Gas Division",
    name: "Mr. Ravi Pratap Singh",
  },
  {
    image: sunil_kumar_photo,
    title: "ONGC Project Head",
    name: "Sunil Kumar Singh",
  },
  {
    image: sanjay_singh_photo,
    title: "President - Oil & Gas Division",
    name: "Mr. Sanjay Singh",
  },
];

const Management = () => {
  return (
    <Grid container spacing={4} sx={{ marginTop: "40px" }}>
      {/* <Grid item xs={12} sx={{ padding: { xs: "0px 20px", sm: "0px 40px" } }}>
        <Typography variant="h4" gutterBottom>
          Our Management Team
        </Typography>
        <Box sx={{ borderBottom: "2px solid #000", marginBottom: "30px" }} />
      </Grid> */}
      <Grid container spacing={4} sx={{ marginLeft: "auto" }}>
        {managementTeamList.map((member, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ paddingLeft: { xs: "20px", sm: "40px" } }}
          >
            <Card
              className="card-shadow-1"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                textAlign: "center",
                padding: "16px",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {member.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Management;
