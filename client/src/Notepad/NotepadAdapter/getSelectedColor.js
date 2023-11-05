const getSelectedColor = (color, code) =>
    color.find((n) => n.code === code);

export default getSelectedColor;