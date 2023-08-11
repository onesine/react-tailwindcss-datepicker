# Tailwindcss React Datepicker

<div align="center">
    
[![npm version](https://img.shields.io/npm/v/tailwindcss-react-datepicker?style=flat-square)](https://www.npmjs.com/package/tailwindcss-react-datepicker)
[![npm downloads](https://img.shields.io/npm/dt/tailwindcss-react-datepicker?style=flat-square)](https://www.npmjs.com/package/tailwindcss-react-datepicker)
    
</div>

### This is extended version of [react-tailwindcss-datepicker](https://react-tailwindcss-datepicker.vercel.app)
Added features:
- `isStaticPosition` - disable position absolute for Calendar (can be usefulul when you want to build in your calendar in your own popup)
- `renderHeader` - render custom component on the top of  a calender popover 
- `renderFooter` -  render custom component on the bottom of a calender popover
  
    <a href="https://react-tailwindcss-datepicker.vercel.app/" target="_blank">
      <img alt="React Tailwindcss Datepicker" width="100" style="border-radius: 100%;" src="https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/calendar_logo.svg?raw=true">
    </a><br><br>
    A modern date range picker component for React using Tailwind 3 and dayjs. Alternative to Litepie Datepicker which uses Vuejs.
</p>

## Contents

-   [Features](#features)
-   [Documentation](#documentation)
-   [Installation](#installation)
-   [Simple Usage](#simple-usage)
-   [Theming Options](#theming-options)
-   [Playground](#playground)
-   [Contributing](#contributing)

## Features

-   ✅ Theming options
-   ✅ Dark mode
-   ✅ Single Date
-   ✅ Single date use Range
-   ✅ Shortcuts
-   ✅ TypeScript support
-   ✅ Localization(i18n)
-   ✅ Date formatting
-   ✅ Disable specific dates
-   ✅ Minimum Date and Maximum Date
-   ✅ Custom shortcuts

## Documentation

Go to [full documentation](https://react-tailwindcss-datepicker.vercel.app/)

## Installation

⚠️ React Tailwindcss Datepicker uses Tailwind CSS 3 (with the
[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) plugin) &
[Dayjs](https://day.js.org/en/) under the hood to work.

### Install via npm

```
$ npm install tailwindcss-react-datepicker
```

### Install via yarn

```
$ yarn add tailwindcss-react-datepicker
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
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tailwindcss-react-datepicker/dist/index.esm.js"
    ]
    // ...
};
```

Then use tailwindcss-react-datepicker in your app:

```jsx
import React, { useState } from "react";
import Datepicker from "tailwindcss-react-datepicker";

const App = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Datepicker value={value} onChange={handleValueChange} />
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
> 👉 To discover the other possibilities offered by this library, you can consult the
> [full documentation](https://react-tailwindcss-datepicker.vercel.app/).

## PlayGround

Clone the `master` branch and run commands:

```sh
# Using npm
npm install && npm dev

# Using yarn
yarn install && yarn dev

```

Open a browser and navigate to `http://localhost:8888`

## Contributing

See
[CONTRIBUTING.md](https://github.com/onesine/react-tailwindcss-datepicker/blob/master/CONTRIBUTING.md)

## Official Documentation repo

[https://github.com/onesine/react-tailwindcss-datepicker-doc](https://github.com/onesine/react-tailwindcss-datepicker-doc)

## Thanks to

-   [Vue Tailwind Datepicker](https://vue-tailwind-datepicker.com/)
-   [React](https://reactjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [dayjs](https://day.js.org/)

I thank you in advance for your contribution to this project.

## Like it?

:star: [this repo](https://github.com/vasinkevych/bundle-scss)
[Buy me a :coffee: :coffee: :coffee:](https://www.buymeacoffee.com/vaviQ)
or become a sponsor [Github Sponsors](https://github.com/sponsors/vasinkevych)

## License

[MIT](LICENSE) Licensed. Copyright (c) Lewhe Onesine 2022.
