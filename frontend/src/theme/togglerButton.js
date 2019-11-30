import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div>
                    <span className="form-check-label mx-1 m-0">Dark Mode</span>
                    <label className="switch mx-1 m-0">
                        <input id="themeToggle" type="checkbox" className="form-check-input" onClick={toggleTheme}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;