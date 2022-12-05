# React Tailwindcss Datepicker

<p align="center">
    <a href="https://react-tailwindcss-datepicker.vercel.app/" target="_blank">
      <img alt="React Tailwindcss Datepicker" width="100" style="border-radius: 100%;" src="https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/calendar_logo.svg?raw=true">
    </a><br><br>
    A modern date range picker component for React using Tailwind 3 and dayjs. Alternative to Litepie Datepicker which uses Vuejs.
</p>

##  Features
- ✅ Theming options
- ✅ Dark mode
- ✅ Single Date
- ✅ Single date use Range
- ✅ Shortcuts
- ✅ TypeScript support
- ✅ Localization(i18n)
- ⬜ Disable date
- ⬜ Custom shortcuts

## Documentation

Go to [full documentation](https://react-tailwindcss-datepicker.vercel.app/)

## Installation

⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin) & [Dayjs](https://day.js.org/en/) under the hood to work.

### Install via npm

```
$ npm install react-tailwindcss-datepicker 
```

### Install via yarn

```
$ yarn add react-tailwindcss-datepicker 
```

Make sure you have installed the peer dependencies as well with the below versions.
```
"dayjs": "^1.11.6",
"react": "^17.0.2 || ^18.2.0"
```

## Simple Usage

#### Tailwindcss Configuration
Add the datepicker to your tailwind configuration using this code

```javascript
// in your tailwind.config.js
module.exports = {
    // ...
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
    // ...
}
```

Then use react-tailwindcss-select in your app:

```jsx
import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

const App = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    
    return (
        <div>
            <Datepicker
                value={value}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default App;
```

## Theming options

**Light Mode**

![Light Mode](https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09_light.png?raw=true)

**Dark Mode**

![Dark Mode](https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09_dark.png?raw=true)

**Supported themes**
![Theme supported](https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09_theme.png?raw=true)

**Teal themes example**
![Theme supported](https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09_teal.png?raw=true)

You can find the demo at [here](https://react-tailwindcss-datepicker.vercel.app/demo)

> **Info**
>
> 👉 To discover the other possibilities offered by this library, you can consult the [full documentation](https://react-tailwindcss-datepicker.vercel.app/).


## Contributing
Got ideas on how to make this better? Open an issue!

## Thanks to
- [Litepie Datepicker](https://litepie.com/)
- [Vue Tailwind Datepicker](https://vue-tailwind-datepicker.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [dayjs](https://day.js.org/)

I thank you in advance for your contribution to this project.

## License
[MIT](LICENSE) Licensed. Copyright (c) Lewhe Onesine 2022.