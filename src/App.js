import Login from './Login/Login';
import SelectBox from './SelectBox/SelectBox';
import withTheme from './withTheme/withTheme';

import './App.scss';

function App() {
  const options = ["Default Theme", "Dark Theme", "Dark Contrast"]
  const darkTheme = withTheme(Login)("dark", "Dark Theme");
  const darkContrastTheme = withTheme(Login)("dark-contrast", "Dark Contrast Theme");
  const lightTheme = withTheme(Login)("light", "Light Theme");
  return (
    <div className="App">
      <SelectBox options={options} />
      <h2>Default Theme</h2>
      <Login />
      {darkTheme}
      {lightTheme}
      {darkContrastTheme}
    </div>
  );
}

export default App;
