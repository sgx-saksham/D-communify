/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="July, 13, 2019" id="#JOINING-130719" price="$250" />
          <Invoice date="March, 03, 2020" id="#LEGEND-030320" price="$180" />
          <Invoice date="May, 13, 2021" id="#KILLMECH-130521" price="$120" />
          <Invoice date="August, 15, 2021" id="#PROTEST-150821" price="$180" />
          <Invoice date="October, 14, 2022" id="#PLACED-141022" price="$300" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
