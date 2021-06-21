import React from "react";
import { Menu, Dropdown } from "antd";

const Sort = ({ sortBy, ...props }) => {
  const onClick = ({ key }) => {
    sortBy(key);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Category Name</Menu.Item>
      <Menu.Item key="2">Price</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="6">Clear Sort</Menu.Item>
    </Menu>
  );

  return (
    <div {...props}>
      <Dropdown className="filter" overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Sort By
        </a>
      </Dropdown>
    </div>
  );
};

export default Sort;