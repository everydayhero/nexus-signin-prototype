import React from 'react'
import Scenario from '../../components/Scenario'

export default () => {
  return (
    <div className="Scenarios">
      <Scenario route="/" name="Sign In: Legacy User/Connection">
        <p>Sign in as a legacy user and then connect your account to Blackbaud. <strong>Hint:</strong> Enter a different email address at the Blackbaud sign in/sign up step to simulate a different confirmation step at the end.</p>
      </Scenario>

      <Scenario route="/?auth=blackbaud-signedout" name="Sign In: Known Blackbaud User">
        <p>Sign in as to everydayhero as "known" Blackbaud user. Try changing the email address on the Blackbaud form to simulate what might happen if you try to sign in with an "unknown" Blackbaud account.</p>
        <p><strong>Note:</strong> In this scenario I believe we should endeavour to hide the "create an account" button on the Blackbaud side. There's no way for that button to lead to a successful sign in.</p>
      </Scenario>

      <Scenario route="/signup" name="Signup: Not Signed-in">
        <p>This flow represents the experience for a fresh signup that is <strong>not signed in to Blackbaud</strong>.</p>
        <p><strong>Hint:</strong> At the end of the signup flow there is a cheaty "next button" hidden in the top right.</p>
      </Scenario>

      <Scenario route="/signup?email=change.me@example.com&auth=blackbaud-signedin" name="Signup: Signed-in to Blackbaud">
        <p>This flow represents the experience for a fresh signup that is <strong>already signed in</strong> to their existing Blackbaud account.</p>
        <p><strong>Hint:</strong> At the end of the signup flow there is a cheaty "next button" hidden in the top right.</p>
      </Scenario>
    </div>
  )
}
