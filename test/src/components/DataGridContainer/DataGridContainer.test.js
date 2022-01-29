import { render, screen } from "@testing-library/react";
import DataGridContainer from "./DataGridContainer";
import { ApplicationContext } from "../../context/ApplicationContext";

const obj1 = {
  id: 2,
  deviceName: "WW26W67W.machine.org",
  status: "Offline",
  applicationCount: 35,
  operatingSystem: "Ubuntu",
  ipAddress: "39.194.78.169",
  selected: true,
};

const obj3 = {
  id: 2,
  deviceName: "WE26W67W.machine.org",
  status: "Offline",
  applicationCount: 35,
  operatingSystem: "Ubuntu",
  ipAddress: "39.194.78.169",
  selected: true,
};
const obj2 = {
  id: 3,
  deviceName: "Samsung",
  status: "Offline",
  applicationCount: 25,
  operatingSystem: "Android",
  ipAddress: "39.194.78.164",
  selected: true,
};
const obj4 = {
  id: 3,
  deviceName: "OPPO",
  status: "Offline",
  applicationCount: 25,
  operatingSystem: "Android",
  ipAddress: "39.194.78.164",
  selected: true,
};
const scannedItems = {
  list: [obj1, obj3],
  timeStamp: "1/29/2022, 5:42:05 PM",
};
const terminatedItems = {
  list: [obj2, obj4],
  timeStamp: "1/29/2022, 5:42:03 PM",
};
const mockState = {
  scannedItems,
  terminatedItems,
};
describe("<DataGridContainer/>", () => {
  it("renders learn react link", () => {
    render(
      <ApplicationContext.Provider value={mockState}>
        <DataGridContainer />
      </ApplicationContext.Provider>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Scan")).toBeInTheDocument();
    expect(
      screen.getByText("WW26W67W.machine.org,WE26W67W.machine.org")
    ).toBeInTheDocument();
    expect(screen.getByText("1/29/2022, 5:42:05 PM")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Terminate")).toBeInTheDocument();
    expect(screen.getByText("Samsung,OPPO")).toBeInTheDocument();
    expect(screen.getByText("1/29/2022, 5:42:03 PM")).toBeInTheDocument();
  });
});
