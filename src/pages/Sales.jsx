
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import TableSales from '../components/sales_page/TableSales'

export default function Sales() {
  return (
    <div className="min-h-full">
      <Navbar />
      <Header title="Sales Table" />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <TableSales/>
        </div>
      </main>
    </div>
  )
}
