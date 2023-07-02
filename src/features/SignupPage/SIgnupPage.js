import { Button, Form, Input, message } from "antd";
import { Wrapper, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { save } from "../LoginPage/loginSlice";
import { RULES } from "../LoginPage/validationRules";

export function SignupPage() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const dispatch = useDispatch();
  const {
    USER_CANT_BE_EMPTY,
    USER_MIN_LENGTH,
    EMAIL_CANT_BE_EMPTY,
    MUST_BE_EMAIL,
    PASSWORD_CANT_BE_EMPTY,
    PASSWORD_MIN_LENGTH,
    PASSWORDS_MUST_MATCH,
  } = RULES;
  const userRules = [USER_CANT_BE_EMPTY, USER_MIN_LENGTH];
  const emailRules = [EMAIL_CANT_BE_EMPTY, MUST_BE_EMAIL];
  const passwordRules = [PASSWORD_CANT_BE_EMPTY, PASSWORD_MIN_LENGTH];
  const confirmPasswordRules = [...passwordRules, PASSWORDS_MUST_MATCH];
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
  const emailProps = {
    label: <label style={{ color: "white" }}>E-mail</label>,
    name: "email",
    rules: emailRules,
  };
  const passwordProps = {
    label: <label style={{ color: "white" }}>Senha</label>,
    name: "password",
    rules: passwordRules,
  };
  const confirmPasswordProps = {
    label: <label style={{ color: "white" }}>Confirme sua senha</label>,
    name: "passwordConfirmation",
    dependencies: ["password"],
    rules: confirmPasswordRules,
  };

  if (username !== "") navigate("/map");

  return (
    <Wrapper>
      <Title>Signup</Title>
      <Form {...formProps}>
        <Form.Item {...usernameProps}>
          <Input />
        </Form.Item>
        <Form.Item {...emailProps}>
          <Input />
        </Form.Item>
        <Form.Item {...passwordProps}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...confirmPasswordProps}>
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
            Signup
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
