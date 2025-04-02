import React, { useState, useEffect } from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = (event) => {
        setTheme(event.target.value);
    };

    return (
    <label value={theme} onChange={toggleTheme} class="form-label">Theme
        <select className="form-select mb-0">
            <option value="light">Light mode</option>
            <option value="dark">Dark mode</option>
        </select>
    </label>
    );
}

export default ThemeToggle;