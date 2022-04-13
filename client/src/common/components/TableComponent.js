import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  white-space: nowrap;
  margin-top: 10px;
  border-spacing: 0 20px;
`;
const TableHead = styled.thead`
  background-color: #f5f8fa;
  border-radius: 8px;
`;
const TableBody = styled.tbody`
  position: relative;
`;
const HeadColumn = styled.th`
  padding: 12px 0 12px 26px;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  width:320px;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
const BodyRow = styled.tr`
  padding: 10px 16px;
  margin: 0;
`;

const BodyColumn = styled.td`
  font-size: 16px;
  font-weight: 500;
  border-left: none;
  border-right: none;
  border-top: solid 1px #bbbbbb;
  border-bottom: solid 1px #bbbbbb;
  text-align: left;
  vertical-align: middle;
  padding: 10px 0 10px 16px;

  &:first-child {
    border-radius: 8px 0 0 8px;
    border: solid 1px #bbbbbb;

    border-right: none;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
    border: solid 1px #bbbbbb;
    border-left: none;
  }
`;

export default {
    Table,
    TableHead,
    TableBody,
    HeadColumn,
    BodyColumn,
    BodyRow,
}
