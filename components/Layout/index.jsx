import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className="font-neuf">
        <Header />
        {children}
    </div>
  )
}

export default Layout