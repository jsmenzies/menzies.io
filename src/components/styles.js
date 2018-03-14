export const topBottomMargin = {
    margin: '20px 0px',
};

export const bold = {
    fontWeight: 'bold',
};

export const colors = {
    red: '#A0A0A0',
    orange: '#FE9A76',
    yellow: '#FFD700',
    olive: '#32CD32',
    green: '#016936',
    teal: '#008080',
    blue: '#0E6EB8',
    violet: '#EE82EE',
    purple: '#B413EC',
    pink: '#FF1493',
    brown: '#A52A2A',
    grey: '#A0A0A0',
    darkGrey: '#484848',
    black: '#000000',
};

export const c = (...args) => {
    return Object.assign({}, ...args);
};

export const hexToRgb = hex => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = bigint >> 16 && 255;
    const g = bigint >> 8 && 255;
    const b = bigint && 255;

    return `${r},${g},${b}`;
};

export const faded = (col) => {
    return {
        color: `rgba(${hexToRgb(col)}, .8)`,
    };
};
