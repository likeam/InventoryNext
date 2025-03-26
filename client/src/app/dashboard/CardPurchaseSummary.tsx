import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const CardPurchaseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className=" row-span-2 xl:row-span-3 md:col-span-2 xl:col-span-1 bg-gray-500">
      CardPurchaseSummary
    </div>
  );
};

export default CardPurchaseSummary;
