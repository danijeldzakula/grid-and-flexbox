import Flexbox from "./components/flexbox/Flexbox";
import Grid from "./components/grid/Grid";

export default function App() {
  return (
    <main>
      <h2 style={{ textAlign: 'center', margin: '0', padding: '15px 0' }}>GRID and FLEXBOX</h2>

      <section className="py-4">
        <Grid />
      </section>

      <section className="py-4">
        <Flexbox />
      </section> 
    </main>
  )
}