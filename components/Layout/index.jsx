import Header from './Header'
import CompanyOverview from '../sections/CompanyOverview'
const Layout = ({children}) => {
  return (
    <div className="font-neuf">
        <Header />
        {children}
    </div>
  )
}

export default Layout