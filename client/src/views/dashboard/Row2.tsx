import BoxHeader from '@/components/BoxHeader';
import DashBoardBox from '@/components/DashBoardBox'
import FlexBetween from '@/components/FlexBetween';
import { useGetKipsQuery, useGetProductsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const pieData = [
  {name: 'GroupA', value: 400000},
  {name: 'GroupB', value: 300000},
]
const Row2 = () => {
  const { data: productsData } = useGetProductsQuery();
  const { data: operationalData } = useGetKipsQuery();
  const palette = useTheme().palette
  const pieColors = [palette.primary[800], palette.primary[300]];
  console.log("🚀 ~ Row2 ~ products:", productsData);

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperatingExpenses }) => {
        return {
          month: month.substring(0, 3),
          "Operational expenses": operationalExpenses,
          "Non Operational Expenses": nonOperatingExpenses,
        };
      })
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productsData &&
      productsData.map(({ _id, price, expense }) => {
        return { 
          id: _id,
          price: price,
          expense: expense
        };
      })
    )
  }, [productsData])

  return (
    <>
        <DashBoardBox gridArea="d">
          <BoxHeader
            title="Operational vs non-operational expenses"
            subtitle=""
            sideText="+4%"
          />
          <ResponsiveContainer width={"100%"} height={"80%"}>
            <LineChart
              data={operationalExpenses}
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
                orientation='left'
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
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Non Operational Expenses"
                stroke={palette.tertiary[500]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Operational expenses"
                stroke={palette.primary.main}
              />
            </LineChart>
          </ResponsiveContainer>
        </DashBoardBox>
        <DashBoardBox gridArea="e">
          <BoxHeader
              title="Campaigns and Targets"
              subtitle=""
              sideText="+4%"
            />
          <ResponsiveContainer 
          width={"100%"} 
          height={"80%"}
          >
            <FlexBetween mt={"0.25rem"} gap={"1.5rem"} pr={"1rem"}>
              <PieChart 
              width={110} 
              height={90}
              margin={{ top: 0, right: -10, left: 10, bottom: 0 }} >
                <Pie
                stroke='none'
                  data={pieData}
                  innerRadius={18}
                  outerRadius={38}
                  fill={palette.tertiary[500]}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => {
                    return <Cell key={index} fill={pieColors[index]} />
                  })}
                </Pie>
              </PieChart>
            <Box ml={"-0.75rem"} flexBasis={"40%"} textAlign={"center"}>
              <Typography variant="h5" >Target Sales</Typography>
              <Typography variant="h3" m={"0.3rem 0"} color={palette.primary[300]} >83</Typography>
              <Typography variant="h6" >Target Sales</Typography>
            </Box>
            <Box flexBasis={"40%"}>
              <Typography variant="h5" >Loses in Revenue</Typography>
              <Typography variant="h6">loses are down 25%</Typography>
              <Typography variant="h5" mt={"0.4rem"} >Margins are up by 32% from last month</Typography>
            </Box>
          </FlexBetween>
          </ResponsiveContainer> 
        </DashBoardBox>
        <DashBoardBox gridArea="f">
          <BoxHeader title='Product Prices and Expenses' subtitle='' sideText='+4%' />
          <ResponsiveContainer width="100%" height="86%">
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 10,
                left: -20,
              }}
            >
              <CartesianGrid stroke={palette.grey[800]} />
              <XAxis 
              type="number" 
              dataKey="price" 
              name="price" 
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`} />

              <YAxis 
              type="number" 
              dataKey="expense" 
              name="expense" 
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`} />

              <Tooltip formatter={(v) => `$${v}`} />
              <Scatter name="Product Expense Ratio" data={productExpenseData} fill={palette.tertiary[500]} />
            </ScatterChart>
          </ResponsiveContainer>
        </DashBoardBox>
    </>
  )
}

export default Row2