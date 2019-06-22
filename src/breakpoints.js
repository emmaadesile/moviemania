const breakpoints = {
  mobileXs: '425px',
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px'
};

const device = {
  mobileXs: `(max-width: ${breakpoints.mobileXs})`,
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
}

export default device;
