import { UploadOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { Wrapper } from "./styles";
import { ButtonStyle } from "./styles";
import { UTILS } from "./utils";

export function FileUpload({ content, setContent, setShowTable }) {
  const validContent = content !== null;
  const uploadProps = {
    showUploadList: false,
    beforeUpload: (file) => {
      const isJSON = file.type === UTILS.JSON_MIME_TYPE;
      if (isJSON === false) {
        message.error(`${file.name} não é um arquivo JSON`);
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        try {
          const content = JSON.parse(fileReader.result);
          setContent(content);
          setShowTable(true);
          message.success(`A tabela está disponível!`);
        } catch (error) {
          message.error(`Houve uma falha ao processar o arquivo: ${file.name}`);
          console.error(error);
        }
      };
      fileReader.readAsText(file);
      return UTILS.DONT_UPLOAD_TO_SERVER;
    },
    maxCount: UTILS.MAX_FILE,
  };
  const buttonText = validContent ? "Mostrar tabela" : "Carregar arquivo JSON";
  const buttonProps = {
    type: "primary",
    style: ButtonStyle,
    size: "large",
    icon: validContent ? <EyeOutlined /> : <UploadOutlined />,
    onClick: validContent ? () => setShowTable(true) : null,
  };
  const button = <Button {...buttonProps}>{buttonText}</Button>;

  return (
    <Wrapper>
      {validContent ? button : <Upload {...uploadProps}>{button}</Upload>}
    </Wrapper>
  );
}
