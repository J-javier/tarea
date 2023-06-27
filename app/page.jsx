// Initialiating the function fetch to get all data available for this proyect

async function getData () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;  
  } catch (error) {
    console.log(error)
  }  
}

// main function

async function Home() {
  const elements = await getData();
  return (
    <>
     <section className="containerOne">
        <h1 className="title">Meet one of the beautiful places.</h1>

     </section>
     <section className="containerTwo">
      {
        elements.map( (element, index) => (  
          <div className="box">
            <div className="photo">
              <img src={`https://picsum.photos/200/15${element.id}`} alt="Photo" height={220} width={320} />
            </div>
            <div className="information">
              <h4 className="detail">{element.name}</h4>
              <p className="detail">{element.email}</p>
              <p className="detail">{element.phone}</p>
            </div>
          </div>

)  ) }
      </section>
    </>
  )
}

export default Home;
