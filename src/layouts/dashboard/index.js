// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="API Calls"
                count={293}
                percentage={{
                  color: "success",
                  amount: "+26%",
                  label: "gains compared to last week, lots of incoming traffic",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Total User visits"
                count="3,845"
                percentage={{
                  color: "success",
                  amount: "+34%",
                  label: "the progress is v-curve, much better than last quater",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="349k"
                percentage={{
                  color: "success",
                  amount: "+21%",
                  label: "recurring users consuming content than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="post impressions"
                count="739"
                percentage={{
                  color: "success",
                  amount: "72+",
                  label: "users shared post among via our secured channel",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website traffic"
                  description="unique visits on the site in comparison with previous week"
                  date="progress report sent yesterday"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily engagement"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today revenue due to large bunch orders
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="newsletter subscriptions"
                  description="number of users opting for services like Wallet Request"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="interaction overview"
                  description="connectivity with stakeholders and help by our D-chatBot"
                  date="2 pending trust approvals"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
