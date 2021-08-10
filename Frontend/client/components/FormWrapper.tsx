import {WrapperProps} from '../types/WrapperProps';
import {Box} from '@material-ui/core';

export default function FormWrapper({children}: WrapperProps) {
  return (
    <Box mt={5} width={412} textAlign="left" mx="auto">
      {children}
    </Box>
  );
}