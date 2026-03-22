import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(getCoinList(page));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      }
      catch {
        console.log("ای پی آی کی خودتو بگیر 😁")
      }
    };

    getData();
  }, [page])

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default HomePage