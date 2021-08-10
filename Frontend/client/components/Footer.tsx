import {Container, Link, makeStyles, Typography} from '@material-ui/core';
import {LinkType} from '../types/LinkType';
import React from 'react';

/**
 * @todo
 * switch to Grid component
 * replace makeStyles here by shorthand attrs
 */
const useStyles = makeStyles({
  copyright: {
    float: 'left',
    color: '#5F6360'
  },
  secondary: {
    float: 'right'
  },
  secondaryLink: {
    margin: '0 15px'
  }
});

export default function Footer(): React.ReactElement {
  const classes = useStyles();
  const secondaryLinks: LinkType[] = [
    {caption: 'Privacy & Security', url: '/'},
    {caption: 'Terms of Use', url: '/'},
    {caption: 'Disclaimer', url: '/'},
    {caption: 'Eligibility Criteria', url: '/'},
  ];
  return (
    <Container>
      <Typography variant="subtitle2" className={classes.copyright}>&copy; Stride Funding, Inc. 2021</Typography>
      <div className={classes.secondary}>
        {secondaryLinks.map((link, key) => (
          <Link href={link.url} key={key} underline="always" className={classes.secondaryLink}>{link.caption}</Link>
        ))}
      </div>
    </Container>
  );
}