import React from 'react'
import Scenario from '../../components/Scenario'

export default () => {
  return (
    <div className="Scenarios">
      <Scenario route="/" name="Sign In: Legacy User/Connection">
        Sign in as a legacy user and then connect your account to Blackbaud. Enter a different email address at the Blackbaud sign in/sign up step to simulate a different confirmation step at the end.
      </Scenario>

      <Scenario route="/?auth=blackbaud-signedout" name="Sign In: Known Blackbaud User">
        Sign in as to everydayhero as "known" Blackbaud user. Try changing the email address on the Blackbaud form to simulate what might happen if you try to sign in with an "unknown" Blackbaud account.
      </Scenario>

      <Scenario route="/signup" name="Signup: Not Signed-in">
        This flow represents the experience for a fresh signup that is <strong>not signed in to Blackbaud</strong>.
      </Scenario>

      <Scenario route="/signup?email=change.me@example.com&auth=blackbaud-signedin" name="Signup: Signed-in to Blackbaud">
        This flow represents the experience for a fresh signup that is <strong>already signed in</strong> to their existing Blackbaud account.
      </Scenario>
    </div>
  )
}
