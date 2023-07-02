import { Button, Form, Input, message } from "antd";
import { Wrapper, Title } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { save } from "./loginSlice";
import { RULES } from "./validationRules";

export function LoginPage() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const dispatch = useDispatch();
  const {
    USER_CANT_BE_EMPTY,
    USER_MIN_LENGTH,
    PASSWORD_CANT_BE_EMPTY,
    PASSWORD_MIN_LENGTH,
  } = RULES;
  const userRules = [USER_CANT_BE_EMPTY, USER_MIN_LENGTH];
  const passwordRules = [PASSWORD_CANT_BE_EMPTY, PASSWORD_MIN_LENGTH];
  const onFinish = (values) => {
    dispatch(save(values));
    navigate("/map");
  };
  const onFinishFailed = (errorInfo) => {
    message.error("Corrija as informações e tente novamente");
    console.log("Failed:", errorInfo);
  };
  const formProps = {
    name: "basic",
    initialValues: {
      remember: true,
    },
    style: { width: "600px" },
    size: "large",
    layout: "vertical",
    onFinish,
    onFinishFailed,
    autoComplete: "off",
  };
  const usernameProps = {
    label: <label style={{ color: "white" }}>Nome de Usuário</label>,
    name: "username",
    rules: userRules,
  };
  const passwordProps = {
    label: <label style={{ color: "white" }}>Senha</label>,
    name: "password",
    rules: passwordRules,
  };

  if (username !== "") navigate("/map");

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form {...formProps}>
        <Form.Item {...usernameProps}>
          <Input />
        </Form.Item>

        <Form.Item {...passwordProps}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#32BF84" }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <Link style={{ color: "white" }} to={"/signup"}>
        Ainda não tem uma conta? Cadastre-se!
      </Link>
    </Wrapper>
  );
}
