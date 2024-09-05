import Landing from "./components/Landing";

export default async function getServerSideProps() {
  // const response = await fetch("http://localhost:3000/api", { method: "GET" });
  // const { products } = await response.json();
  // console.log(products);

  return (
    <main className="overflow-x-hidden">
      <Landing />
    </main>
  );
}
