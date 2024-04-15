import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface AddButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <Button
      shape="circle"
      size="small"
      icon={<PlusOutlined />}
      onClick={onClick}
    />
  );
};
