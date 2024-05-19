import './style.css'
const ThemeSwitch = ({ value, onChange }: { value: boolean, onChange: (val: boolean) => void }) => {
    return (
        <div className="checkbox-wrapper-54 scale-85">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={typeof window !== 'undefined' && value}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default ThemeSwitch