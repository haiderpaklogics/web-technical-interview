import { useEffect,useState } from "react"
import HouseCard from "../components/houseCard"
import isLoggedIn from "../helpers/isLoggedIn"

const data = [
  {
    id: 1,
    address: "123 fake st",
    fullAddress: "123 fake st. Irvine, CA 92656",
    city: "Irvine",
    state: "CA",
    zipCode: 92656,
    bedrooms: 4,
    bathrooms: 2.5,
    yearBuilt: 2000,
    sqft: 2343,
  },
  {
    id: 2,
    address: "3081 E 108th Dr.",
    fullAddress: "3081 E 108th Dr. Northglenn, CO 80233",
    city: "Northglenn",
    state: "CO",
    zipCode: 80233,
    bedrooms: 5,
    bathrooms: 3.5,
    yearBuilt: 2001,
    sqft: 3200,
  },
  {
    id: 3,
    address: "7040 Scholarship",
    fullAddress: "7040 Scholarship",
    city: "Irvine",
    state: "CA",
    zipCode: 92612,
    bedrooms: 4,
    bathrooms: 1,
    yearBuilt: 2006,
    sqft: 2800,
  },
  {
    id: 3,
    address: "68 Sobrante",
    fullAddress: "68 Sobrante Aliso Viejo, CA 92656",
    city: "Aliso Viejo",
    state: "CA",
    zipCode: 92656,
    bedrooms: 2,
    bathrooms: 2.5,
    yearBuilt: 2000,
    sqft: 1200,
  },
]
const HousesList = () => {
  const [isLoaded, setLoaded] = useState(false);

  // check for logged in session
  
  useEffect(() => {
    if (!isLoggedIn()) window.location.href = "./login"
    else setLoaded(true)
  }, [])

  return (
    <>
      {isLoaded && (
        <div className="h-screen container m-auto lg:pt-32 md:pt-32 p-2 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-12 gap-10">
          {data.map((house, i) => {
            return (
              <div key={`${i}`}>
                <HouseCard houseData={house} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default HousesList
