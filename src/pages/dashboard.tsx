import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dymanic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';


// const Chart = dymanic(() => import("react-apexcharts"));
const Chart = dymanic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreControl: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    // enabled: false,
    theme: 'dark',
    x: {show: false},
    marker: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      new Date('2021-05-01T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-02T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-03T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-04T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-05T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-06T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
      new Date('2021-05-07T00:00:00.000Z').toLocaleString('pt-BR', { day: "2-digit", month: "short" })
    ],
  },
  stroke: {
    colors: [theme.colors.pink[500]]
  },
  fill: {
    colors: [theme.colors.pink[600]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 38, 21, 119] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex width="100%" marginY={6} maxW="1480px" marginX="auto" paddingX={6} align="flex-start">
        <Sidebar />
        <SimpleGrid flex="1" gap={4} minChildWidth="320px">
          <Box bgColor="gray.800" borderRadius={8} padding={8} paddingBottom={4}>
            <Text fontSize="lg" marginBottom={4}>Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>

          <Box bgColor="gray.800" borderRadius={8} padding={8}>
            <Text fontSize="lg" marginBottom={4}>Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}