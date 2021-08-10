import {Box, Grid, Typography} from '@material-ui/core';
import {getApplyLayout} from '../components/ApplyLayout';
import {NextRouter, useRouter} from 'next/router';
import React from 'react';
import {NextPageWithLayout} from '../types/PageWithLayout.d';
import titleIVPic from '../public/title-iv.png';
import altEdPic from '../public/alt-ed.png';
import Image from 'next/image';
import FormWrapper from '../components/FormWrapper';

function ProgramType(): React.ReactElement {
  // @todo add program type
  const programs = [
    {
      shorthand: 'title-iv',
      title: 'Colleges and universities',
      subtitle: 'Undergraduate and graduate programs',
      icon: titleIVPic
    },
    {
      shorthand: 'alt-ed',
      title: 'Alternative education',
      subtitle: 'Bootcamps and alternative education programs',
      icon: altEdPic
    }
  ];
  const router: NextRouter = useRouter();
  const setProgramType = async (programType: string) => {
    // @todo store user choice to React.Context
    await router.push('/' + programType);
  };
  /**
   * @todo
   * grey.A700 appears frequently - probably could be set in the theme
   * check the same with other colors and system shorthand attrs
   */
  return (
    <React.Fragment>
      <Typography variant="h2">What type of school are you attending?</Typography>
      <Typography variant="subtitle1">Let us know where you are thinking your next move will be.</Typography>
      <FormWrapper>
        {programs.map((program, key) => (
          <Box onClick={() => setProgramType(program.shorthand)} border={1.5} p={2} mx="auto" mb={1.25} key={key}
            borderColor="grey.A700" borderRadius="borderRadius">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Box bgcolor="grey.A700" borderRadius={6} width={44} height={44} pt={1.375} pl={1.375}>
                  <Image src={program.icon} alt={program.title}/>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h3">{program.title}</Typography>
                <Typography variant="subtitle2">{program.subtitle}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </FormWrapper>
    </React.Fragment>
  );
}

ProgramType.getLayout = getApplyLayout;
const ProgramTypePage: NextPageWithLayout = ProgramType;
export default ProgramTypePage;