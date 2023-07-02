export const dmsPattern = /(\d{2,})([.,]\d+)?[NS]\/(\d{2,})([.,]\d+)?[WE]/g;
export const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Cidade",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "DMS",
    dataIndex: "dms",
    key: "dms",
  },
  {
    title: "Data de criação",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Quantidade de pistas",
    dataIndex: "runwaysQuantity",
    key: "runwaysQuantity",
  },
];

export function findDMSCoordinates(text) {
  const match = text.match(dmsPattern);
  if (match) {
    return match;
  }

  return null;
}

export const UTILS = Object.freeze({
  MAX_FILES: 1,
  DONT_UPLOAD_TO_SERVER: false,
  JSON_MIME_TYPE: "application/json",
});
