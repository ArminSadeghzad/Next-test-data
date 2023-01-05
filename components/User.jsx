import Image from "next/image";

export const User =({user}) =>{
  return(
    <div className="card">
      <Image
      width= "100"
      height= "100"
      src="/extrovert-event.jpg"
      alt="Loading.."
      />
      <div className="card-body">
        <h5 className="care-title">
          {user.name.first} {user.name.last}
        </h5>
        <p className="card-text">
          some quick example of the cards.c
        </p>
      </div>
    </div>
  )
}