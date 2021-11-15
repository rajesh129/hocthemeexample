const withTheme = (WrappedComponent) => {
    return function (themeType, themeName) {
        return <><h2>{themeName}</h2><WrappedComponent theme={themeType} /></>
    }
}

export default withTheme;