# @unimake-ui/react

## 1.2.2

### Patch Changes

- Desestructure and fix TextInput props which was having error and fix sizes of TextInput and Button (md: 36px, lg: 40px)

## 1.2.1

### Patch Changes

- Add css property for each component that receives css string provided by "css" instance from styled-components; Add "as" property for button component

## 1.2.0

### Minor Changes

- Add components: Avatar, Checkbox, MultiStep, TextInput, Box and TextArea; Lighten gray colors with +5 rgb points and fix color issues between dark and light theme

## 1.1.1

### Patch Changes

- Fix the way themes was being exported. Now you have two variables: theme (for light colors) and darkTheme (for dark colors)

## 1.1.0

### Minor Changes

- Add theme.dark and theme.light for using with the exported ThemeProvider

## 1.0.4

### Patch Changes

- Export ThemeProvider and add darkColors to theme object; Uses props.theme inside all components; Add the prefix "$" in all component variables

## 1.0.3

### Patch Changes

- Add 'use client' at index.ts file which is exporting all styled components

## 1.0.2

### Patch Changes

- Add text and heading components and uses "use client" directive

## 1.0.1

### Patch Changes

- Add first version of unimake-ui package using latest versions of packages (react@19, storybook@8, vite@6) and a button component at @unimake-ui/react using styled-components library

## 1.0.0

### Major Changes

- Add first version of unimake-ui package using latest versions of packages (react@19, storybook@8, vite@6) and a button component at @unimake-ui/react using styled-components library
