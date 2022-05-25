import { Box } from '@mui/material';
import { ReverseTokensButton } from '../../components/ReverseTokensButton';
import { SelectTokenButton } from '../../components/SelectTokenButton';
import { SwapButton } from '../../components/SwapButton';
import { SwapInProgress } from '../../components/SwapInProgress';
import { SwapInput } from '../../components/SwapInput';
import { SwapRoutes } from '../../components/SwapRoutes';
import { FormBox, FormContainer } from './MainPage.style';

export const MainPage: React.FC = () => {
  return (
    <FormContainer disableGutters>
      <FormBox>
        <SwapInProgress mb={3} />
        <SelectTokenButton formType="from" />
        <Box
          sx={{ display: 'flex', justifyContent: 'center', height: 40 }}
          py={0.5}
        >
          <ReverseTokensButton />
        </Box>
        <Box mb={3}>
          <SelectTokenButton formType="to" />
        </Box>
        <Box mb={3}>
          <SwapInput formType="from" />
        </Box>
        <SwapRoutes mb={3} />
      </FormBox>
      <Box px={3} pb={3}>
        <SwapButton />
      </Box>
    </FormContainer>
  );
};