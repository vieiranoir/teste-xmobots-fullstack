import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Sidebar, User, Username, Wrapper } from "./styles";
import { Map } from "./Map";
import { Avatar, Modal } from "antd";
import { FileUpload } from "../FileUpload/FileUpload";
import { AerodromesTable } from "../FileUpload/AerodromesTable";

export function MapPage() {
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.login);
  const [content, setContent] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const modalProps = {
    title: "Tabela de Aerodromes",
    centered: true,
    closable: false,
    onOk: () => setShowTable(false),
    onCancel: () => setShowTable(false),
    width: 1200,
  };

  useEffect(() => {
    if (username === "") return navigate("/");
  });

  return (
    <Wrapper>
      <Sidebar>
        <User>
          <Avatar size={65} style={{ backgroundColor: "rgb(51, 51, 51)" }}>
            {username === "" ? "usuário" : username[0].toUpperCase()}
          </Avatar>
          <Username>{username}</Username>
        </User>
        <FileUpload
          content={content}
          setContent={setContent}
          setShowTable={setShowTable}
        />
        <Modal {...modalProps} open={showTable}>
          <AerodromesTable content={content} />
        </Modal>
      </Sidebar>
      <Map content={content} />
    </Wrapper>
  );
}
