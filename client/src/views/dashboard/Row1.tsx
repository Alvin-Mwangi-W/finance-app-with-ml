import BoxHeader from "@/components/BoxHeader";
import DashBoardBox from "@/components/DashBoardBox";
import { useGetKipsQuery } from "@/state/api";
import useTheme from "@mui/material/styles/useTheme";
import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Row1 = () => {
  const { data } = useGetKipsQuery();
  const palette = useTheme().palette;
  console.log("🚀 ~ Row1 ~ palette:", palette);
  console.log("🚀 ~ Row1 ~ data:", data);
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          month: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          month: month.substring(0, 3),
          revenue: revenue,
          profit: revenue - expenses,
        };
      })
    );
  }, [data]);

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          month: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashBoardBox gridArea="a">
        <BoxHeader
          title="Revenue & Expenses"
          subtitle="Monthly data"
          sideText="+4%"
        />
        <ResponsiveContainer width={"100%"} height={"80%"}>
          <AreaChart
            width={730}
            height={200}
            data={revenueExpenses}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              style={{ fontSize: "8px" }}
            />
            <YAxis
              tickLine={true}
              axisLine={{ strokeWidth: "2" }}
              style={{ fontSize: "10px" }}
              domain={[1000000, 2500000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashBoardBox>
      <DashBoardBox gridArea="b">
        <BoxHeader
          title="Profit & Revenue"
          subtitle="Monthly data"
          sideText="+4%"
        />
        <ResponsiveContainer width={"100%"} height={"80%"}>
          <LineChart
            data={revenueProfit}
            margin={{ top: 20, right: 0, left: 0, bottom: 3 }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="month"
              tickLine={false}
              style={{ fontSize: "8px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
              domain={[100000, 2500000]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
              domain={[100000, 2500000]}
            />
            <Tooltip />
            <Legend height={22} wrapperStyle={{ margin: "0 0 10px 0" }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBoardBox>
      <DashBoardBox gridArea="c">
        <BoxHeader
          title="Revenue, month by month"
          subtitle="Represents the profit and revenue of the company"
          sideText="+4%"
        />
        <ResponsiveContainer width={"100%"} height={"80%"}>
          <BarChart
            width={350}
            height={200}
            data={revenue}
            margin={{ top: 14, right: 25, left: 0, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis 
            dataKey="month"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: "10px" }}
            domain={[10000, 25000]} />
            <YAxis
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
              domain={[100000, 250000]}
            />
            <Tooltip />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue)"
              offset={"90%"}
              stopOpacity={0}
            />
          </BarChart>
        </ResponsiveContainer>
        
      </DashBoardBox>
    </>
  );
};

export default Row1;
