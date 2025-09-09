
const SiteHeader = ({companyName, url, logo}: any) => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">{companyName}</h1>
      <div className="flex flex-row content-center justify-center">
        <a href={url}><img className='h-50' src={logo} alt={`${companyName} logo`} /></a>
      </div>
    </div>
  )
}

export default SiteHeader