export default({ target = 'dev', ...env } = {}) => {
  require(`./webpack/config.${target}`).default({ ...env, target })
}