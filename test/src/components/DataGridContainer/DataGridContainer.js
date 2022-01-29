import React, { useMemo, useCallback } from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { useApplicationContext } from "../../context/ApplicationContext";

const DataGridContainer = () => {
  const { scannedItems, terminatedItems } = useApplicationContext();

  const createData = useCallback((srNo, action, devices, timeStamp) => {
    return { srNo, action, devices, timeStamp };
  }, []);

  const rows = useMemo(() => {
    let listScanDeviceNames = [];
    let listTerminateDeviceNames = [];
    if (scannedItems.list.length > 0) {
      listScanDeviceNames = scannedItems.list.map((item) => {
        return item.deviceName;
      });
    }

    if (terminatedItems.list.length > 0) {
      listTerminateDeviceNames = terminatedItems.list.map((item) => {
        return item.deviceName;
      });
    }
    let rowData = [
      createData(
        "1",
        "Scan",
        listScanDeviceNames.toString(),
        scannedItems.timeStamp
      ),
      createData(
        "2",
        "Terminate",
        listTerminateDeviceNames.toString(),
        terminatedItems.timeStamp
      ),
    ];
    return rowData;
  }, [scannedItems, terminatedItems, createData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr no.</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Devices</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.action}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell data-testid="srNumber" component="th" scope="row">
                {row.srNo}
              </TableCell>
              <TableCell data-testid="action">{row.action}</TableCell>
              <TableCell data-testid="deviceName">{row.devices}</TableCell>
              <TableCell data-testid="timeStamp">{row.timeStamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataGridContainer;
