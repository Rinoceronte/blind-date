const Login = () => {
    return <form className="login" onSubmit={e => {
        e.preventDefault();
        //login
    }}>
        <section className="username">
            <label for="user">Username or Email</label><input type="text" name="user" required/>
        </section>
        <section className="password">
            <label for="pass">Password</label><input type="password" name="pass" required />
        </section>
        <button type="submit">Login</button>
    </form>
}