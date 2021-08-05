import DashboardWrapper from "../components/DashboardWrapper"

export default function Home() {

  return (

    <DashboardWrapper>
      <div className="flex mt-10" >

        <div className="w-full max-w-5xl">

          <div className="w-full flex justify-between">
            <div>
              <h3 className="">Summary</h3>
              <p>Last 10 Days</p>
            </div>

            <div className="">
              <select className="Auth-field mt-0 w-40 border border-gray-400 rounded" name="referer" id="referer" >
                <option value="">Last 10 days</option>
                <option value="Facebook">Last 20 days</option>

              </select>
            </div>
          </div>


          <div className="flex">
            <div className="flex flex-col items-center w-50 ">
              <div className="w-full text-white p-3 py-5 bg-green rounded mx-auto">

                <p>Profit</p>
                <p>
                  N250,000,000
                </p>
              </div>
            </div>
            <div className="mx-4 flex flex-col items-center w-50 ">
              <div className="w-full text-green-600 p-3 py-5 bg-gray-50 rounded mx-auto">

                <p>Sales</p>
                <p>
                  N250,000,000
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col px-5 items-center w-72 ">
          <div className="w-full text-white p-3 py-5 bg-yellow-500 rounded mx-auto">
            
            <p>Today's Income</p>
            <p>
            N250,000,000
            </p>
          </div>
        </div>
      </div>
    </DashboardWrapper>

  )
}
