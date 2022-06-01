import * as React from "react";
import { Card } from "antd";
import { Typography } from "antd";
import "antd/dist/antd.css";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import ResultPage from "./resultPage";
import "./style.scss";
const { TextArea } = Input;

const Items = [
  {
    label: "ToDo",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "On Going",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "Stalled",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "Done",
    key: "4",
    icon: <UserOutlined />,
  },
];
export default function OutlinedCard() {
  const [saveData, setSaveData] = React.useState({
    title: "",
    description: "",
    date: "",
    status: "",
  });
  const [pageToggle, setPageToggle] = React.useState(false);
  const onChange = (date, dateString) => {
    console.log(saveData, dateString);
    setSaveData({ ...saveData, date: dateString });
  };
  const handleMenuClick = (e) => {
    const data = Items.find((element) => element.key == e.key);
    if (data) {
      setSaveData({ ...saveData, status: data.label });
    }
  };
  const handleButtonClick = (e) => {
    if (
      saveData.title &&
      saveData.description &&
      saveData.date &&
      saveData.status
    ) {
      setPageToggle(true);
    }
  };
  const menu = <Menu onClick={handleMenuClick} items={Items} />;

  return (
    <>
      <Card>
        {pageToggle ? (
          <>
            <Typography className="form-header">ToDo Result</Typography>
            <div>
              {" "}
              Title : {saveData.title} <br />
              Description: {saveData.description} <br />
              Date: {saveData.date} <br />
              Status: {saveData.status}
            </div>
          </>
        ) : (
          <>
            {" "}
            <Typography className="form-header">ToDo Form</Typography>
            <div className="form-fields-container">
              <Input
                placeholder="Title"
                onChange={(e) =>
                  setSaveData({ ...saveData, title: e.target.value })
                }
              />
              <TextArea
                rows={4}
                placeholder="Description"
                maxLength={6}
                onChange={(e) =>
                  setSaveData({ ...saveData, description: e.target.value })
                }
              />
              <DatePicker onChange={onChange} />

              <Dropdown.Button overlay={menu}>Status</Dropdown.Button>
              <Button onClick={handleButtonClick} style={{ marginLeft: 8 }}>
                Save
              </Button>
            </div>
          </>
        )}
      </Card>
    </>
  );
}
