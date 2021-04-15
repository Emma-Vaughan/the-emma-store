fetch("http://localhost:8000/catalogue")
  .then((res) => {
    if (!res.ok) {
      throw Error("Could not fetch data");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

function Main() {
  return <h1>Main</h1>;
}

export default Main;
