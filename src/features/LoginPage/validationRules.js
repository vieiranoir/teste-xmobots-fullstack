export const RULES = Object.freeze({
  USER_CANT_BE_EMPTY: {
    required: true,
    message: "Por favor, informe um nome de usuário",
  },
  USER_MIN_LENGTH: {
    pattern: /^.{10,}$/,
    message: "Insira um nome de usuário com, no mínimo 10 caracteres",
  },
  MUST_BE_EMAIL: {
    type: "email",
    message: "O e-mail informado não é válido",
  },
  EMAIL_CANT_BE_EMPTY: {
    required: true,
    message: "Por favor, informe um e-mail",
  },
  PASSWORD_CANT_BE_EMPTY: {
    required: true,
    message: "Por favor, informe uma senha",
  },
  PASSWORD_MIN_LENGTH: {
    pattern: /^.{10,}$/,
    message: "Insira uma senha com, no mínimo 10 caracteres",
  },
  PASSWORDS_MUST_MATCH: ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("As senhas não coincidem"));
    },
  }),
});
