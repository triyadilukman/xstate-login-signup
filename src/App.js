import React from "react";
import { LoginForm } from "./features/authentication/login";
import { RecoverPasswordForm } from "./features/authentication/recover-password";
import { SignupForm } from "./features/authentication/signup";
import "./styles.css";

const A = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children || href}
  </a>
);

const App = () => (
  <main>
    <h1>Form Validation using XState and Yup</h1>
    <p>
      Built by <A href="https://twitter.com/fold_left">Jamie Mason</A> using{" "}
      <A href="https://xstate.js.org">XState</A> and{" "}
      <A href="https://github.com/jquense/yup">Yup</A> – aims to provide good
      Accessibility following advice from{" "}
      <A href="https://www.w3.org/WAI/tutorials/" /> and{" "}
      <A href="https://webaim.org/techniques/forms/" /> and was tested using
      VoiceOver for Mac.
    </p>
    <p>
      Forms are created by providing a <code>FormProvider</code> with initial
      form data, a Yup Schema to validate that data, and a function for
      submitting valid form data to a Server. The FormProvider uses XState
      internally to manage the UI, validation, and communication with the
      Server.
    </p>
    <p>
      Examples of creating forms using the <code>FormProvider</code> can be seen
      at <code>/src/features/authentication/*/providers/*-provider.js</code>.
    </p>
    <p>
      The examples below post to a Fake Web Server at{" "}
      <code>/src/features/authentication/lib/fake-api.js</code>, which is
      configured to randomly succeed or simulate various error scenarios.
    </p>
    <p>
      No styling has been applied beyond embedding{" "}
      <A href="https://newcss.net" />.
    </p>
    <p>
      <A href="https://twitter.com/fold_left">Let me know</A> if you have advice
      to improve it, thanks.
    </p>
    <fieldset>
      <legend>Login</legend>
      <LoginForm />
    </fieldset>
    <fieldset>
      <legend>Recover Password</legend>
      <RecoverPasswordForm />
    </fieldset>
    <fieldset>
      <legend>Signup</legend>
      <SignupForm />
    </fieldset>
  </main>
);

export default App;
