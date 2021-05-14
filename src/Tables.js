import React from "react";
import styles from "./styles";
import { Table } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { IoTriangle } from "react-icons/io5";

const Tables = () => {
  return (
    <div className="container-fluid mx-3 my-3" style={styles.container}>
      <Table responsive variant="light">
        <thead className="text-muted">
          <tr className="my-2">
            <th>#</th>
            <th>Platform</th>
            <th>Buy/Sell Price</th>
            <th>Last Traded Prize</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr className="my-2">
            <td>1</td>
            <td>WazirX</td>
            <td>
              <BiRupee />
              40,14,405
            </td>
            <td>
              <BiRupee />
              40,06,524/
              <BiRupee />
              40,15,456
            </td>
            <td>5.46%</td>
            <td>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          <tr className="my-2">
            <td>2</td>
            <td>WazirX</td>
            <td>
              <BiRupee />
              40,14,405
            </td>
            <td>
              <BiRupee />
              40,06,524/
              <BiRupee />
              40,15,456
            </td>
            <td>5.46%</td>
            <td>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          <tr className="my-2">
            <td>3</td>
            <td>WazirX</td>
            <td>
              <BiRupee />
              40,14,405
            </td>
            <td>
              <BiRupee />
              40,06,524/
              <BiRupee />
              40,15,456
            </td>
            <td>5.46%</td>
            <td>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          <tr className="my-2">
            <td>4</td>
            <td>WazirX</td>
            <td>
              <BiRupee />
              40,14,405
            </td>
            <td>
              <BiRupee />
              40,06,524/
              <BiRupee />
              40,15,456
            </td>
            <td>5.46%</td>
            <td>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          <tr className="my-5">
            <td>5</td>
            <td>WazirX</td>
            <td>
              <BiRupee />
              40,14,405
            </td>
            <td>
              <BiRupee />
              40,06,524/
              <BiRupee />
              40,15,456
            </td>
            <td>5.46%</td>
            <td>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
