import { AnalyticsDashboard } from "@/components/core/profile-analytics/dashboard";
import Layout from "@/components/layout/_layout";
import Footer from "@/components/layout/footer/footer";

const Analytics = () => {
	return (
		<>
			<Layout>
				<div className="w-full lg:w-[100vw] pl-4 pr-4 overflow-auto">
					<div className="max-w-[700px] mx-auto my-10">
						<AnalyticsDashboard />
					</div>
					<Footer />
				</div>
			</Layout>
		</>
	);
};

export default Analytics;