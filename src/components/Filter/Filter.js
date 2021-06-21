import React from "react";
import { Menu, Dropdown } from "antd";

const Filter = ({ filterBy, ...props }) => {
  const onClick = ({ key }) => {
    filterBy(key);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Price: Under 10000</Menu.Item>
      <Menu.Item key="2">{'Price: < 20000'}</Menu.Item>
      <Menu.Item key="3">{'Price: < 40000'}</Menu.Item>
      <Menu.Item key="4">{'Price: < 70000'}</Menu.Item>
      <Menu.Item key="5">Price: Above 70000</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="6">Clear Filter</Menu.Item>
    </Menu>
  );

  return (
    <div {...props}>
      <Dropdown className="filter" overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Filter By
        </a>
      </Dropdown>
    </div>
  );
};

export default Filter;