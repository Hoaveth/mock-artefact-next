import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { BarChart, SimpleLineChart } from '@/components/charts';

export default function ConditionSummary() {
  return (
    <Flex
      justifyContent={'center'}
      flexDirection={'row'}
      width={'100%'}
      height={'90vh'}
      padding={10}
    >
      <Flex
        height={'70%'}
        width={'50%'}
        border={'1px'}
        borderColor={'gray'}
        marginRight={5}
      >
        <Box></Box>
      </Flex>
      <Flex flexDirection={'column'} height={'70%'} width={'50%'}>
        <Box marginBottom={5}>
          <SimpleLineChart />
        </Box>
        <Box>
          <BarChart />
        </Box>
      </Flex>
    </Flex>
  );
}
