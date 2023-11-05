const toTypeOption = (color) => {
    const { code, name } = color;

    return {
        label: name,
        value: code,
    };
};

export default toTypeOption;