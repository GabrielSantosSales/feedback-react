import iconStar from "./assets/icon-star.svg"

export function App() {
  return (
    <>
      <div className="h-svh bg-very-dark-blue text-white flex justify-center items-center px-6">
        <div className="bg-radial-gradient max-w-103">
          <img src={iconStar} alt="icone da estrela" />

          <h1 className="text-white">How did we do?</h1>

          <p className="text-light-grey">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

          <div className="text-medium-grey">
            <input type="button" value={1} />
            <input type="button" value={2} />
            <input type="button" value={3} />
            <input type="button" value={4} />
            <input type="button" value={5} />
          </div>

          <button className="">Submit</button>
        </div>
        
      </div>
    </>
  )
}


