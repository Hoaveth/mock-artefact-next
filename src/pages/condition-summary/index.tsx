import React from 'react';

import { Flex } from '@chakra-ui/react';

import { SimpleLineChart } from '@/components/charts';

export default function ConditionSummary() {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <SimpleLineChart />
    </Flex>
  );
}
