// Code from https://github.com/CITGuru/express-ip

const geoip = require('geoip-lite');

module.exports = () => {

    const getIpInfo = function (ip) {
        // IPV6 addresses can include IPV4 addresses
        // So req.ip can be '::ffff:86.3.182.58'
        // However geoip-lite returns null for these
        if (ip.includes('::ffff:')) {
            ip = ip.split(':').reverse()[0]
        }
        const lookedUpIP = geoip.lookup(ip);
        if ((ip === '127.0.0.1' || ip === '::1')) {
            return { error: "This won't work on localhost." }
        }
        if (!lookedUpIP) {
            return { error: "Error occured while trying to process the information" }
        }
        return lookedUpIP;
    }

    const getIpInfoMiddleware = (req, res, next) => {
        const xForwardedFor = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).replace(/:\d+$/, '');
        const ip = xForwardedFor || req.connection.remoteAddress;
        req.ipInfo = { ip, ...getIpInfo(ip) };
        next();
    }

    return {
        getIpInfoMiddleware,
        getIpInfo,
    }
}