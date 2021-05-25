const Register = () => {
    return <form className="register" onSubmit={e => {
        e.preventDefault();
        //register
    }}>
        <section className="username">
            <label for="user">Username</label><input type="text" name="user" required /> 
        </section>
        <section className="password">
            <label for="pass">Password</label><input type="password" name="pass" required />
        </section>
        <section className="verPassword">
            <label for="verpass">Verify Password</label><input type="password" name="verpass" required />
        </section>
        <section className="email">
            <label for="email">Email</label><input type="email" name="email" required />
        </section>
        <button type="submit">Register</button>
    </form>
}

export default Register;