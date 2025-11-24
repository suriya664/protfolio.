// ===== Password Toggle Functionality =====
const passwordToggles = document.querySelectorAll('.password-toggle');

passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// ===== Password Strength Checker =====
const registerPassword = document.getElementById('registerPassword');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

if (registerPassword && strengthFill && strengthText) {
    registerPassword.addEventListener('input', function() {
        const password = this.value;
        const strength = checkPasswordStrength(password);
        
        strengthFill.className = 'strength-fill';
        strengthFill.classList.add(strength.level);
        strengthText.textContent = strength.text;
        strengthText.style.color = strength.color;
    });
}

function checkPasswordStrength(password) {
    let strength = 0;
    let feedback = [];
    
    if (password.length >= 8) strength++;
    else feedback.push('at least 8 characters');
    
    if (/[a-z]/.test(password)) strength++;
    else feedback.push('lowercase letter');
    
    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('uppercase letter');
    
    if (/[0-9]/.test(password)) strength++;
    else feedback.push('number');
    
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    else feedback.push('special character');
    
    if (strength <= 2) {
        return {
            level: 'weak',
            text: 'Weak password',
            color: '#ef4444'
        };
    } else if (strength <= 4) {
        return {
            level: 'medium',
            text: 'Medium password',
            color: '#f59e0b'
        };
    } else {
        return {
            level: 'strong',
            text: 'Strong password',
            color: '#10b981'
        };
    }
}

// ===== Login Form Handling =====
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const remember = document.querySelector('input[name="remember"]').checked;
        
        // Basic validation
        if (!email || !password) {
            showAuthMessage(loginMessage, 'Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAuthMessage(loginMessage, 'Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate login (replace with actual authentication)
        showAuthMessage(loginMessage, 'Login successful! Redirecting...', 'success');
        
        // Simulate redirect after 1.5 seconds
        setTimeout(() => {
            // window.location.href = 'index.html';
            console.log('Login successful', { email, remember });
        }, 1500);
    });
}

// ===== Register Form Handling =====
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.querySelector('input[name="terms"]').checked;
        
        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            showAuthMessage(registerMessage, 'Please fill in all fields.', 'error');
            return;
        }
        
        // Name validation
        if (name.length < 2) {
            showAuthMessage(registerMessage, 'Name must be at least 2 characters long.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAuthMessage(registerMessage, 'Please enter a valid email address.', 'error');
            return;
        }
        
        // Password validation
        if (password.length < 8) {
            showAuthMessage(registerMessage, 'Password must be at least 8 characters long.', 'error');
            return;
        }
        
        // Password match validation
        if (password !== confirmPassword) {
            showAuthMessage(registerMessage, 'Passwords do not match.', 'error');
            return;
        }
        
        // Terms validation
        if (!terms) {
            showAuthMessage(registerMessage, 'Please accept the Terms & Conditions.', 'error');
            return;
        }
        
        // Simulate registration (replace with actual registration)
        showAuthMessage(registerMessage, 'Account created successfully! Redirecting to login...', 'success');
        
        // Simulate redirect after 2 seconds
        setTimeout(() => {
            // window.location.href = 'login.html';
            console.log('Registration successful', { name, email });
        }, 2000);
    });
}

// ===== Show Auth Message =====
function showAuthMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    // Scroll to message
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds for success, keep error visible
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

// ===== Forgot Password Form Handling =====
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('forgotEmail').value.trim();
        
        // Basic validation
        if (!email) {
            showAuthMessage(forgotPasswordMessage, 'Please enter your email address.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAuthMessage(forgotPasswordMessage, 'Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate password reset (replace with actual password reset functionality)
        showAuthMessage(forgotPasswordMessage, 'Password reset link has been sent to your email address. Please check your inbox.', 'success');
        
        // Reset form after 2 seconds
        setTimeout(() => {
            forgotPasswordForm.reset();
        }, 2000);
    });
}

// ===== Reset Password Form Handling =====
const resetPasswordForm = document.getElementById('resetPasswordForm');
const resetPasswordMessage = document.getElementById('resetPasswordMessage');
const resetPassword = document.getElementById('resetPassword');
const resetStrengthFill = document.getElementById('resetStrengthFill');
const resetStrengthText = document.getElementById('resetStrengthText');

// Password strength checker for reset password
if (resetPassword && resetStrengthFill && resetStrengthText) {
    resetPassword.addEventListener('input', function() {
        const password = this.value;
        const strength = checkPasswordStrength(password);
        
        resetStrengthFill.className = 'strength-fill';
        resetStrengthFill.classList.add(strength.level);
        resetStrengthText.textContent = strength.text;
        resetStrengthText.style.color = strength.color;
    });
}

if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('resetPassword').value;
        const confirmPassword = document.getElementById('confirmResetPassword').value;
        
        // Basic validation
        if (!password || !confirmPassword) {
            showAuthMessage(resetPasswordMessage, 'Please fill in all fields.', 'error');
            return;
        }
        
        // Password validation
        if (password.length < 8) {
            showAuthMessage(resetPasswordMessage, 'Password must be at least 8 characters long.', 'error');
            return;
        }
        
        // Password match validation
        if (password !== confirmPassword) {
            showAuthMessage(resetPasswordMessage, 'Passwords do not match.', 'error');
            return;
        }
        
        // Simulate password reset (replace with actual password reset functionality)
        showAuthMessage(resetPasswordMessage, 'Password has been reset successfully! Redirecting to login...', 'success');
        
        // Simulate redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// ===== Social Auth Buttons =====
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.querySelector('span').textContent;
        console.log(`Sign in with ${platform} clicked`);
        // Implement social authentication here
        showAuthMessage(
            loginMessage || registerMessage,
            `${platform} authentication coming soon!`,
            'error'
        );
    });
});

