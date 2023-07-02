import { Table } from "antd";
import { findDMSCoordinates, columns } from "./utils";

export function AerodromesTable({ content }) {
  if (content === null) return <></>;
  const data = content.aerodromes.map((row, index) => {
    const { name, city, description, created_at, runways } = row;
    const dms = findDMSCoordinates(description);

    return {
      key: index + 1,
      name,
      city,
      dms,
      created_at,
      runwaysQuantity: runways.length,
    };
  });

  return <Table pagination={false} dataSource={data} columns={columns} />;
}
