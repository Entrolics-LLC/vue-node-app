import { allPaths } from './path'

const SSLCOMP = (val) => ({ template: `<p>${val}</p>` })

const routes = {
  '/': SSLCOMP('Hello from VUE Docker Container'),
  [allPaths.SSL1]: SSLCOMP(allPaths.SSL1),
  [allPaths.SSL2]: SSLCOMP(allPaths.SSL2),
  [allPaths.SSL3]: SSLCOMP('test'),
  [allPaths.SSL4]: SSLCOMP('done')
}

export default routes