// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Transactions
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              44%
            </MDTypography>{" "}
            increase in running quater
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Metamask token authentification success"
          dateTime="1 APR 4:00 AM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Order dispached for txn#221714"
          dateTime="27 MAR 10:23 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Payments received batch order #4"
          dateTime="12 MAR 3:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="NFC card for the main profile"
          dateTime="20 FEB 1:20 PM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Unknown login detected at Kamatipura, MH"
          dateTime="26 JAN 06:40 PM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
