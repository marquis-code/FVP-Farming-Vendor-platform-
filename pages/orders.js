import DashboardWrapper from "../components/DashboardWrapper"

export default function Home() {

  return (

    <DashboardWrapper>
      
      <div className="w-full flex justify-between">
        <div>
      <h3 className="">Summary</h3>
          <p>Last 10 Days</p>
        </div>

      
        <select className="Auth-field mt-0" name="referer" id="referer" >
          <option value="">Last 10 days</option>
          <option value="Facebook">Last 20 days</option>
         
        </select>
      </div>
    </DashboardWrapper>

  )
}
