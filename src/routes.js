import { allPaths } from './path'

const [K_SERVICE,] = [process.env.K_SERVICE || 'local']

console.log('K_SERVICE', K_SERVICE)

const SSLCOMP = (val) => ({ template: `<p>${val}</p>` })

const routes = {
  '/': SSLCOMP('Hello from VUE Docker Container'),
  [allPaths.SSL1]: SSLCOMP(K_SERVICE),
  [allPaths.SSL2]: SSLCOMP(allPaths.SSL2),
  [allPaths.SSL3]: SSLCOMP('test'),
  [allPaths.SSL4]: SSLCOMP('done')
}

export default routes