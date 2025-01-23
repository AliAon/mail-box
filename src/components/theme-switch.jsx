import { useState } from 'react';
import { Switch } from '@radix-ui/react-switch';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = ({ setTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckedChange = (checked) => {
    setIsDarkMode(checked);
    // Toggle theme based on the switch state
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="flex items-center space-x-2">
    
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={handleCheckedChange}
        className="relative inline-flex items-center justify-center w-12 h-6 p-1 bg-gray-300 rounded-full"
      >
        <span
          className={`absolute w-4 h-4 bg-white rounded-full transition-all transform duration-200 ease-in-out ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          <span className="absolute inset-0 flex justify-center items-center">
            {isDarkMode ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : null}
          </span>
        </span>
      </Switch>
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${!isDarkMode ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default ThemeSwitch;
