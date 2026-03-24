import { useEffect, useState } from "react"

import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import TableCoin from "../modules/TableCoin";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("usd")
  const [chart, setChart] = useState(1)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      }
      catch (error) {
        console.log("ای پی آی کی خودتو بگیر 😁")
        console.log(error)
      }
    };

    getData();
  }, [page, currency])

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      { !!chart && <Chart chart={chart} setChart={setChart} />}
      
    </div>
  )
}

export default HomePage