const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
  <div>
  Your id is: ${req.session.userId}
    <form method="POST">
      <input name="email" type="text" placeholder="email" />
      ${getError(errors, "email")}
      <input name="password" type="password" placeholder="password" />
      ${getError(errors, "password")}
      <input name="passwordConfirmation" type="password" placeholder="password confirmation" />
      ${getError(errors, "passwordConfirmation")}
      <button>Sign Up</button>
    </form>
  </div>
  `,
  });
};