import { allPaths } from './path'

const K_SERVICE = process.env.K_SERVICE || 'local-app'

const SSLCOMP = (val) => ({ template: `<p>${val}</p>` })

const routes = {
  '/': SSLCOMP(JSON.stringify({ service: K_SERVICE })),
  [allPaths.SSL1]: SSLCOMP('Hello'),
  [allPaths.SSL2]: SSLCOMP(allPaths.SSL2),
  [allPaths.SSL3]: SSLCOMP('test'),
  [allPaths.SSL4]: SSLCOMP('done')
}

export default routes