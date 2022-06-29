const getBuildInfo = () => {
  const now = new Date();
  const timeZone = 'PST';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone,
  }).format(now);
  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime} ${timeZone}`,
    }
  };
};

module.exports = getBuildInfo;