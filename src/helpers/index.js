const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

export const getSkillIcons = importAll(require.context('src/images/tools', false, /\.(png|jpe?g|svg)$/));
export const getSlideImages = importAll(require.context('src/images/imageslides', false, /\.(png|jpe?g|svg)$/));