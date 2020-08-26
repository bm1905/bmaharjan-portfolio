const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

export const getSkillIcons = importAll(require.context('images/tools', false, /\.(png|jpe?g|svg)$/));
export const getSlideImages = importAll(require.context('images/imageslides', false, /\.(png|jpe?g|svg)$/));