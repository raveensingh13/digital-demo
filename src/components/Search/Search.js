import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const SearchBox = ({ onSearch, ...props }) => (
  <div {...props}>
    <Search
      placeholder="Enter Product or Category Name"
      onSearch={onSearch}
      style={{ width: 400 }}
    />
  </div>
);

export default SearchBox;