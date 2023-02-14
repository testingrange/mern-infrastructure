import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser}) {
	return (
		<>
			<h2>AuthPage</h2>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
		</>
	)
}
