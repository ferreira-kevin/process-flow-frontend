import React from "react";
import { Menu, Dropdown } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { AddButton } from "../addButton/addButton";
import "./EdgeAddButton.scss";

interface EdgeAddButtonProps {
  style?: React.CSSProperties;
  data: {
    onAddNodeCallback: (args: { id: string; type: string }) => void;
  };
  id: string;
}

const EdgeAddButton: React.FC<EdgeAddButtonProps> = ({ style, data, id }) => {
  const handleMenuClick: MenuClickEventHandler = (event) => {
    data.onAddNodeCallback({ id, type: event.key as string });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="email">Email</Menu.Item>
      <Menu.Item key="sms">SMS</Menu.Item>
      <Menu.Item key="waitThenCheck">Rule</Menu.Item>
      <Menu.Item key="end">End</Menu.Item>
    </Menu>
  );

  return (
    <div className="EdgeAddButton" style={style}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <AddButton onClick={() => {}} />
      </Dropdown>
    </div>
  );
};

export default EdgeAddButton;
