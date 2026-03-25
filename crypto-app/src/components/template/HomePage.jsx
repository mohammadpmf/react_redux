import { useEffect, useState } from "react"

import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import TableCoin from "../modules/TableCoin";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("usd")
  const [chart, setChart] = useState(1)
  const data = 
    [
      {
        date: 11111,
        prices: 200
      },
      {
        date: 11112,
        prices: 208
      },
      {
        date: 11113,
        prices: 206
      },
      {
        date: 11114,
        prices: 213
      },
      {
        date: 11122,
        prices: 210
      },
      {
        date: 11123,
        prices: 208
      },
      {
        date: 11124,
        prices: 218
      },
      {
        date: 11125,
        prices: 248
      },
      {
        date: 11126,
        prices: 258
      },
      {
        date: 11127,
        prices: 288
      },
      {
        date: 11142,
        prices: 300
      },
      {
        date: 11144,
        prices: 268
      },
      {
        date: 11145,
        prices: 258
      },
      {
        date: 11149,
        prices: 288
      },
      {
        date: 11150,
        prices: 319
      },
      {
        date: 11152,
        prices: 320
      }
    ];
  const type = "prices";

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
      <ResponsiveContainer width={100} height={100}>
        <LineChart
          width={400}
          height={400}
          data={data}
        >
          <Line
            type={"monotone"}
            dataKey={type}
            stroke="#3874ff"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#404042" />
          <YAxis dataKey={type} domain={["auto", "auto"]} />
          <XAxis dataKey="date" hide />
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      {/* {!!chart && <Chart chart={chart} setChart={setChart} />} */}
    </div>
  )
}

export default HomePage