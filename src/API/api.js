
function loginUser(credentials) {
    const { username, password } = credentials; // Destructuring assignment to initialize username and password
    // Simulating a successful login
    if (username === 'Admin' && password === 'react12') {
        return {
            success: true,
            message: 'Login successful',
            token: 'exampleToken'
        };
    }

    // Simulating a failed login
    return {
        success: false,
        message: 'Invalid username or password'
    };
}

export { loginUser };
