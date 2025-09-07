import react from 'react'

const CustomerSite = ({companyName, url, logo}: any) => {
  return (
    <div className='basis-64'>
      <h2>{companyName}</h2>
      <a href={url}><img className='h-25' src={logo} alt={`${companyName} logo`} /></a>
    </div>
  )
}

export default CustomerSite