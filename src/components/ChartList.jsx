import React, { useState, useEffect } from "react";
import axios from "axios";
import RegularHoursChart from "./RegularHoursChart";
import { Row, Col } from "react-grid-system";

/**
 * Takes the number of pages and selected stock
 * From the selected stock gets the stock data.
 * Iterates for each day to render and sends stock data to RegularHoursChart
 *
 */
export default function ChartList(props) {
  // collection of bars for one single day
  const [dailyBars, setDailyBars] = useState([]);

  useEffect(() => {
    // refresh data on new stock selection
    setDailyBars([]);

    // /**
    //  * API version of data fetch. Daily bars.
    //  * Fetches new day in the background
    //  * @param {number} delay timeout to fetch a new daily daa in the background
    //  */
    // async function fetchBars(delay) {
    //   // fetch each page in background with 1s delay
    //   for (let i = 0; i < props.pages; i++) {
    //     await axios(`/daily-regular/${props.stock}/?page=${i}`)
    //       .then(res => {
    //         setDailyBars(dailyBars => dailyBars.concat(res.data));
    //       })
    //       .catch(err => console.error(err));
    //     await setTimeout(() => {}, 3000);
    //   }
    // }

    /**
     * API version of data fetch. Daily bars.
     * Fetches new day in the background
     * This one fetches only the first day chart
     */
    async function fetchBars() {
      await axios(`/daily-regular/${props.stock}/?page=0`)
        .then(res => {
          setDailyBars(dailyBars => dailyBars.concat(res.data));
        })
        .catch(err => console.error(err));
      await setTimeout(() => {}, 3000);
    }

    // // File system version data fetch
    // function fetchBars(stock) {
    //   axios(`data/${props.stock}.json`)
    //     .then(res => setDailyBars(res.data))
    //     .catch(err => console.error(err));
    // }

    fetchBars();
  }, [props.stock, props.pages]);

  return (
    <>
      {/* <Row> */}
      {dailyBars &&
        dailyBars.map((set, key) => {
          const ranId = Math.random() * Math.random();

          return (
            // <Col sm={12}>
            <div id={ranId}>
              {console.log("out1", ranId)}
              {console.log("out2", ranId)}
              <RegularHoursChart key={key} data={set} ranId={ranId} />;
            </div>
            // </Col>
          );
        })}
      {/* </Row> */}
    </>
  );
}
